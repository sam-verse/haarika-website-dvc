import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect /dvc to /DVC (case-insensitive)
  if (pathname.toLowerCase() === '/dvc' && pathname !== '/DVC') {
    const url = request.nextUrl.clone()
    url.pathname = '/DVC'
    return NextResponse.redirect(url)
  }

  // Allow all routes to continue (the page logic will show only the logo except /DVC)
  return NextResponse.next()
}

export const config = {
  matcher: ['/dvc', '/DVC'],
} 