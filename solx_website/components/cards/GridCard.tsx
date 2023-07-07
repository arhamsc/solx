import { NewGridType } from "@types";

type GridCardProps = {
  gridInfo: NewGridType;
  managerAddress: string;
};

const GridCard = ({
  gridInfo: { gridCapacity, gridCountry, gridName, gridState },
  managerAddress,
}: GridCardProps) => {
  return (
    <div className="max-w-sm flex-shrink-0 rounded-xl bg-cream bg-opacity-5 overflow-hidden shadow-lg">
      <img
        className="w-1/2 mx-auto pt-4"
        src="/images/grid_tower.svg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Grid {gridName} </div>
        <p className="text-gray-700 text-base">
          Capacity: {gridCapacity} kWh <br />
          State: {gridState}
          <br />
          Country: {gridCountry}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 overflow-hidden text-ellipses w-1/2">
          {managerAddress}
        </span>
      </div>
    </div>
  );
};

export default GridCard;
