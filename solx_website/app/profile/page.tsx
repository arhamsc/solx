"use client";
import { useThirdWebContext } from "@hooks";
import { SolX } from "@models";
import { useAddress, useContractRead } from "@thirdweb-dev/react";
import Image from "next/image";
import {useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const query = useSearchParams();
  const type = query.get("type");
  const isMySolXs = type === "mySolXs";
  const { solXFactoryContract } = useThirdWebContext();
  const [solXArray, setSolXArray] = useState<SolX[]>([]);
  const address = useAddress();
  const {
    data: solXData,
    isLoading,
    isError,
    isSuccess,
  } = useContractRead(
    solXFactoryContract,
    isMySolXs ? "getSolXOnMarketForAddress" : "getSolXSoldForAddress",
    [address],
  );
  useEffect(() => {
    const solXs =
      (solXData?.map((e: any) => SolX.fromThirdWebObject(e)) as SolX[]) ?? [];
    setSolXArray(solXs);
    console.log(solXs);
  }, [solXData]);
  return (
    <main className="overflow-hidden xl:h-screen padding-x pt-36 relative">
      <h1 className="my-6 text-4xl font-montserrat font-semibold text-center">
        {isMySolXs ? "My SolX on Market" : "My SolX Purchases"}
      </h1>
      <table className="table-fixed w-full overflow-x-scroll border-separate border-spacing-y-3">
        <thead>
          <tr className="text-xl font-medium text-center h-[4rem] bg-cream divide-x-2 divide-light_green font-montserrat">
            <td className="w-1/12">Image</td>
            <td>Units</td>
            <td>
              <span>Price</span>
              <span className="text-sm self-end pl-2">/unit</span>
            </td>
            <td>
              <span>Amount</span>
              <span className="text-sm self-end pl-2">wei</span>
            </td>
            <td>Grid</td>
            <td>{isMySolXs ? "Status" : "Owner"}</td>
          </tr>
        </thead>
        <tbody>
          {solXArray?.length <= 0 ? (
            <>
              <tr>
                {" "}
                <td colSpan={6}>
                  <p className="text-2xl text-semibold text-center font-montserrat">
                    {isMySolXs
                      ? "There are no SolXs listed on market."
                      : "You haven't purchased any SolXs."}
                  </p>
                </td>
              </tr>
            </>
          ) : (
            <>
              {solXArray?.map((e) => (
                <tr key={e.solXAddress} className="text-center">
                  <td className="flex-center border-b-[1px] border-light_green pb-4 font-roboto">
                    <Image
                      src="/images/solar_panel.svg"
                      width={80}
                      height={18}
                      alt="Image"
                      className="object-contain rounded-lg"
                    />
                  </td>
                  <td className="border-b-[1px] border-light_green pb-4">
                    {e.units}
                  </td>
                  <td className="border-b-[1px] border-light_green pb-4">
                    {e.price}
                  </td>
                  <td className="border-b-[1px] border-light_green pb-4">
                    {e.amount}
                  </td>
                  <td className="border-b-[1px] border-light_green pb-4 overflow-hidden">
                    <p className="truncate text-center">
                      <span className="bg-gray-300 rounded-full px-4 py-2 ">
                        {e.currentGrid}
                      </span>
                    </p>
                  </td>
                  <td className="border-b-[1px] border-light_green pb-4">
                    {isMySolXs ? (
                      <span
                        className={` text-cream rounded-2xl px-4 py-2 capitalize text-medium ${
                          e.status !== "sold" ? "bg-light_green" : "bg-orange"
                        } `}>
                        {e.status.split("_").join(" ")}
                      </span>
                    ) : (
                      <p className="truncate text-center">
                        <span className="bg-gray-300 rounded-full px-4 py-2 ">
                          {e.manager}
                        </span>
                      </p>
                    )}
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </main>
  );
};

export default ProfilePage;
