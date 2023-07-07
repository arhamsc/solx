"use client";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

const SolXPopOver = () => {
  return (
    <div>
      <Popover className={"relative"}>
        {({ open }) => (
          <>
            <Popover.Button className="navbar__element-right-border before:pl-3">
              <span>SolX</span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel className={"absolute"}>
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 px-6 py-2 xl:w-[15rem] lg:w-fit bg-light_green  text-cream">
                  {/* Items */}
                  <div className="relative hover:bg-orange px-4 py-2 rounded-lg">
                    <Link href="/solx">Buy SolX</Link>
                  </div>
                  <div className="relative hover:bg-orange px-4 py-2 rounded-lg">
                    <Link href="/solx/create">Sell SolX</Link>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default SolXPopOver;
