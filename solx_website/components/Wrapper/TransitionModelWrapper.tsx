"use client";

import { Dialog, Transition } from '@headlessui/react';
import { ModelWrapperProps } from '@types';
import React, { Fragment } from 'react'
import { GrFormClose } from 'react-icons/gr';

const TransitionModelWrapper = ({isOpen, children, onClose}:ModelWrapperProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className={"relative z-10"} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel
                className={
                  "relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5"
                }
                onClick={onClose}>
                <button className="absolute top-2 right-2 z-10 w-fit bg-light_green rounded-full hover:shadow-lg">
                  <GrFormClose className="text-4xl text-orange" />
                </button>
                <div className="flex-1 flex flex-col gap-3">
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default TransitionModelWrapper