import { Popover, Transition } from "@headlessui/react";
import Pets from "../../assets/pets/pets-dog.png";
import { Fragment, useState } from "react";
import { useGetVetAppointmentDetailsQuery } from "../../features/appointment/appointmentApi";
import { useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";
import { notifySuccess } from "../../components/common/Toast/Toast";
import PetInfoModal from "./PetInfoModal";
import AppointmentEditModal from "./AppointmentEditModal";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Appointment = () => {
  const { user } = useSelector((state) => state.auth);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const {
    data: allAppointmentList,
    isLoading: allAppointmentListLoading,
    isError: allAppointmentListError,
    refetch,
  } = useGetVetAppointmentDetailsQuery(user?._id);
  const [isOpen, setIsOpen] = useState(false);

  const deleteAppointment = (id) => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_LINK}/appointment/delete/${id}`)
      .then((res) => {
        notifySuccess("Appuntamento eliminato con successo!");
        if (res?.data?.success) {
          refetch();
        }
      });
  };
  const [singleData, setSingleData] = useState({});
  function openModal(data) {
    setSingleData(data?.animaleId);
    setIsOpen(true);
  }
  function openEditModal(data) {
    setSingleData(data);
    setEditModalOpen(true);
  }
  const [searchInput, setSearchInput] = useState("");

  const filteredData = () => {
    const data = allAppointmentList?.data?.filter(
      (item) =>
        item?.firstName?.toLowerCase()?.includes(searchInput?.toLowerCase()) ||
        item?.lastName?.toLowerCase()?.includes(searchInput?.toLowerCase()) ||
        item?.phone?.includes(searchInput) ||
        item?.userEmail?.includes(searchInput)
    );
    return data;
  };
  console.log(allAppointmentList?.data);
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="bg-primary">
      {isOpen && (
        <PetInfoModal
          singleData={singleData}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      <div className=" w-full mx-auto">
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
            <div className="min-h-min  overflow-x-auto bg-transparent">
              <table className="h-min w-full shadow  bg-transparent rounded   ">
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
                <tbody className="bg-white  ">
                  {allAppointmentListLoading
                    ? "Loading...."
                    : (searchInput === ""
                        ? allAppointmentList?.data
                        : filteredData()
                      )?.map((res) =>
                        moment(res?.appointmentDate).isBefore(
                          moment(new Date())
                        ) ? (
                          <tr key={res} className="w-max opacity-50">
                            <td align="left" className="border-t px-5 py-5 ">
                              <div className="flex justify-between">
                                <div className="whitespace-nowrap">
                                  <p className="font-bold">
                                    {res?.firstName} {res?.lastName}
                                  </p>
                                  <p className="text-gray-500">
                                    {res?.userEmail}
                                  </p>
                                  <p className="text-gray-500">{res?.phone}</p>
                                </div>
                              </div>
                            </td>
                            <td align="left" className="border-t px-5 py-5">
                              <p className="text-gray-500 whitespace-nowrap">
                                {moment(res?.appointmentDate).format(
                                  "DD/MM/YYYY"
                                )}
                                , {res?.appointmentTime}
                              </p>
                            </td>
                            <td align="left" className="border-t px-5 py-5">
                              <p className="text-gray-500 ">
                                {res?.reasonVisit}
                              </p>
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
                                  <p className="font-bold whitespace-nowrap">
                                    {res?.firstName} {res?.lastName}
                                  </p>
                                  <p className="text-gray-500">
                                    {res?.userEmail}
                                  </p>
                                  <p className="text-gray-500">{res?.phone}</p>
                                </div>
                              </div>
                            </td>
                            <td align="left" className="border-t px-5 py-5">
                              <p className="text-gray-500 whitespace-nowrap">
                                {moment(res?.appointmentDate).format(
                                  "DD/MM/YYYY"
                                )}
                                , {res?.appointmentTime}
                              </p>
                            </td>
                            <td align="left" className="border-t px-5 py-5">
                              <p className="text-gray-500 ">
                                {res?.reasonVisit}
                              </p>
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
                              {/* <Popover className="relative !z-[999] ">
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
                              </Popover> */}
                              <DropdownMenu.Root>
                                <DropdownMenu.Trigger asChild>
                                  <div className="cursor-pointer  group inline-flex items-center rounded-md px-3 py-2 text-base font-medium  focus:outline-none  ">
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
                                </DropdownMenu.Trigger>

                                <DropdownMenu.Portal>
                                  <DropdownMenu.Content
                                    className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                                    sideOffset={5}
                                    align="end"
                                  >
                                    <DropdownMenu.Item
                                      className="group text-[13px] leading-none  rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none cursor-pointer data-[disabled]:pointer-events-none   mt-3 mb-3"
                                      onClick={() => openEditModal(res)}
                                    >
                                      <p className=" flex items-center rounded-lg p-2 transition duration-150 ease-in-out  focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                                        <div className="">
                                          <p className="text-sm font-medium text-gray-900">
                                            Modifica
                                          </p>
                                        </div>
                                      </p>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item
                                      className="group text-[13px] leading-none  rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none cursor-pointer data-[disabled]:pointer-events-none   mt-3 mb-3"
                                      onClick={() =>
                                        deleteAppointment(res?._id)
                                      }
                                    >
                                      <p className=" flex  items-center rounded-lg p-2 transition duration-150 ease-in-out  focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                                        <div className="">
                                          <p className="text-sm font-medium text-red-400">
                                            Elimina
                                          </p>
                                        </div>
                                      </p>
                                    </DropdownMenu.Item>
                                  </DropdownMenu.Content>
                                </DropdownMenu.Portal>
                              </DropdownMenu.Root>
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
        <AppointmentEditModal
          singleData={singleData}
          isOpen={editModalOpen}
          setIsOpen={setEditModalOpen}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default Appointment;
