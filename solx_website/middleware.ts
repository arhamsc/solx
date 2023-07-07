import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { getAccount } from "@wagmi/core";
// import { wagmiConfig } from "@providers";

export async function middleware(request: NextRequest) {
  // wagmiConfig;
  // const { isConnected, address } = getAccount();
  // // console.log(wagmiConfig.store.getState());
  // if (!isConnected) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
}

export const config = {
  matcher: ["/grid/create"],
};
