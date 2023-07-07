import { OverviewCardProps } from "@types";
import React from "react";

const OverviewCard = ({ title, icon, isMinus, number }: OverviewCardProps) => {
  return (
    <div className="px-14 py-10 shadow-lg bg-light_green flex gap-7 rounded-xl">
      <div className="flex flex-col gap-2 font-extrabold">
        <p className="text-4xl font-light text-cream">{title}</p>
        <p className="flex text-cream">
          <span className=" self-start text-6xl">{number}</span>
          <span className="self-end text-4xl font-semibold">
            {isMinus !== null && isMinus ? "-" : "+"}
          </span>
        </p>
      </div>
      <div className="flex-center rounded-full bg-orange px-4 py-2">{icon}</div>
    </div>
  );
};

export default OverviewCard;
