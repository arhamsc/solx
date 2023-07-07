import { prepareWriteContract } from "@wagmi/core";
import { GridFactoryABI } from "@contracts";

const gridFactoryAbi = <const>[...GridFactoryABI.abi];

const invokeGridFactory = async (methodName: string, args: any[]) => {
  try {
    const res = await prepareWriteContract({
      address: `0x${process.env.NEXT_PUBLIC_GRID_FACTORY_ADDRESS}` ?? "",
      abi: gridFactoryAbi,
      functionName: methodName,
      args: [...args],
    });
    return res;
  } catch (e) {
    console.log(e);
  }
  return null;
};

export default invokeGridFactory;
