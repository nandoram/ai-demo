import { NextResponse } from "next/server";
export default function middleware(req) {
   if(req.nextUrl.pathname =="/test"){
      return new NextResponse(req.nextUrl.host + req.nextUrl.ip , { status: 200})
   return NextResponse.next();
   }
}