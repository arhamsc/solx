"use client";
import { CustomButton, ProcessModel, SolXDetailsModel } from "@components";
import { useThirdWebContext } from "@hooks";
import {
  useContractWrite,
} from "@thirdweb-dev/react";
import { SolXCardProps } from "@types";
import { useState } from "react";

const SolXCard = ({ solX }: SolXCardProps) => {
  const { amount, currentGrid, manager, price, solXAddress, status, units } =
    solX;
  const [openSolXDetails, setOpenSolXDetails] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { solXFactoryContract } = useThirdWebContext();
  const {
    mutateAsync: buySolX,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useContractWrite(solXFactoryContract, "buySolX");
  const handleBuyNow = async () => {
    setOpenSolXDetails(false);
    setIsModalOpen(true);
    try {
      const res = await buySolX({
        args: [solXAddress],
        overrides: {
          value: amount,
        },
      });
    } catch (e) {
      //Already handled By hook
    }
  };
  // const { data, error, isError } = useContractRead(
  //   gridFactoryContract,
  //   "getSingleGrid",
  //   [currentGrid],
  // );

  // console.log(data);
  // console.log(currentGrid);
  // console.log(isError);
  // const gridInfo =
  //   data !== null
  //     ? Grid.fromThirdWebObject(data)
  //     : new Grid("", "", "", 0, "", "");
  return (
    <>
      <div className="shadow-sm hover:shadow-xl transition-all border-spacing-2 border-2 border-light_green px-6 py-3 rounded-xl flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="flex gap-2 pb-2">
            <span className="text-6xl font-montserrat font-bold self-start">
              {units}
            </span>{" "}
            <span className="font-roboto font-medium self-end">units</span>
          </p>
          <p>
            {" "}
            <span
              className={`${
                status === "sold" ? "bg-orange" : "bg-light_green"
              } rounded-full px-3 py-2 text-white`}>
              {status}
            </span>
          </p>
        </div>
        <div className="flex justify-between">
          <p className="flex gap-1">
            <span className="font-semibold self-start text-2xl font-roboto">
              {amount}
            </span>{" "}
            <span className="font-medium self-end">wei</span>
          </p>
          <p className="flex gap-1">
            <span className="font-semibold self-start text-2xl font-roboto">
              {price}
            </span>{" "}
            <span className="font-medium self-end text-sm">/unit</span>
          </p>
        </div>
        <div>
          <p className="truncate bg-gray-200 rounded-xl px-2 py-1">
            Grid:
            <span>{currentGrid}</span>
          </p>
        </div>
        <CustomButton
          title="View More"
          containerStyles="bg-orange text-cream px-4 py-2 text-xl font-medium rounded-xl hover:text-orange hover:bg-white hover:border-2 hover:border-orange transition-all"
          handleClick={() => setOpenSolXDetails(true)}
        />
      </div>
      <ProcessModel
        isError={isError}
        isLoading={isLoading}
        isOpen={isModalOpen}
        isSuccess={isSuccess}
        message="You have purchased this SolX!!"
        onClose={() => setIsModalOpen(false)}
        errorMessage={
          (error as any)?.reason ?? "Could not complete the SolX purchase"
        }
        loadingMessage="Please, wait while we process your transaction..."
        onSuccessStop={() => {
          setTimeout(() => {
            setIsModalOpen(false);
          }, 2000);
        }}
      />
      <SolXDetailsModel
        solX={solX}
        // grid={gridInfo}
        buyNowFunction={handleBuyNow}
        isOpen={openSolXDetails}
        onClose={() => setOpenSolXDetails(false)}
      />
    </>
  );
};

export default SolXCard;
