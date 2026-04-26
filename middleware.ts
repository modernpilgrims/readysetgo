import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 👉 1. LOCALE REDIRECT (главное)
  if (
    pathname === '/' ||
    (!pathname.startsWith('/en') &&
      !pathname.startsWith('/ru') &&
      !pathname.startsWith('/app') &&
      !pathname.startsWith('/api') &&
      !pathname.startsWith('/auth') &&
      !pathname.startsWith('/_next'))
  ) {
    const locale = 'en' // потом сделаем авто
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }

  // 👉 2. защита /app (как было)
  if (pathname.startsWith('/app')) {
    const hasAuth =
      request.cookies.get('sb-access-token') ||
      request.cookies.get('sb-refresh-token')

    if (!hasAuth) {
      const loginUrl = new URL('/auth/login', request.url)
      loginUrl.searchParams.set('next', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}