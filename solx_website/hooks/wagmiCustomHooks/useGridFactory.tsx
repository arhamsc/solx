import useThirdWebContext from "@hooks/useThirdWebContext";
import { useContractWrite } from "@thirdweb-dev/react";
import { useDebounce } from "usehooks-ts";

const useGridFactory = () => {
  const { gridFactoryContract } = useThirdWebContext();
  const gridContractWrite = <T,>({
    debounceObject,
    functionName,
  }: {
    debounceObject?: T;
    functionName: string;
  }) => {
    const debouncedFormData = useDebounce(debounceObject, 500);

    const { mutateAsync, isLoading, isSuccess, isError, error, data } =
      useContractWrite(gridFactoryContract, "createGrid");

    return {
      mutateAsync,
      isLoading,
      isSuccess,
      isError,
      error,
      // isTxnSuccess,
      data,
    };
  };

  // const gridContractFetchAllGrids = async (functionName: string) => {
  //   // setTimeout(() => {}, 2000)
  //   const { data, error, isLoading, isError, isSuccess, internal } =
  //     useContractRead({
  //       address: `0x${process.env.NEXT_PUBLIC_GRID_FACTORY_ADDRESS}` ?? "",
  //       abi: gridAbi,
  //       functionName,
  //     });
  //   console.log("DATA", data);
  //   console.log("INTERNAL", internal);

  //   return {
  //     data,
  //     error,
  //     isLoading,
  //     isError,
  //     isSuccess,
  //   };
  // };

  return {
    gridContractWrite,
    // gridContractFetchAllGrids,
  };
};

export default useGridFactory;
