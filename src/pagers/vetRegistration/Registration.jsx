/* eslint-disable no-unused-vars */
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import userIcon from "../../assets/ICONS/user.svg";
import {
  notifyError,
  notifySuccess,
} from "../../components/common/Toast/Toast";
import { useRegisterMutation } from "../../features/auth/authApi";
import { userLoggedIn } from "../../features/auth/authSlice";
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

function Registration() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const [selected2, setSelected2] = useState([]);
  const [inputData, setInputData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    doctor_type1: selected,
    doctor_type2: selected2,
    veterinary_address: "",
    profile_image_url: "",
  });
  const [register, { data: UserLoggedInData, isLoading, isError }] =
    useRegisterMutation();
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [feildError, setFeildError] = useState(false);
  const registerUser = (e) => {
    const data = {
      ...inputData,
      doctor_type2: selected2,
      doctor_type1: selected,
    };

    e.preventDefault();
    if (
      data?.first_name !== "" &&
      data?.last_name !== "" &&
      data?.email !== "" &&
      data?.password !== "" &&
      data?.doctor_type1?.length > 0 &&
      data?.doctor_type2?.length > 0 &&
      data?.veterinary_address !== ""
    ) {
      setFeildError(false);
      register(data);
    } else {
      setFeildError(true);
    }
  };

  useEffect(() => {
    if (isError) {
      notifyError("Qualcosa è andato storto, riprova!");
    }
    if (UserLoggedInData?.data?.accessToken) {
      dispatch(userLoggedIn(UserLoggedInData?.data));
      notifySuccess("Successo della registrazione!");
      navigate("/vets/registration-availabilities");
    }
  }, [UserLoggedInData, isError, navigate]);

  const handleInputChange = (event) => {
    setInputData((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    let formData = new FormData();
    const maxFileSize = 5 * 1024 * 1024;
    const file = e.target.files[0];
    if (file && file.size > maxFileSize) {
      setError(
        "File size exceeds the maximum allowed size (5MB). Please choose a smaller file."
      );
    } else {
      setError("");
      formData.append("image", file);
      formData.append("key", `${import.meta.env.VITE_IMGBB_API_KEY}`);
      setSelectedFile(file);
      axios.post("https://api.imgbb.com/1/upload", formData).then((res) => {
        setInputData({ ...inputData, profile_image_url: res.data.data.url });
      });
    }
  };
  // console.log(selected);
  // console.log(selected2);
  return (
    <section className="flex justify-center items-center bg-primary py-16 px-4 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg px-4 py-12 md:p-8 lg:p-16 bg-white">
        <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
          Completa la registrazione
        </h1>
        <p className="text-center text-[15px] text-[#00000099]">
          Concludi la registrazione per diventare membro di Racyline
        </p>

        <div className="flex gap-6 items-center py-[30px]">
          <div className="w-[105px] h-[105px] flex items-center gap-6 justify-center rounded-full bg-[#E5E7EC]">
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt=""
                className="w-[105px] h-[105px] rounded-full"
              />
            ) : (
              <img src={userIcon} alt="" className="w-[32px] h-[32px]" />
            )}
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <button
              onClick={handleButtonClick}
              className="border-[1px] border-black rounded-md py-3 px-8 text-[15px] font-medium"
            >
              Carica la foto di profilo
            </button>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <span className="text-black/[.40]">
              JPG or PNG. Max size of 5MB.
            </span>
          </div>
        </div>
        <form
          onSubmit={registerUser}
          action=""
          className="flex flex-col gap-y-4"
        >
          <div>
            <input
              type="text"
              name="first_name"
              value={inputData.first_name}
              onChange={handleInputChange}
              placeholder="Name *"
              className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                feildError && inputData?.first_name === ""
                  ? "border-red-500"
                  : "border-[#E5E7EC] "
              } `}
            />
          </div>
          <div>
            <input
              type="text"
              name="last_name"
              value={inputData.last_name}
              onChange={handleInputChange}
              placeholder="Cognome *"
              className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                feildError && inputData?.last_name === ""
                  ? "border-red-500"
                  : "border-[#E5E7EC] "
              } `}
            />
          </div>
          <div>
            <Listbox value={selected} onChange={setSelected} multiple>
              <div className="relative mt-1">
                <Listbox.Button
                  className={`relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left border-[1px] ${
                    feildError && selected.length === 0
                      ? "border-red-500"
                      : "border-[#E5E7EC] "
                  } focus:outline-none flex gap-2 `}
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
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-semibold" : "font-normal"
                              }`}
                            >
                              {tp.name}
                            </span>
                            {selected}
                            {selected ? (
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
          <div>
            <Listbox value={selected2} onChange={setSelected2} multiple>
              <div className="relative mt-1">
                <Listbox.Button
                  className={`relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left border-[1px] ${
                    feildError && selected2.length === 0
                      ? "border-red-500"
                      : "border-[#E5E7EC] "
                  } focus:outline-none flex gap-2 `}
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
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-semibold" : "font-normal"
                              }`}
                            >
                              {tp.name}
                            </span>
                            {selected}
                            {selected ? (
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
          <hr className="outline-1 border[#ddd]" />
          <div>
            <input
              type="text"
              name="veterinary_address"
              value={inputData.veterinary_address}
              onChange={handleInputChange}
              placeholder="Indirizzo del tuo ufficio veterinario *"
              className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                feildError && inputData?.veterinary_address === ""
                  ? "border-red-500"
                  : "border-[#E5E7EC] "
              } `}
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={inputData.email}
              onChange={handleInputChange}
              placeholder="Email *"
              className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                feildError && inputData?.email === ""
                  ? "border-red-500"
                  : "border-[#E5E7EC] "
              } `}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password *"
              name="password"
              value={inputData.password}
              onChange={handleInputChange}
              className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                feildError && inputData?.password === ""
                  ? "border-red-500"
                  : "border-[#E5E7EC] "
              } `}
            />
          </div>
          {error && (
            <p className="text-center text-[15px] text-red-500">{error}</p>
          )}
          <div>
            <button
              type="submit"
              className={`w-full rounded-lg py-3 px-4 outline-none  text-white bg-secondary`}
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
                "Avanti"
              )}
            </button>
          </div>
          <div>
            <p
              className={`text-center text-[15px] ${
                feildError ? "text-red-500" : "text-black/[.40]"
              }`}
            >
              * I campi sono obbligatori
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Registration;
