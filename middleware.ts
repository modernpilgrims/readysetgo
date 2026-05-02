import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const locales = ['en', 'ru']

function copyResponseCookies(from: NextResponse, to: NextResponse) {
  from.cookies.getAll().forEach((cookie) => {
    to.cookies.set(cookie)
  })

  return to
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Root redirect
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url))
  }

  // 2. Locale guard
  const isPublicSystemRoute =
    pathname.startsWith('/api') ||
    pathname.startsWith('/auth') ||
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico'

  const isAppRoute = pathname.startsWith('/app')

  const firstSegment = pathname.split('/')[1]
  const isLocaleRoute = locales.includes(firstSegment)

  if (!isPublicSystemRoute && !isAppRoute && !isLocaleRoute) {
    return NextResponse.redirect(new URL('/en', request.url))
  }

  // 3. Protect only /app
  if (!isAppRoute) {
    return NextResponse.next()
  }

  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value)
          })

          supabaseResponse = NextResponse.next({
            request,
          })

          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    const loginUrl = new URL('/auth/login', request.url)
    loginUrl.searchParams.set('next', pathname)

    const redirectResponse = NextResponse.redirect(loginUrl)
    return copyResponseCookies(supabaseResponse, redirectResponse)
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}