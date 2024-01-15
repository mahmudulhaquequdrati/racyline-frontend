import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { notifySuccess } from "../../components/common/Toast/Toast";
import AppointmentEditModal from "./AppointmentEditModal";
import { fakeAppointment } from "../../features/fakeData/appointment";
import FakePetInfoModal from "./FakePetInfoModal";
import FakAppointmentEditModal from "./FakAppointmentEditModal";

const FakeAppointment = () => {
  const { user } = useSelector((state) => state.auth);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [allAppointmentList, setAllAppointmentList] = useState(fakeAppointment);
  const [isOpen, setIsOpen] = useState(false);
  const deleteAppointment = (id) => {
    setAllAppointmentList(fakeAppointment?.filter((f) => f._id !== id));
    notifySuccess("Appuntamento eliminato con successo!");
  };
  const [singleData, setSingleData] = useState({});
  function openModal() {
    setIsOpen(true);
  }
  function openEditModal(data) {
    setSingleData(data);
    setEditModalOpen(true);
  }
  const [searchInput, setSearchInput] = useState("");

  const filteredData = () => {
    const data = allAppointmentList?.filter(
      (item) =>
        item.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.phone.includes(searchInput) ||
        item.email.includes(searchInput)
    );
    return data;
  };
  // console.log(filteredData());
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="bg-primary">
      {isOpen && <FakePetInfoModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className="max-w-[1140px] w-full mx-auto py-20">
        <h1 className="font-bold text-3xl">Gestisci gli appuntamenti</h1>
        <div className="py-5">
          <input
            className="w-full bg-white px-10 py-3 rounded outline-none"
            type="text"
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Cerca per nome, cognome o email..."
          />
        </div>
        <div>
          <div>
            <div className="min-h-min bg-transparent">
              <table className="h-min w-full shadow bg-transparent rounded   ">
                <thead className="bg-white">
                  <tr className="bg-gray-50 px-5 ">
                    <th align="left" className="border-t px-5 py-5 ">
                      Utente
                    </th>
                    <th
                      align="left"
                      className="border-t px-5 py-5 whitespace-nowrap"
                    >
                      Data e orario
                    </th>
                    <th
                      align="left"
                      className="border-t px-5 py-5 whitespace-nowrap"
                    >
                      Motivazioni della visita
                    </th>
                    <th
                      align="left"
                      className="border-t px-5 py-5 whitespace-nowrap"
                    >
                      Cartella clinica dell’animale
                    </th>
                    <th
                      align="left"
                      className="border-t px-5 py-5 whitespace-nowrap"
                    >
                      Azioni
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {(searchInput === ""
                    ? allAppointmentList
                    : filteredData()
                  )?.map((res) =>
                    moment(res?.appointmentDate).isBefore(
                      moment(new Date())
                    ) ? (
                      <tr key={res} className="w-max opacity-50">
                        <td align="left" className="border-t px-5 py-5 ">
                          <div className="flex justify-between">
                            <div>
                              <p className="font-bold">
                                {res?.firstName} {res?.lastName}
                              </p>
                              <p className="text-gray-500">{res?.userEmail}</p>
                              <p className="text-gray-500">{res?.phone}</p>
                            </div>
                          </div>
                        </td>
                        <td align="left" className="border-t px-5 py-5">
                          <p className="text-gray-500 whitespace-nowrap">
                            {moment(res?.appointmentDate).format("DD/MM/YYYY")},{" "}
                            {res?.appointmentTime}
                          </p>
                        </td>
                        <td align="left" className="border-t px-5 py-5">
                          <p className="text-gray-500 ">{res?.reasonVisit}</p>
                        </td>
                        <td align="left" className="border-t px-5 py-3">
                          <div className="flex justify-between gap-12 !border px-5 py-3 rounded">
                            <div>
                              <p>Rex</p>
                              <p className="text-gray-500">Cane</p>
                            </div>
                            <div>
                              <button className="border border-primary px-5 py-3 rounded text-primary whitespace-nowrap">
                                Visualizza la cartella
                              </button>
                            </div>
                          </div>
                        </td>
                        <td align="left" className="border-t px-5 py-2">
                          <div className=" ">
                            <svg
                              class="w-6 h-6 text-gray-800"
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
                    ) : (
                      <tr key={res} className="w-max">
                        <td align="left" className="border-t px-5 py-5 ">
                          <div className="flex justify-between">
                            <div>
                              <p className="font-bold">
                                {res?.firstName} {res?.lastName}
                              </p>
                              <p className="text-gray-500">{res?.userEmail}</p>
                              <p className="text-gray-500">{res?.phone}</p>
                            </div>
                          </div>
                        </td>
                        <td align="left" className="border-t px-5 py-5">
                          <p className="text-gray-500 whitespace-nowrap">
                            {moment(res?.appointmentDate).format("DD/MM/YYYY")},{" "}
                            {res?.appointmentTime}
                          </p>
                        </td>
                        <td align="left" className="border-t px-5 py-5">
                          <p className="text-gray-500 ">{res?.reasonVisit}</p>
                        </td>
                        <td align="left" className="border-t px-5 py-3">
                          <div className="flex justify-between gap-12 !border px-5 py-3 rounded">
                            <div>
                              <p>Rex</p>
                              <p className="text-gray-500">Cane</p>
                            </div>
                            <div>
                              <button
                                onClick={() => openModal(res)}
                                className="border border-primary px-5 py-3 rounded text-primary whitespace-nowrap"
                              >
                                Visualizza la cartella
                              </button>
                            </div>
                          </div>
                        </td>
                        <td align="left" className="border-t px-5 py-2">
                          <Popover className="relative !z-[99999] ">
                            {({ open }) => (
                              <>
                                <Popover.Button
                                  className={
                                    "cursor-pointer  group inline-flex items-center rounded-md px-3 py-2 text-base font-medium  focus:outline-none "
                                  }
                                >
                                  <div className=" ">
                                    <svg
                                      class="w-6 h-6 text-gray-800"
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
                                  <Popover.Panel className="absolute -left-[100%] !z-[99999] mt-3 w-[200px] max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                    <div className="cursor-pointer overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                      <div
                                        onClick={() => openEditModal(res)}
                                        className="relative bg-white p-5 cursor-pointer "
                                      >
                                        <p className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out  focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                                          <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-900">
                                              Modifica
                                            </p>
                                          </div>
                                        </p>
                                      </div>
                                      <div
                                        onClick={() =>
                                          deleteAppointment(res?._id)
                                        }
                                        className="relative bg-white p-5  cursor-pointer"
                                      >
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
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {editModalOpen && (
        <FakAppointmentEditModal
          singleData={singleData}
          isOpen={editModalOpen}
          setIsOpen={setEditModalOpen}
          allAppointmentList={allAppointmentList}
          setAllAppointmentList={setAllAppointmentList}
        />
      )}
    </div>
  );
};

export default FakeAppointment;
