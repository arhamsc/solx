"use client";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { Ethereum, Localhost } from "@thirdweb-dev/chains";
import { ReactNode } from "react";

const CustomEth = {
  ...Ethereum,
  rpc: [process.env.NEXT_PUBLIC_INFURA_URL ?? ""],
};

const CustomLocalhost = { ...Localhost, rpc: ["http://localhost:7545"] };

const activeChain = process.env.NODE_ENV === "development" ? CustomLocalhost : CustomEth;

const ThirdWebWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      supportedChains={[
        CustomEth,
        { ...Localhost, rpc: ["http://localhost:7545"] },
      ]}
      supportedWallets={[metamaskWallet()]}>
      {children}
    </ThirdwebProvider>
  );
};

export default ThirdWebWrapper;
