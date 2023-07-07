import { CustomButton } from "@components";
import Link from "next/link";
import React from "react";

const PutOnMarket = () => {
  return (
    <div className="bg-gradient-linear w-full py-10">
      <div className="landing__register-section ">
        <p className="text-2xl font-montserrat font-semibold tracking-wide">
          Start selling SolX with us
        </p>
        <Link href={"#"}>
          <CustomButton
            title={"Sell SolX"}
            containerStyles="rounded-full bg-orange px-10 py-3 text-xl font-roboto font-medium text-white hover:shadow-md"
          />
        </Link>
      </div>
    </div>
  );
};

export default PutOnMarket;
