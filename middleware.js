// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const session = req.cookies.get('session')?.value;
  const protectedPaths = ['/blog/new'];
  const isProtected = protectedPaths.some(p => req.nextUrl.pathname.startsWith(p));

  if (isProtected && !session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/blog/new'],
};
