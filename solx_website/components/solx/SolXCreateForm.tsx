"use client";

import InputField from "@components/forms/input";
import CustomButton from "@components/ui/CustomButton";
import { Listbox, Transition } from "@headlessui/react";
import { useThirdWebContext } from "@hooks";
import { Grid } from "@models";
import { useRive } from "@rive-app/react-canvas";
import { useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { NewSolXType } from "@types";
import { useRouter } from "next/navigation";
import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { MdSolarPower } from "react-icons/md";

const SolXCreateForm = () => {
  const { gridFactoryContract, solXFactoryContract } = useThirdWebContext();
  const router = useRouter();

  const { data: gridData, isLoading } = useContractRead(
    gridFactoryContract,
    "getAllGrids",
  );

  const {
    mutateAsync: putOnMarket,
    isLoading: isSolXLoading,
    isError,
    isSuccess,
  } = useContractWrite(solXFactoryContract, "putSolXOnMarket");

  const grids =
    (gridData?.map((e: any) => Grid.fromThirdWebObject(e)) as Grid[]) ?? [];

  const [formData, setFormData] = useState<NewSolXType>({
    amount: 0,
    currentGrid: "",
    price: 0,
    units: 0,
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setFormData((prev) => ({ ...prev, amount: prev.price * prev.units }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await putOnMarket({
        args: [
          formData.units,
          formData.price,
          formData.amount,
          formData.currentGrid,
        ],
      });
      // setFormData()
    } catch (e) {
      console.log(e);
    }
  };

  const { RiveComponent: RiveLoadingComponent } = useRive({
    src: "/animations/loading.riv",
    // stateMachines: "State Machine 1",
    autoplay: true,
  });

  const { RiveComponent: RiveSuccessComponent } = useRive({
    src: "/animations/success.riv",
    // stateMachines: "State Machine 1",
    autoplay: true,
    onStop: () => {
      setTimeout(() => {
        router.replace("/solx");
      }, 1000);
    },
  });

  if (isSolXLoading) {
    return (
      <div className="flex-center w-full h-full text-center">
        <RiveLoadingComponent style={{ height: "200px", color: "red" }} />
      </div>
    );
  }
  if (isSuccess) {
    return (
      <div className="flex-center flex-col w-full h-full text-center">
        <RiveSuccessComponent
          style={{ height: "200px", color: "red", textAlign: "center" }}
        />
        <p className="mt-3 font-semibold text-2xl">Your SolX is Live!</p>
        <p className="mt-3 text-md">Redirecting to home page.</p>
      </div>
    );
  }

  return (
    <div className="w-1/2 absolute bg-light_green px-5 py-10 rounded-xl">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between gap-4">
          <InputField
            id="units"
            label="Units"
            name="units"
            required
            onChangeHandler={handleOnChange}
            // type:
            value={formData.units.toString()}
          />
          <InputField
            id="price"
            label="Price/unit"
            name="price"
            required
            onChangeHandler={handleOnChange}
            value={formData.price.toString()}
          />
        </div>
        <InputField
          id="amount"
          label="Amount"
          name="amount"
          required
          // onChangeHandler={handleOnChange}
          readOnly
          value={formData.amount.toString()}
        />
        <Listbox
          value={formData.currentGrid}
          onChange={(e) => setFormData((prev) => ({ ...prev, currentGrid: e }))}
          name="currentGrid">
          <div className="relative z-10 w-full mt-4">
            <Listbox.Button className="flex justify-between w-full items-center cursor-default rounded-xl bg-cream py-3 border-collapse px-4 text-left sm:text-sm text-xl font-medium">
              {isLoading ? (
                <span>Loading Grids...</span>
              ) : (
                <span>
                  {formData.currentGrid !== ""
                    ? formData.currentGrid
                    : "Select Grid"}
                </span>
              )}
              <MdSolarPower className="text-2xl text-green" />
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Listbox.Options
                className={
                  "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-cream py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                }>
                {grids?.map((grid) => (
                  <Listbox.Option
                    key={grid.gridAddress}
                    value={grid.gridAddress}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 font-roboto ${
                        active
                          ? "bg-orange text-cream shadow-lg"
                          : "text-gray-900"
                      }`
                    }>
                    {({ active, selected }) => (
                      <div>
                        <p className="text-medium text-xl">{grid.gridName}</p>

                        <p className="flex w-full justify-between">
                          <span>{grid.state}</span>
                          <span>{grid.country}</span>
                        </p>
                        <p className="text-medium">{grid.capacity} kWh</p>
                        <span>{grid.gridAddress}</span>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        <CustomButton
          title="Put on Market"
          containerStyles="rounded-xl bg-orange text-xl font-medium w-1/2 mx-auto mt-8 hover:shadow-md font-roboto"
        />
      </form>
    </div>
  );
};

export default SolXCreateForm;
