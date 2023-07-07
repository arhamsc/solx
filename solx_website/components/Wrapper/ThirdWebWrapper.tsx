"use client";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { Localhost } from "@thirdweb-dev/chains";
import { ReactNode } from "react";

const ThirdWebWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ThirdwebProvider
      activeChain={{ ...Localhost, rpc: ["http://localhost:7545"] }}
      supportedWallets={[metamaskWallet()]}>
      {children}
    </ThirdwebProvider>
  );
};

export default ThirdWebWrapper;
