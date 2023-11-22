import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function AccountDeletatioModal({
  closeModal,
  isOpen,
  handleDeleteAcc,
  userId,
}) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 flex justify-center items-center">
              <div className="text-center max-w-[500px] w-full bg-white py-10 rounded-lg">
                <span>
                  <svg
                    className="mx-auto mb-4 h-14 w-14 text-primary dark:text-gray-200"
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
                <h3 className="mb-5 text-lg font-normal text-black dark:text-gray-400">
                  Are you sure you want to delete this Account?
                </h3>
                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => handleDeleteAcc(userId)}
                    className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
