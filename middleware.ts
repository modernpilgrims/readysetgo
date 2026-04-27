import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // ✅ 1. LOCALE REDIRECT
  if (
    pathname === '/' ||
    (!pathname.startsWith('/en') &&
      !pathname.startsWith('/ru') &&
      !pathname.startsWith('/app') &&
      !pathname.startsWith('/api') &&
      !pathname.startsWith('/auth') &&
      !pathname.startsWith('/_next'))
  ) {
    return NextResponse.redirect(new URL('/en', request.url))
  }

  // ✅ 2. ПРОПУСК ПОСЛЕ GOOGLE AUTH
  if (pathname.startsWith('/app')) {
    const fromAuth = searchParams.get('fromAuth')

    // 🔥 ключевой фикс
    if (fromAuth) {
      return NextResponse.next()
    }

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