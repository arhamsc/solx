"use client";
import CustomButton from "@components/ui/CustomButton";
import { SolXDetailsCardProps } from "@types";
import { TransitionModelWrapper } from "@components";

const SolXDetailsModel = ({
  grid,
  solX,
  isOpen,
  onClose,
  buyNowFunction,
}: SolXDetailsCardProps) => {
  return (
    <TransitionModelWrapper isOpen={isOpen} onClose={onClose}>
      <div className="relative w-full h-40 rounded-lg flex flex-col justify-center items-center">
        <span className="text-6xl font-montserrat font-bold">{solX.units}</span>{" "}
        <span className="font-roboto font-light italic text-2xl">units</span>
      </div>
      <div className="text-center -mt-4">
        <span className="bg-light_green text-2xl rounded-full px-3 py-2 text-white">
          {solX.status}
        </span>
      </div>
      {/* Content */}
      <div className="flex-1 flex flex-col gap-2">
        <DetailRow title="Wei" content={solX.amount.toString()} />
        <DetailRow title="Unit Cost" content={solX.price.toString()} />
      </div>
      {/* <div>
                      <h4 className="text-4xl mt-5 italic font-semibold font-roboto text-center">
                        Grid Details
                      </h4>
                      <DetailRow title="Grid Name" content="APSPDCL" />
                      <DetailRow title="Grid Country" content="IN" />
                      <DetailRow title="Grid State" content="Andhra" />
                      <DetailRow title="Capacity" content="20 kWh" />
                    </div> */}
      <div>
        <h4 className="text-4xl mt-5 italic font-semibold font-roboto text-center">
          Addresses
        </h4>
        <DetailRow title="Managed By" content={solX.currentGrid} isAddress />
        <DetailRow title="Seller" content={solX.manager} isAddress />
      </div>
      <div>
        <CustomButton
          title="Buy Now"
          containerStyles=" mt-4 w-full bg-orange text-white rounded-xl text-2xl font-medium hover:shadow-lg hover:border-2 hover:border-orange hover:text-orange hover:bg-white transition-all"
          handleClick={buyNowFunction}
        />
      </div>
    </TransitionModelWrapper>
  );
};

export default SolXDetailsModel;

const DetailRow = ({
  content,
  title,
  isAddress,
}: {
  title: string;
  content: string;
  isAddress?: boolean;
}) => {
  return (
    <div
      className={`mt-3 flex    ${
        isAddress
          ? "flex-col gap-2 justify-center items-start"
          : "gap-4 items-center border-b-4 pl-5 border-orange rounded-full "
      }`}>
      <h4 className="text-2xl italic font-semibold font-roboto">{title}</h4>
      <p
        className={`text-2xl font-light w-full ${
          isAddress
            ? "bg-gray-300 px-4 py-1 rounded-full truncate text-center"
            : ""
        }`}>
        <span>{content}</span>
      </p>
    </div>
  );
};
