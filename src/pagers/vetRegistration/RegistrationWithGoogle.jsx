import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGoogleLoginDataMutation } from "../../features/auth/googleSetDataApi";

function RegistrationWithGoogle() {
  const navigate = useNavigate();
  //
  const [googleLoginData, { data: googlenData, isError, isLoading }] =
    useGoogleLoginDataMutation();
  const { user } = useSelector((state) => state.auth);
  const [feildError, setFeildError] = useState(false);
  const [inputData, setInputData] = useState({
    user_id: user?._id,
    doctor_type1: "",
    doctor_type2: "",
    veterinary_address: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    if (
      inputData?.doctor_type1 !== "" &&
      inputData?.doctor_type2 !== "" &&
      inputData?.veterinary_address !== ""
    ) {
      setFeildError(false);
      googleLoginData(inputData).then((res) => {
        if (res?.data) {
          navigate("/vets/registration-availabilities");
        }
      });
    } else {
      setFeildError(true);
    }
  };

  return (
    <section className="flex justify-center items-center bg-primary py-16 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg p-16 bg-white">
        <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
          Completa la registrazione
        </h1>
        <p className="text-center text-[15px] text-[#00000099] pb-8">
          Concludi la registrazione per diventare membro di Racyline
        </p>

        <form onSubmit={handleForm} className="flex flex-col gap-y-4">
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
          <div>
            <input
              type="text"
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  veterinary_address: e.target.value,
                })
              }
              name="veterinary_address"
              value={inputData.veterinary_address}
              placeholder="Indirizzo del tuo ufficio veterinario *"
              className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                feildError && inputData?.veterinary_address === ""
                  ? "border-red-500"
                  : "border-[#E5E7EC] "
              } `}
            />
          </div>

          <div>
            <button
              type="submit"
              className={`w-full rounded-lg py-3 px-4 outline-none  text-white bg-secondary`}
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

export default RegistrationWithGoogle;

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
