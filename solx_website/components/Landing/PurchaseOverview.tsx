"use client";

import { CustomButton } from "@components";
import OverviewCard from "@components/cards/OverviewCard";
import { useThirdWebContext } from "@hooks";
import { toDisplayValue, useContractRead } from "@thirdweb-dev/react";
import Link from "next/link";
import React from "react";
import { GiGreenPower, GiSolarPower } from "react-icons/gi";
import { MdSell } from "react-icons/md";

const PurchaseOverview = () => {
  const { gridFactoryContract, solXFactoryContract } = useThirdWebContext();
  const { data: gridData } = useContractRead(
    gridFactoryContract,
    "getAllGrids",
  );
  const { data: soldCount } = useContractRead(
    solXFactoryContract,
    "solXSoldCount",
  );
  const { data: onMarketCount } = useContractRead(
    solXFactoryContract,
    "solXOnMarketCount",
  );
  return (
    <div className="w-full py-10">
      <div className="flex-center flex-col">
        {/* Div Card */}
        <div className="landing__overview-section">
          <OverviewCard
            title="Partners"
            icon={<GiSolarPower className="text-8xl text-green" />}
            number={gridData?.length ?? 330}
          />
          <OverviewCard
            title="SolX Sold"
            icon={<GiGreenPower className="text-8xl text-green" />}
            number={
              Number.parseFloat(toDisplayValue(soldCount ?? 0, 0)).toString() ??
              330
            }
          />
          <OverviewCard
            title="SolX Avail"
            icon={<MdSell className="text-8xl text-green" />}
            number={
              Number.parseFloat(
                toDisplayValue(onMarketCount ?? 0, 0),
              ).toString() ?? 330
            }
          />
        </div>
        <h2 className="mt-8 mb-6 text-6xl font-montserrat font-bold text-orange drop-shadow-md ">
          Sell SolX and Contribute
        </h2>
        <Link href={"/solx/create"}>
          <CustomButton
            title={"Sell SolX"}
            containerStyles="rounded-full bg-orange px-10 py-3 text-4xl font-montserrat font-medium text-white hover:shadow-md hover:bg-white hover:border-orange hover:border-[2px] hover:text-orange transition-all"
          />
        </Link>
      </div>
    </div>
  );
};

export default PurchaseOverview;
