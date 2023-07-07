"use client";
import { statusFilters } from "@constants";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BiFilter } from "react-icons/bi";
import { LuChevronsUpDown } from "react-icons/lu";

const SolXFilters = ({
  selectedStatus,
  setSelectedStatus,
}: {
  selectedStatus: string;
  setSelectedStatus: (e: string) => void;
}) => {
  // const [selectedStatus, setSelectedStatus] = useState<string>("");
  return (
    <section className="my-3 xl:my-6 flex flex-col xl:flex-row justify-between items-center ">
      <p className="font-medium text-2xl font-montserrat flex gap-4 items-center">
        <span>Filter</span>
        <span className="">
          <BiFilter />
        </span>
      </p>
      <div>
        <Listbox value={selectedStatus} onChange={setSelectedStatus}>
          <div className="relative x-10 w-full xl:w-[12rem] mt-4">
            <Listbox.Button
              className={
                "flex justify-between items-center w-full gap-6 cursor-default text-xl bg-cream rounded-lg px-3 xl:px-6 py-2 text-green shadow-md font-roboto font-medium"
              }>
              <span className="capitalize">
                {selectedStatus !== ""
                  ? selectedStatus.split("_").join(" ")
                  : "Status"}
              </span>
              <LuChevronsUpDown className="text-lg" />
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Listbox.Options
                className={
                  "absolute mt-1 w-full overflow-auto rounded-md bg-light_green py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-lg"
                }>
                {statusFilters.map((e) => (
                  <Listbox.Option
                    key={e.id}
                    value={e.name}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 font-roboto border-b-2 border-cream ${
                        active
                          ? "bg-orange text-cream shadow-lg"
                          : "text-gray-900"
                      }`
                    }>
                    {({ active, selected }) => (
                      <span className="capitalize">
                        {e.name.split("_").join(" ")}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </section>
  );
};

export default SolXFilters;
