import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateAppointmentMutation } from "../../features/appointment/appointmentApi";

const type = [
  {
    name: "Dog",
  },
  {
    name: "Cat",
  },
  {
    name: "Parrot",
  },
];

const Appointment = () => {
  const state = useSelector((state) => state.auth);
  const { user, accessToken } = state || {};
  const [animale, selectAnimale] = useState(type[0]);
  const [appointment, setAppointment] = useState({
    firstName: user?.first_name,
    lastName: user?.last_name,
    email: user?.email,
    phone: user?.phone,
    reasonVisit: "",
  });

  const navigate = useNavigate();
  const [
    createAppointment,
    { data: createdAppointmentResponse, isLoading, isError },
  ] = useCreateAppointmentMutation();

  const { data } = useSelector((state) => state.appointment);

  const submitHandle = async (e) => {
    e.preventDefault();
    const appointmentData = {
      userId: user?._id,
      firstName: appointment?.firstName,
      lastName: appointment?.lastName,
      phone: appointment?.phone,
      userEmail: appointment?.email,
      reasonVisit: appointment?.reasonVisit,
      appointmentDate: "",
      appointmentTime: "",
      vetInfo: data?.vetInfo,
    };

    createAppointment(appointmentData);
  };

  useEffect(() => {
    if (createdAppointmentResponse?.data?.userId && !isError) {
      navigate("/user/appointment-success");
    }
    if (!isLoading && isError) {
      navigate("/user/appointment-error");
    }
  }, [createdAppointmentResponse?.data?.userId]);

  return (
    <div className="bg-primary pt-[60px] pb-[80px]">
      <div className="max-w-[1140px] w-full mx-auto flex flex-col md:flex-row gap-20">
        <div className="max-w-[510px] sm:max-w-full w-full flex flex-col p-4">
          <h2 className="text-[26px] md:text-[32px] font-bold leading-10 mb-7 md:mb-9">
            Concludi la prenotazione
          </h2>
          <div className="flex flex-col gap-4">
            <form onSubmit={submitHandle} className="flex flex-col gap-9">
              <div className="flex flex-col gap-[14px]">
                <label
                  htmlFor="Anagrafica"
                  className="text-[18px] text-black font-semibold leading-[22px]"
                >
                  Anagrafica
                </label>
                <input
                  name="firstName"
                  value={appointment?.firstName}
                  disabled
                  type="text"
                  style={{
                    boxShadow: "0px 1px 3px 0px rgba(232, 151, 31, 0.15)",
                  }}
                  className="p-[14px] bg-[#F3FEFE] rounded outline-none border-none text-[15px] text-black placeholder:text-[15px] placeholder:text-[#C2BFBA]"
                  placeholder="Mario"
                />
                <input
                  name="secondName"
                  type="text"
                  value={appointment?.lastName}
                  disabled
                  placeholder="Rossi"
                  style={{
                    boxShadow: "0px 1px 3px 0px rgba(232, 151, 31, 0.15)",
                  }}
                  className="p-[14px] bg-[#F3FEFE] rounded outline-none border-none text-[15px] text-black placeholder:text-[15px] placeholder:text-[#C2BFBA]"
                />
              </div>
              <div className="flex flex-col gap-[14px]">
                <label
                  htmlFor="Contatto"
                  className="text-[18px] text-black font-semibold leading-[22px]"
                >
                  Contatto
                </label>
                <input
                  name="email"
                  type="email"
                  value={appointment?.email}
                  disabled
                  placeholder="mariorossi@gmail.com"
                  style={{
                    boxShadow: "0px 1px 3px 0px rgba(232, 151, 31, 0.15)",
                  }}
                  className="p-[14px] bg-[#F3FEFE] rounded outline-none border-none text-[15px] text-black placeholder:text-[15px] placeholder:text-[#C2BFBA]"
                />
                <input
                  name="phoneNumber"
                  type="number"
                  value={appointment?.phone}
                  disabled
                  placeholder="3330123456"
                  style={{
                    boxShadow: "0px 1px 3px 0px rgba(232, 151, 31, 0.15)",
                  }}
                  className="p-[14px] bg-[#F3FEFE] rounded outline-none border-none text-[15px] text-black placeholder:text-[15px] placeholder:text-[#C2BFBA]"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="Anagrafica"
                  className="text-[18px] text-black font-semibold leading-[22px]"
                >
                  Animale
                </label>
                <div className="w-full mt-3">
                  <Listbox value={animale} onChange={selectAnimale}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left border-[1px] border-[#E5E7EC] focus:outline-none  ">
                        {animale?.name ? (
                          <span className="block truncate">{animale.name}</span>
                        ) : (
                          <span className="block truncate text-gray-400">
                            {"Scegli gli animali che curi *"}
                          </span>
                        )}

                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {type.map((tp, tpIdx) => (
                            <Listbox.Option
                              key={tpIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-amber-100 text-amber-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={tp}
                            >
                              {({ animale }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      animale ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {tp.name}
                                  </span>
                                  {animale ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
              <div className="flex flex-col gap-[14px]">
                <label
                  htmlFor=""
                  className="text-[18px] text-black font-semibold leading-[22px]"
                >
                  Motivazione della visita
                </label>
                <textarea
                  name="reasonVisit"
                  type="text"
                  value={appointment?.reasonVisit}
                  onChange={(e) =>
                    setAppointment({
                      ...appointment,
                      reasonVisit: e.target.value,
                    })
                  }
                  placeholder="Vengo a far fare una visita al mio animale perchè..."
                  style={{
                    boxShadow: "0px 1px 3px 0px rgba(232, 151, 31, 0.15)",
                  }}
                  className="p-[14px] h-[225px] resize-none rounded outline-none border-none text-[15px] text-black placeholder:text-[15px] placeholder:text-[#C2BFBA]"
                />
              </div>
              <div className="w-full">
                {}
                {/* <Link to={"/user/appointment-success"}> */}
                <button
                  type="submit"
                  className="w-full text-white text-[15px] font-medium text-center p-[12px] bg-secondary rounded"
                >
                  {isLoading ? (
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
                    "Prenota ora"
                  )}
                </button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 p-4">
          <h3 className="text-[22px] font-semibold leading-8">
            Anteprima della prenotazione
          </h3>
          <div
            className="flex flex-col gap-8 rounded bg-white p-6"
            style={{ boxShadow: "0px 1px 3px 0px rgba(232, 151, 31, 0.15)" }}
          >
            <p className="text-[15px] font-normal leading-6">
              Stai prenotando un appuntamento per le 13:30 di Martedì 25 Ottobre
              2023 con il/la Dottore/Dottoressa
            </p>
            <div className="flex gap-6">
              <div className="w-[100px] h-[100px]">
                <img
                  src={data?.vetInfo?.profile_image_url}
                  className="w-full rounded-full"
                  alt="vetUser"
                />
              </div>
              <div>
                <h1 className="text-[18px] leading-[22px] font-semibold mb-2">
                  {data?.vetInfo?.first_name + " " + data?.vetInfo?.last_name}
                </h1>
                <p className="text-[14px] leading-5 font-medium mb-[10px]">
                  {data?.vetInfo?.doctor_type1}
                </p>
                <p className="flex items-center gap-[6px] text-[#666666] text-[13px] font-normal leading-[22px]">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M8.91161 15.7634L9 15.8518L9.08839 15.7634L12.8009 12.0509L12.7125 11.9625L12.8009 12.0509C13.5525 11.2992 14.0644 10.3414 14.2718 9.2988C14.4791 8.25616 14.3726 7.17546 13.9658 6.19334C13.559 5.21122 12.87 4.37179 11.9861 3.7812C11.1022 3.19061 10.0631 2.87539 9 2.87539C7.93695 2.87539 6.89777 3.19061 6.01387 3.7812C5.12997 4.37179 4.44104 5.21122 4.0342 6.19334C3.62737 7.17546 3.52089 8.25616 3.72824 9.2988C3.93559 10.3414 4.44746 11.2992 5.19911 12.0509L5.2875 11.9625L5.19911 12.0509L8.91161 15.7634ZM9 17.6192L4.31539 12.9346C3.38888 12.0081 2.75792 10.8276 2.50229 9.54251C2.24667 8.25739 2.37788 6.92533 2.87931 5.71477C3.38074 4.50422 4.22988 3.46954 5.31936 2.74158C6.40883 2.01362 7.6897 1.62507 9 1.62507C10.3103 1.62507 11.5912 2.01362 12.6806 2.74158C13.7701 3.46954 14.6193 4.50422 15.1207 5.71477C15.6221 6.92533 15.7533 8.25739 15.4977 9.54251C15.2421 10.8276 14.6111 12.0081 13.6846 12.9346L9 17.6192ZM9 9.87501C9.43098 9.87501 9.8443 9.7038 10.1491 9.39906C10.4538 9.09431 10.625 8.68099 10.625 8.25001C10.625 7.81903 10.4538 7.40571 10.1491 7.10096C9.8443 6.79622 9.43098 6.62501 9 6.62501C8.56903 6.62501 8.1557 6.79622 7.85095 7.10096C7.54621 7.40571 7.375 7.81903 7.375 8.25001C7.375 8.68099 7.54621 9.09431 7.85095 9.39906C8.1557 9.7038 8.56903 9.87501 9 9.87501ZM9 11.125C8.23751 11.125 7.50624 10.8221 6.96707 10.2829C6.4279 9.74378 6.125 9.01251 6.125 8.25001C6.125 7.48751 6.4279 6.75624 6.96707 6.21708C7.50624 5.67791 8.23751 5.37501 9 5.37501C9.7625 5.37501 10.4938 5.67791 11.0329 6.21708C11.5721 6.75624 11.875 7.48751 11.875 8.25001C11.875 9.01251 11.5721 9.74378 11.0329 10.2829C10.4938 10.8221 9.7625 11.125 9 11.125Z"
                        fill="black"
                        fillOpacity="0.6"
                        stroke="white"
                        strokeWidth="0.25"
                      />
                    </svg>
                  </span>
                  <span>{data?.vetInfo?.veterinary_address}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
