import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/ICONS/google.svg";
import {
  notifyError,
  notifySuccess,
} from "../../components/common/Toast/Toast";
import { userLoggedOut } from "../../features/auth/authSlice";
import {
  useDeleteUserMutation,
  useUpdateUserDataMutation,
} from "../../features/userData/userDataApi";
import AccountDeletatioModal from "../UserPages/AccountDeletationModal";
import { useGetUserInfoQuery } from "../../features/auth/authApi";

const people = [
  {
    name: "Medico Veterinario",
  },
  {
    name: "Chirurgo Veterinario",
  },
  {
    name: "Veterinario Clinico",
  },
  {
    name: "Veterinario Olistico ",
  },
  {
    name: "Veterinario di Medicina ",
  },
  {
    name: "Interna Veterinario di",
  },
  {
    name: "Emergenza e Cura Critica",
  },
  {
    name: "Veterinario ",
  },
  {
    name: "Comportamentale ",
  },
  {
    name: "Radiologo Veterinario ",
  },
  {
    name: "Veterinario di Medicina",
  },
  {
    name: "Preventiva Epidemiologo",
  },
  {
    name: "Veterinario Nutrizionista ",
  },
  {
    name: "Veterinario Patologo ",
  },
  {
    name: "Veterinario Dermatologo ",
  },
  {
    name: "Veterinario Oftalmologo",
  },
  {
    name: "Veterinario Odontoiatra ",
  },
  {
    name: "Veterinario Anestesista",
  },
  {
    name: "Veterinario Cardiologo ",
  },
  {
    name: "Veterinario Neurologo",
  },
  {
    name: "Veterinario ",
  },
  {
    name: "Endocrinologo ",
  },
  {
    name: "Veterinario Oncologo ",
  },
  {
    name: "Veterinario Ortopedista",
  },
  {
    name: "Esotici e Selvatici",
  },
  {
    name: "Veterinario di ",
  },
  {
    name: "Riproduzione Epatologo ",
  },
  {
    name: "Veterinario",
  },
  {},
];
const type = [
  { name: "Cane" },
  { name: "Gatto" },
  { name: "Coniglio" },
  { name: "Cavallo" },
  { name: "Pappagallo" },
  { name: "Tartaruga" },
  { name: "Criceto" },
  { name: "Pecora" },
  { name: "Capra" },
  { name: "Maiale" },
  { name: "Mucca" },
  { name: "Gallina" },
  { name: "Anatra" },
  { name: "Oca" },
  { name: "Pesce rosso" },
  { name: "Canarino" },
  { name: "Serpente" },
  { name: "Porcellino d'India" },
  { name: "Furetto" },
  { name: "Asino" },
  { name: "Gerbillo" },
  { name: "Chinchilla" },
];
const AccountSetting = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const { data: userupdate, refetch } = useGetUserInfoQuery(undefined, {
    skip: !accessToken,
  });
  // console.log(userupdate);
  const user = userupdate?.user;
  const [selected, setSelected] = useState(user?.doctor_type1 || [people[0]]);
  const [selected2, setSelected2] = useState(user?.doctor_type2 || [type[0]]);
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    doctor_type1: "",
    doctor_type2: "",
    veterinary_address: "",
  });
  // console.log(userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const [updateUserData, { data, isLoading, isError, isSuccess }] =
    useUpdateUserDataMutation();

  // Deleting user account mutation
  const [
    deleteUser,
    { isLoading: deleteAccLoading, isSuccess: isAccountDeleted },
  ] = useDeleteUserMutation();

  const handleSubmitData = () => {
    const updatedData = {
      _id: user?._id,
      first_name: userData?.first_name,
      last_name: userData?.last_name,
      role: "vet_admin",
      email: userData?.email,
      doctor_type1: selected,
      doctor_type2: selected2,
      veterinary_address: userData?.veterinary_address,
      userLoginType: user?.userLoginType,
    };
    updateUserData(updatedData);
  };

  // Sending user ID for deleteing account
  const handleDeleteAcc = (userId) => {
    if (userId) {
      deleteUser(userId);
    }
  };
  useEffect(() => {
    refetch();
    if (user) {
      setUserData({
        first_name: user?.first_name,
        last_name: user?.last_name,
        email: user?.email,
        doctor_type1: user.doctor_type1 || [],
        doctor_type2: user.doctor_type2 || [],
        veterinary_address: user?.veterinary_address,
      });
    }
    setSelected(user.doctor_type1);
    setSelected2(user.doctor_type2);
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      if (data?.status === 400) {
        notifyError(data?.message);
      } else if (!isLoading && data?.data?._id) {
        refetch();
        const {
          email,
          first_name,
          last_name,
          phone,
          doctor_type1,
          doctor_type2,
          veterinary_address,
          _id,
        } = data?.data;
        notifySuccess("dati utente aggiornati!");
        setUserData({
          first_name,
          last_name,
          phone,
          email,
          doctor_type1,
          doctor_type2,
          veterinary_address,
        });
      }
    }

    if (!isLoading && isError) {
      notifyError(
        "Si è verificato un errore durante l'aggiornamento dei dati!"
      );
    }
  }, [data?.data?._id, isSuccess]);

  function removeDuplicates(array) {
    // console.log(array);
    let uniqueArray = [];

    for (const obj of array) {
      const isDuplicate = uniqueArray.filter((item) => item.name === obj.name);

      if (isDuplicate.length === 0) {
        uniqueArray.push({ ...obj });
      } else if (isDuplicate.length > 0) {
        let u = uniqueArray.filter((uu) => uu.name !== obj.name);
        uniqueArray = u;
      }
    }

    return uniqueArray;
  }

  useEffect(() => {
    const mergedArray1 = removeDuplicates(selected);
    setSelected(mergedArray1);
    const mergedArray = removeDuplicates(selected2);
    setSelected2(mergedArray);
  }, [selected2?.length, selected?.length]);

  useEffect(() => {
    if (isAccountDeleted) {
      localStorage.clear();
      setOpenModal(false);
      notifySuccess("Account utente eliminato!");
      dispatch(userLoggedOut());
      navigate("/vets/login");
    }
  }, [isAccountDeleted, navigate]);
  // console.log(selected);
  return (
    <>
      <div className="bg-white p-10 rounded w-[80%]">
        <div className=" w-full mx-auto">
          <div className=" w-full">
            <div className="w-full">
              <h1 className="text-[32px] font-bold">
                Impostazioni dell’account
              </h1>
              <p className="font-bold mt-5 mb-3">Anagrafica</p>
              <div className="w-full">
                <input
                  type="text"
                  placeholder={
                    userData?.first_name ? userData?.first_name : "Nome"
                  }
                  value={userData?.first_name}
                  onChange={(e) => {
                    setUserData({ ...userData, first_name: e.target.value });
                  }}
                  className="rounded-lg py-2 px-4 outline-none border-[1px] border-none shadow w-full placeholder:text-black"
                />
              </div>
              <div className="w-full mt-3">
                <input
                  type="text"
                  placeholder={
                    userData?.last_name ? userData?.last_name : "Cognome"
                  }
                  value={userData?.last_name}
                  onChange={(e) => {
                    setUserData({ ...userData, last_name: e.target.value });
                  }}
                  className="rounded-lg py-2 px-4 outline-none border-[1px] border-none shadow w-full placeholder:text-black"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="font-bold mb-3">Lavorative</p>
              <div>
                <div className="w-full">
                  <Listbox value={selected} onChange={setSelected} multiple>
                    <div className="relative mt-1">
                      <Listbox.Button
                        className={`relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left border-[1px] border-[#E5E7EC] focus:outline-none flex gap-2 `}
                      >
                        {selected?.length ? (
                          selected?.map((s, i) => {
                            return (
                              <span key={i} className="block truncate">
                                {s.name}
                                {selected.length > i + 1 ? "," : ""}
                              </span>
                            );
                          })
                        ) : (
                          <span className="block truncate text-gray-400">
                            {"Scegli che tipo di dottore sei *"}
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
                          {people.map((tp, tpIdx) => (
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
                              {({ s }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      s ? "font-semibold" : "font-normal"
                                    }`}
                                  >
                                    {tp.name}
                                  </span>
                                  {s}
                                  {selected.some(
                                    (item) => item.name === tp.name
                                  ) ? (
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
              <div className="mt-3 mb-3">
                <div className="w-full">
                  <Listbox value={selected2} onChange={setSelected2} multiple>
                    <div className="relative mt-1">
                      <Listbox.Button
                        className={`relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left border-[1px] focus:outline-none flex gap-2 `}
                      >
                        {selected2?.length ? (
                          selected2?.map((s, i) => {
                            return (
                              <span key={i} className="block truncate">
                                {s.name}
                                {selected2.length > i + 1 ? "," : ""}
                              </span>
                            );
                          })
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
                          {type.map((tp, tpIdx) => {
                            return (
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
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {tp.name}
                                    </span>
                                    {selected2.some(
                                      (item) => item.name === tp.name
                                    ) ? (
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
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
              <div className="w-full mt-3">
                <input
                  type="text"
                  placeholder={
                    userData?.veterinary_address
                      ? userData?.veterinary_address
                      : "Indirizzo del tuo ufficio veterinario"
                  }
                  value={userData?.veterinary_address}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      veterinary_address: e.target.value,
                    });
                  }}
                  className="rounded-lg py-2 px-4 outline-none border-[1px] border-none shadow w-full placeholder:text-black"
                />
              </div>

              <div className="mt-5">
                <p className="font-bold mb-3">Contatto</p>
                <div className="w-full">
                  <input
                    type="email"
                    value={userData?.email}
                    onChange={(e) => {
                      setUserData({ ...userData, email: e.target.value });
                    }}
                    disabled={user?.userLoginType === "google"}
                    className={`rounded-lg py-2 px-4  outline-none border-[1px] border-none shadow w-full ${
                      user?.userLoginType === "google"
                        ? "bg-[#F3FEFE] text-[#00000066]"
                        : ""
                    } `}
                  />
                </div>
                {user?.userLoginType === "google" && (
                  <p className="flex items-center mt-4 mb-4 text-sm w-full">
                    <img src={GoogleIcon} alt="" />
                    <span className="ml-2">
                      Hai effettuato l’accesso con il tuo account Google
                    </span>
                  </p>
                )}
              </div>
            </div>
            <div className="mt-12">
              <button
                onClick={handleSubmitData}
                className={`w-full rounded-lg py-2 px-4 outline-none  text-white bg-secondary`}
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
                  "Salva"
                )}
              </button>
            </div>
            <div className="mt-3">
              <button
                onClick={() => setOpenModal(true)}
                className={`w-full rounded-lg py-2 px-4  outline-none border-[1px] text-primary border-primary `}
              >
                {deleteAccLoading ? (
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
                  "Elimina il mio account"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <AccountDeletatioModal
        closeModal={() => setOpenModal(false)}
        isOpen={openModal}
        openModal={() => setOpenModal(true)}
        setIsOpen={setOpenModal}
        handleDeleteAcc={handleDeleteAcc}
        userId={user?._id}
      />
    </>
  );
};

export default AccountSetting;
