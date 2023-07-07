"use client";

import { wagmiConfig } from "@providers";
import { ReactNode } from "react";
// import { WagmiConfig } from "wagmi";

const WagmiWrapper = ({ children }: { children: ReactNode }) => {
  // return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
  return <></>
};

export default WagmiWrapper;
