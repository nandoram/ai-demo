import { NextResponse } from 'next/server'
export default function middleware(req) {
  if (req.nextUrl.pathname == '/test') {
    const forwarded = req.headers.get('x-forwarded-for')
    const ip = req.headers.get('x-forwarded-host')
    return new NextResponse(forwarded + ' | ' + ip, { status: 200 })
  }
}
