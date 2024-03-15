import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CancelIcon from "../../assets/ICONS/Cancel.svg";
import moment from "moment";
import axios from "axios";
import { useSelector } from "react-redux";
import { notifyError } from "../../components/common/Toast/Toast";
const MakeAppointment = ({
  isOpen,
  setIsOpen,
  getData,
  singleDate,
  allAppointmentList,
  blockData,
}) => {
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  const [inputData, setInputData] = useState({});
  const [appoinmentDate, setAppointmentDate] = useState(
    moment(singleDate).format("YYYY-MM-DDTHH:mm")
  );
  const handleInputChange = (event) => {
    setInputData((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  // blockStartDateTime;
  // ("2024-03-21T00:00");
  // blockEndDateTime;
  // ("2024-03-30T22:34");

  // check if the date is within the blocked blockStartDateTime and blockEndDateTime
  const isWithinBlockedDate = (date) => {
    let isBlocked = false;
    // console.log(new Date(singleDate).toLocaleDateString().split("/")[1]);
    blockData?.data?.forEach((block) => {
      // console.log(
      //   new Date(block.blockStartDateTime).toLocaleDateString()?.split("/")[1]
      // );
      if (
        // the date i sent, if there exists a date within the blockStartDateTime and blockEndDateTime then it is blocked
        new Date(date).toLocaleDateString().split("/")[1] ===
          new Date(block.blockStartDateTime)
            .toLocaleDateString()
            .split("/")[1] ||
        (new Date(date).toLocaleDateString().split("/")[1] >=
          new Date(block.blockStartDateTime)
            .toLocaleDateString()
            .split("/")[1] &&
          new Date(date).toLocaleDateString().split("/")[1] <=
            new Date(block.blockEndDateTime).toLocaleDateString().split("/")[1])
      ) {
        isBlocked = true;
      }
    });
    return isBlocked;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (isWithinBlockedDate(appoinmentDate)) {
    //   notifyError("Questa data è bloccata, seleziona un'altra data.");
    //   return;
    // }

    setIsLoading(true);
    const data = {
      ...inputData,
      appointmentDate: appoinmentDate,
      appointmentTime: moment(appoinmentDate).format("HH:mm"),
      vetInfo: {
        vetId: user?._id,
      },
    };
    axios
      .post(
        `${import.meta.env.VITE_SERVER_LINK}/create-appointment/from-calender`,
        data
      )
      .then((res) => {
        if (res?.data) {
          setIsLoading(false);
          getData();
          closeModal();
        }
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

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
                    className="text-xl font-medium leading-6 text-gray-900"
                  >
                    <div className="flex justify-between items-center mb-5">
                      <p className="font-bold">Aggiungi evento</p>
                      <img
                        onClick={closeModal}
                        className="cursor-pointer"
                        src={CancelIcon}
                        alt=""
                      />
                    </div>
                  </Dialog.Title>
                  <form
                    onSubmit={handleSubmit}
                    action=""
                    className="flex flex-col gap-y-4 mt-10"
                  >
                    <div>
                      <h2 className="font-bold text-lg">Anagrafica</h2>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="Name"
                          className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]`}
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Cognome"
                          className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]`}
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Numero di cellulare"
                          className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]`}
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">
                        Data e orario dell’appuntamento
                      </h2>
                      <div className="mt-2">
                        <input
                          type="datetime-local"
                          name="firstName"
                          placeholder="Name"
                          className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]`}
                          required
                          onChange={(e) => setAppointmentDate(e.target.value)}
                          value={appoinmentDate}
                        />
                      </div>
                      <div className="my-10">
                        <button className="w-full bg-[#033C5A] py-3 px-4 text-white rounded-lg">
                          {isLoading ? "Loading.." : "Salva"}
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MakeAppointment;
