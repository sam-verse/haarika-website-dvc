import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // If the path is any case-variant of /dvc, redirect to /DVC
  if (pathname.length === 4 && pathname.toLowerCase() === '/dvc' && pathname !== '/DVC') {
    const url = request.nextUrl.clone()
    url.pathname = '/DVC'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Match all variants of /dvc (case-insensitive)
export const config = {
  matcher: ['/dvc', '/DVC', '/DvC', '/dVc', '/DVc', '/dvC', '/DvC', '/dVC'],
} 