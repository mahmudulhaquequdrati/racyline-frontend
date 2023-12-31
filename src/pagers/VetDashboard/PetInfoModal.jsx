import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CancelIcon from "../../assets/ICONS/Cancel.svg";
import defaultPetImage from "../../assets/pets/pets-dog.png";
import moment from "moment";
import axios from "axios";
const PetInfoModal = ({ isOpen, setIsOpen, singleData }) => {
  function closeModal() {
    setIsOpen(false);
  }
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_LINK}/pets/report/${singleData}`)
      .then((res) => {
        setData(res?.data?.data[0]);
      });
  }, []);
  // console.log(data);
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
                          <td>{data?.general_information?.animal_name}</td>
                          <td>{data?.general_information?.species}</td>
                          <td> {data?.general_information?.race}</td>
                          <td>
                            {moment(
                              data?.general_information?.date_of_birth
                            ).format("DD/MM/YYYY")}
                          </td>
                          <td> {data?.general_information?.sex?.gender}</td>
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
                          <td>
                            {" "}
                            {data?.general_information?.microchip_number}
                          </td>
                          <td>
                            {" "}
                            {moment(
                              data?.general_information?.implantation_date
                            ).format("DD/MM/YYYY")}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3">
                    <h2 className="font-bold text-lg">Anamnesi</h2>
                    <p>{data?.medical_history?.medical_history}</p>
                  </div>
                  <div className="mt-3">
                    <h2 className="font-bold text-lg my-4">Diario Medico</h2>
                    {data?.medical_history?.medical_diary?.map((res, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center p-3 border rounded"
                      >
                        <div>
                          <p>
                            Lorem ipsum cras eleifend lectus sagittis vitae vel
                            mi. At porttitor id quis sagittis a. Convallis sed
                            sit sed eleifend lobortis congue sed. Sit a
                            pellentesque.
                          </p>
                          <button className="text-primary border border-secondary rounded px-10 py-1">
                            name_file1.pdf
                          </button>
                        </div>
                        <div>20/04/2019</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 ">
                    <h2 className="font-bold text-lg">Note aggiuntive</h2>
                    <p>{data?.medical_history?.additional_notes}</p>
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
