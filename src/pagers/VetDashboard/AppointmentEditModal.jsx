import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import moment from "moment";
import axios from "axios";
import { notifySuccess } from "../../components/common/Toast/Toast";
const AppointmentEditModal = ({ isOpen, setIsOpen, singleData, refetch }) => {
  function closeModal() {
    setIsOpen(false);
  }
  const [isLoadng, setIsLoading] = useState(false);
  const [appointmentDateTime, setAppointmentDateTime] = useState(
    `${moment(new Date(singleData?.appointmentDate)).format("YYYY-MM-DD")}T${
      singleData?.appointmentTime
    }`
  );
  const handleUpdateAppointment = () => {
    setIsLoading(true);
    axios
      .patch(
        `${import.meta.env.VITE_SERVER_LINK}/edit-appointment/${
          singleData?._id
        }`,
        {
          ...singleData,
          appointmentDate: moment(appointmentDateTime),
          appointmentTime: moment(appointmentDateTime).format("HH:mm"),
        }
      )
      .then((res) => {
        if (res?.data) {
          refetch();
          notifySuccess("Appuntamento aggiornato !");
          closeModal();
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
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
                <Dialog.Panel className="w-full max-w-[450px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex justify-between items-center">
                      <p> Modifica la data dell'appuntamento</p>
                      <p onClick={closeModal} className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </p>
                    </div>
                  </Dialog.Title>
                  <div>
                    <input
                      className="w-full my-5 border px-4 py-2 rounded"
                      type="datetime-local"
                      name=""
                      value={appointmentDateTime}
                      onChange={(e) => setAppointmentDateTime(e.target.value)}
                      id=""
                    />
                    <button
                      onClick={handleUpdateAppointment}
                      className="bg-secondary text-white w-full p-2 rounded"
                    >
                      {isLoadng ? (
                        <div className="flex items-center justify-center">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 mr-2 text-gray-100 animate-spin fill-secondary"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span>Loading...</span>
                        </div>
                      ) : (
                        "Salva"
                      )}
                    </button>
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

export default AppointmentEditModal;
