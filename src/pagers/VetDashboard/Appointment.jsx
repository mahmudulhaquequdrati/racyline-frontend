import { Popover, Transition } from "@headlessui/react";
import Pets from "../../assets/pets/pets-dog.png";
import { Fragment } from "react";
const Appointment = () => {
  return (
    <div className="bg-primary h-[100vh]">
      <div className="max-w-[1140px] w-full mx-auto py-20">
        <h1 className="font-bold text-3xl">Gestisci gli appuntamenti</h1>
        <div className="py-5">
          <input
            className="w-full bg-white px-10 py-3 rounded outline-none"
            type="text"
            name=""
            id=""
            placeholder="Cerca per nome, cognome o email..."
          />
        </div>
        <div>
          <div className="overflow-x-auto h-full">
            <table className="w-full shadow bg-white rounded h-full">
              <thead>
                <tr className="bg-gray-50 px-10">
                  <th
                    align="left"
                    className="border-t px-10 py-2 whitespace-nowrap"
                  >
                    span
                  </th>
                  <th
                    align="left"
                    className="border-t px-10 py-2 whitespace-nowrap"
                  >
                    Data e orario
                  </th>
                  <th
                    align="left"
                    className="border-t px-10 py-2 whitespace-nowrap"
                  >
                    Motivazioni della visita
                  </th>
                  <th
                    align="left"
                    className="border-t px-10 py-2 whitespace-nowrap"
                  >
                    Cartella clinica dell’animale
                  </th>
                  <th
                    align="left"
                    className="border-t px-10 py-2 whitespace-nowrap"
                  >
                    Azioni
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 1, 1].map((res) => (
                  <tr key={res}>
                    <td align="left" className="border-t px-10 py-2">
                      <div className="flex justify-start">
                        <img
                          src={Pets}
                          className="w-16 h-16 rounded-full"
                          alt=""
                        />
                        <div className="ml-5">
                          <p className="font-bold">Mario Rossi</p>
                          <p className="text-gray-400">mariorossi@gmail.com</p>
                          <p className="text-gray-400">3330123456</p>
                        </div>
                      </div>
                    </td>
                    <td align="left" className="border-t px-10 py-2">
                      <p className="text-gray-400 whitespace-nowrap">
                        25/10/2023, 13:30
                      </p>
                    </td>
                    <td align="left" className="border-t px-10 py-2">
                      <p className="text-gray-400 w-[500px]">
                        Lorem ipsum dolor sit amet consectetur. Sed pharetra
                        viverra ornare blandit suspendisse lectus. Malesuada
                        quis nunc vivamus est sit cursus sed. Iaculis ac cursus
                        lobortis sed et lectus mi dictumst vivamus. Pellentesque
                        lectus nec in ut ultrices.
                      </p>
                    </td>
                    <td align="left" className="border-t px-10 py-2">
                      <div className="flex justify-between w-[400px] border px-5 py-2 rounded">
                        <div>
                          <p>Rex</p>
                          <p className="text-gray-400">Cane</p>
                        </div>
                        <div>
                          <Popover className="relative">
                            {({ open }) => (
                              <>
                                <Popover.Button>
                                  <button className="border border-primary px-5 py-2 rounded text-primary whitespace-nowrap">
                                    Visualizza la cartella
                                  </button>
                                </Popover.Button>
                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0 translate-y-1"
                                  enterTo="opacity-100 translate-y-0"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100 translate-y-0"
                                  leaveTo="opacity-0 translate-y-1"
                                >
                                  <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-[200px] max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                      <div className="relative bg-white p-5 cursor-pointer ">
                                        <p className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out  focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                                          <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-900">
                                              Modifica
                                            </p>
                                          </div>
                                        </p>
                                      </div>
                                      <div className="relative bg-white p-5  cursor-pointer">
                                        <p className="-m-3 flex  items-center rounded-lg p-2 transition duration-150 ease-in-out  focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                                          <div className="ml-4">
                                            <p className="text-sm font-medium text-red-400">
                                              Elimina
                                            </p>
                                          </div>
                                        </p>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        </div>
                      </div>
                    </td>
                    <td align="left" className="border-t px-10 py-2">
                      <div className="cursor-pointer">
                        <svg
                          class="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 17 4"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-width="2"
                            d="M2.49 2h.01m6 0h.01m5.99 0h.01"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
