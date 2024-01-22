// Example - 01
// Just to check in the server console
// export function middleware() {
//     console.log('Middleware called..')
// }

// Example - 02
// Redirect routes if the route is other than the checked pathname 
// import { NextResponse } from "next/server";

// export function middleware(request) {
//     if(request.nextUrl.pathname != "/login"){
//         return NextResponse.redirect(new URL("/login", request.url))
//     }    
// }

// Example - 03
// Redirects routes other than the matched pathnames

import { UnifrakturCook } from "next/font/google";
import { NextResponse } from "next/server";

export function middleware(request) {
    return NextResponse.redirect(new URL("/login", request.url))
}

export const config = {
    // matcher : "/about/:path*"   // To restrict access for only one path and its sub-paths
    // matcher : ["/about/:path*", "/studentlist/:path*"]   // To restrict access for more than one path
    matcher : "/about/:path+"   // To restrict access for the subpaths but allow access to rootpath
    

}