/* eslint-disable no-unused-vars */
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import userIcon from "../../assets/ICONS/user.svg";
import { useRegisterMutation } from "../../features/auth/authApi";

function Registration() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    doctor_type1: "",
    doctor_type2: "",
    veterinary_address: "",
    profile_image_url: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [register, { data: UserLoggedInData, isError }] = useRegisterMutation();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [feildError, setFeildError] = useState(false);
  const registerUser = (e) => {
    e.preventDefault();
    if (
      inputData?.first_name !== "" &&
      inputData?.last_name !== "" &&
      inputData?.email !== "" &&
      inputData?.password !== "" &&
      inputData?.doctor_type1 !== "" &&
      inputData?.doctor_type2 !== "" &&
      inputData?.veterinary_address !== ""
    ) {
      setFeildError(false);
      setIsLoading(true);
      register(inputData);
    } else {
      setFeildError(true);
    }
  };

  useEffect(() => {
    if (isError) {
      alert("Something went wrong");
    }
    if (UserLoggedInData?.data?.accessToken) {
      navigate("/vets/availabilities");
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
  const people = [
    {
      name: "Veterinary Doctor",
    },
  ];
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

  return (
    <section className="flex justify-center items-center bg-[#FFF7EC] py-16 px-4 border-[1px] border-[#EAEAEB]">
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
            <Listbox
              value={inputData.doctor_type1}
              onChange={(value) =>
                setInputData({ ...inputData, doctor_type1: value.name })
              }
            >
              <div className="relative mt-1">
                <Listbox.Button
                  className={`relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left border-[1px] ${
                    feildError && inputData?.doctor_type1 === ""
                      ? "border-red-500"
                      : "border-[#E5E7EC] "
                  } focus:outline-none `}
                >
                  {inputData.doctor_type1 ? (
                    <span className="block truncate">
                      {inputData.doctor_type1}
                    </span>
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
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
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
            <Listbox
              value={inputData.doctor_type2}
              onChange={(value) =>
                setInputData({ ...inputData, doctor_type2: value.name })
              }
            >
              <div className="relative mt-1">
                <Listbox.Button
                  className={`relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left border-[1px] ${
                    feildError && inputData?.doctor_type2 === ""
                      ? "border-red-500"
                      : "border-[#E5E7EC] "
                  } focus:outline-none  `}
                >
                  {inputData.doctor_type2 ? (
                    <span className="block truncate">
                      {inputData.doctor_type2}
                    </span>
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
                        {({ selected2 }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected2 ? "font-medium" : "font-normal"
                              }`}
                            >
                              {tp.name}
                            </span>
                            {selected2 ? (
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
              className={`w-full rounded-lg py-3 px-4 outline-none  text-white bg-primary`}
            >
              Avanti
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
