import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CancelIcon from "../../assets/ICONS/Cancel.svg";
import defaultPetImage from "../../assets/pets/pets-dog.png";
const PetInfoModal = ({ isOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
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
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[725px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex justify-between items-center mb-5">
                      <p className="font-bold">Cartella clinica dell’animale</p>
                      <img
                        onClick={closeModal}
                        className="cursor-pointer"
                        src={CancelIcon}
                        alt=""
                      />
                    </div>
                  </Dialog.Title>
                  <div className="mt-2">
                    <figure className="w-20 h-20 object-cover rounded-full overflow-hidden">
                      <img
                        className="w-full h-full"
                        src={defaultPetImage}
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="mt-3">
                    <h2 className="font-bold text-lg">Dati generali</h2>
                    <table className="w-[70%]">
                      <thead>
                        <tr>
                          <td>
                            <span className="text-gray-400 text-sm">Name</span>
                          </td>
                          <td>
                            <span className="text-gray-400 text-sm">
                              Specie
                            </span>
                          </td>
                          <td>
                            <span className="text-gray-400 text-sm">Razza</span>
                          </td>
                          <td>
                            <span className="text-gray-400 text-sm">
                              Data di nascita
                            </span>
                          </td>
                          <td>
                            <span className="text-gray-400 text-sm">Sesso</span>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Rocky</td>
                          <td>Cane</td>
                          <td>Labrador</td>
                          <td>11/12/2019</td>
                          <td>Maschio</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3">
                    <h2 className="font-bold text-lg">Microchip</h2>
                    <table className="w-[70%]">
                      <thead>
                        <tr>
                          <td>
                            <span className="text-gray-400 text-sm">
                              Numero del microchip
                            </span>
                          </td>
                          <td>
                            <span className="text-gray-400 text-sm">
                              Data di implantazione
                            </span>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>0123456789</td>
                          <td>10/11/2022</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3">
                    <h2 className="font-bold text-lg">Anamnesi</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Nunc condimentum
                      sed aenean auctor massa rhoncus in. Ut imperdiet nunc
                      blandit quis sed nullam ipsum. Felis sem in velit sed
                      lacus cum viverra eget eget. Sed pellentesque natoque
                      tincidunt suspendisse. Gravida eget nunc non scelerisque.
                      Scelerisque aliquam aenean ullamcorper consequat enim
                      vitae enim placerat sit.
                    </p>
                  </div>
                  <div className="mt-3">
                    <h2 className="font-bold text-lg">Note aggiuntive</h2>
                    <div className="flex justify-between items-center p-3 border rounded">
                      <div>
                        <p>
                          Lorem ipsum cras eleifend lectus sagittis vitae vel
                          mi. At porttitor id quis sagittis a. Convallis sed sit
                          sed eleifend lobortis congue sed. Sit a pellentesque.
                        </p>
                        <button className="text-primary border border-secondary rounded px-10 py-1">
                          name_file1.pdf
                        </button>
                      </div>
                      <div>20/04/2019</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h2 className="font-bold text-lg">Note aggiuntive</h2>
                    <p>
                      Lorem ipsum cras eleifend lectus sagittis vitae vel mi. At
                      porttitor id quis sagittis a. Convallis sed sit sed
                      eleifend lobortis congue sed. Sit a pellentesque.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default PetInfoModal;
