"use client";
import { avatarMenuLinks } from "@constants";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { BsPersonCircle } from "react-icons/bs";

const AvatarMenu = () => {
  return (
    <div>
      <Menu as="div" className={"relative inline-block"}>
        {/* Button */}
        <div>
          <Menu.Button>
            <BsPersonCircle className="text-5xl text-green mt-1" />
          </Menu.Button>
        </div>
        {/* Menu */}
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className={"absolute mt-2"}>
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-light_green text-cream px-6 py-2 xl:px-8 xl:py-4 w-[15rem]">
              {avatarMenuLinks.map((link, i) => (
                <Menu.Item key={i}>
                  {({ active }) => (
                    <p
                      className={`text-xl font-roboto rounded-lg px-4 py-2 ${
                        active ? "font-semibold bg-orange" : "font-normal"
                      } transition-all`}>
                      <Link href={link.link}>{link.title}</Link>
                    </p>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default AvatarMenu;
