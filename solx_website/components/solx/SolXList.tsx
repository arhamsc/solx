"use client";
import { ProcessModel, SolXCard, SolXFilters } from "@components";
import { useThirdWebContext } from "@hooks";
import { SolX } from "@models";
import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { filterSolXs } from "@utils/filterSolXs";
import { useEffect, useState } from "react";

const SolXList = () => {
  const { solXFactoryContract } = useThirdWebContext();
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [filteredSolX, setFilteredSolX] = useState<SolX[]>([]);
  const {
    data: solXData,
    // isLoading,
    // isError,
    // error,
    // isSuccess,
  } = useContractRead(solXFactoryContract, "getAllSolXOnMarket");

  const address = useAddress();

  useEffect(() => {
    const solXs =
      (solXData?.map((e: any) => SolX.fromThirdWebObject(e)) as SolX[]) ?? [];

    if (selectedStatus !== "") {
      setFilteredSolX(filterSolXs(solXs, selectedStatus as any, address ?? ""));
    } else {
      setFilteredSolX(filterSolXs(solXs, "on_market", address ?? ""));
    }
    console.log(filteredSolX);
  }, [solXData, selectedStatus]);

  return (
    <>
      {/* FILTERs */}
      <SolXFilters
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      {filteredSolX.length <= 0 ? (
        <section className="flex-center w-full h-full">
          <p className="text-4xl bg-orange px-10 py-5 rounded-md flex-center">
            There are no SolXs in market place.
          </p>
        </section>
      ) : (
        <section className="flex flex-col">
          <section className="grid grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Card */}
            {filteredSolX?.map((solX) => (
              <SolXCard key={solX.solXAddress} solX={solX} />
            ))}
          </section>
        </section>
      )}
      {/* <ProcessModel
        isError={isError}
        isLoading={isLoading}
        isOpen={}
      /> */}
    </>
  );
};

export default SolXList;
