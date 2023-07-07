"use client";

import { Grid } from "@models";
import {
  SmartContract,
  useAddress,
  useContract,
  useContractWrite,
  useDisconnect,
  useMetamask,
} from "@thirdweb-dev/react";
import { MetaMaskWallet } from "@thirdweb-dev/wallets";
import { BaseContract, ethers } from "ethers";
import { createContext, ReactNode, useState } from "react";

type ContextType = {
  gridFactoryContract: SmartContract<BaseContract> | undefined;
  solXFactoryContract: SmartContract<BaseContract> | undefined;
  getAllGrids: () => Promise<Grid[] | undefined>;
  address: string | undefined;
  connect: () => Promise<MetaMaskWallet> | undefined;
  disconnect: () => Promise<void>;
};

export const ThirdWebContext = createContext<ContextType>({
  gridFactoryContract: undefined,
  solXFactoryContract: undefined,
  address: undefined,
  connect: () => undefined,
  disconnect: async () => {},
  getAllGrids: async () => [],
});

export const ThirdWebContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [grids, setGrids] = useState<Grid[]>([]);

  const { contract: gridFactoryContract } = useContract(
    `0x${process.env.NEXT_PUBLIC_GRID_FACTORY_ADDRESS}`,
  );

  const { contract: solXFactoryContract } = useContract(
    `0x${process.env.NEXT_PUBLIC_SOLX_FACTORY_ADDRESS}`,
  );

  const { contract: sampleGridContract } = useContract(
    "0xF1D15D118EC0378B6162820358Ee433C40326eB5",
  );

  const { mutateAsync: createGridContract } = useContractWrite(
    gridFactoryContract,
    "createGrid",
  );

  const getAllGrids = async () => {
    try {
      const gridInfos = (await gridFactoryContract?.call("getAllGrids")) as [];
      const gS = gridInfos?.map((e: any) => Grid.fromThirdWebObject(e));
      console.log(gS);
      setGrids(gS);
      return gS;
    } catch (e) {
      console.log("Get ALL Grids Context", e);
    }
  };

  const address = useAddress();

  const connect = useMetamask();

  const disconnect = useDisconnect();

  return (
    <ThirdWebContext.Provider
      value={{
        gridFactoryContract,
        getAllGrids,
        address,
        connect,
        disconnect,
        solXFactoryContract,
      }}>
      {children}
    </ThirdWebContext.Provider>
  );
};
