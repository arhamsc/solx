"use client";
import { ClientOnly, GridCard } from "@components";
import { useThirdWebContext } from "@hooks";
import { Grid } from "@models";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useRive } from "@rive-app/react-canvas";
import { useContractRead } from "@thirdweb-dev/react";

const GridList = () => {
  const { gridFactoryContract } = useThirdWebContext();

  const { data, isLoading, error, isError } = useContractRead(
    gridFactoryContract,
    "getAllGrids",
  );
  // const { data: d } = useContractRead(gridFactoryContract, "getSingleGrid", [
  //   "0xF34B5ee2cEC05Da298AC6066301AEB2153bc42cc",
  // ]);
  //   console.log(d);
  const grids =
    (data?.map((e: any) => Grid.fromThirdWebObject(e)) as Grid[]) ?? [];

  const { RiveComponent: RiveLoadingComponent } = useRive({
    src: "/animations/loading.riv",
    autoplay: true,
  });
  return (
    <section className="w-full py-10">
      <div className="landing__partner-grid-section">
        <p className="font-montserrat font-bold text-4xl text-center">
          Our Partner Grids
        </p>
        <p className="text-xl">
          Register your grid with us, to make your energy transactions
          decentralized and widely accessible.
        </p>
        <div className="w-full flex justify-center items-center">
          <BiChevronLeft className="font-bold text-4xl text-orange shadow-sm" />
          <div className="w-11/12 px-10">
            <ClientOnly>
              {isError ? (
                <p className="text-red-500">
                  Something went wrong when getting the grids.
                </p>
              ) : null}
            </ClientOnly>
            {isLoading ? (
              <RiveLoadingComponent style={{ height: "200px", color: "red" }} />
            ) : null}
            <div className="flex gap-5 px-5 py-5 overflow-x-scroll ">
              {grids.length >= 0
                ? grids.map((e, i) => (
                    <GridCard
                      key={i}
                      gridInfo={{
                        gridCapacity: e.capacity,
                        gridCountry: e.country,
                        gridName: e.gridName,
                        gridState: e.state,
                      }}
                      managerAddress={e.manager}
                    />
                  ))
                : null}
            </div>
          </div>
          <BiChevronRight className="font-bold text-4xl text-orange shadow-sm" />
        </div>
      </div>
    </section>
  );
};

export default GridList;
