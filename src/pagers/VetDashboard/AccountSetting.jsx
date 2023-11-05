import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import GoogleIcon from "../../assets/ICONS/google.svg";

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
const AccountSetting = () => {
  const [selected, setSelected] = useState(people[0]);
  const [selected2, setSelected2] = useState(type[0]);

  const { user } = useSelector((state) => state.auth);
  return (
    <div className="p-4 md:p-8 lg:p-20 min-h-[100vh] bg-[#FFF7EC]">
      <div className="max-w-[1140px] w-full mx-auto">
        <div className="max-w-[570px] w-full">
          <div className="w-full">
            <h1 className="text-[32px] font-bold">Impostazioni dell’account</h1>
            <p className="font-bold mt-5 mb-3">Anagrafica</p>
            <div className="w-full">
              <input
                type="text"
                value={user?.first_name}
                className="rounded-lg py-2 px-4 outline-none border-[1px] border-none shadow w-full"
              />
            </div>
            <div className="w-full mt-3">
              <input
                type="text"
                value={user?.last_name}
                className="rounded-lg py-2 px-4 outline-none border-[1px] border-none shadow w-full"
              />
            </div>
          </div>
          <div className="mt-5">
            <p className="font-bold mb-3">Lavorative</p>
            <div>
              <div className="w-full">
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left border-[1px] border-[#E5E7EC] focus:outline-none  ">
                      {selected.name ? (
                        <span className="block truncate">{selected.name}</span>
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
                        {people?.map((tp, tpIdx) => (
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
            </div>
            <div className="mt-3 mb-3">
              <div className="w-full">
                <Listbox value={selected2} onChange={setSelected2}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left border-[1px] border-[#E5E7EC] focus:outline-none  ">
                      {selected2?.name ? (
                        <span className="block truncate">{selected2.name}</span>
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
            </div>
            <div className="w-full mt-3">
              <input
                type="text"
                value={"Via Roma, 1, Roma, 00196 Roma (RM), Italia"}
                className="rounded-lg py-2 px-4 outline-none border-[1px] border-none shadow w-full"
              />
            </div>
            <div className="mt-5">
              <p className="font-bold mb-3">Contatto</p>
              <div className="w-full">
                <input
                  type="email"
                  value={user?.email}
                  disabled
                  readOnly
                  placeholder="mariorossi@gmail.com"
                  className="rounded-lg text-[#00000066] bg-[#F3FEFE] py-2 px-4 outline-none border-[1px] border-none shadow w-full"
                />
              </div>
              <p className="flex items-center mt-4 mb-4 text-sm w-full">
                <img src={GoogleIcon} alt="" />
                <span className="ml-2">
                  Hai effettuato l’accesso con il tuo account Google
                </span>
              </p>
            </div>
          </div>
          <div className="mt-12">
            <button
              className={`w-full rounded-lg py-2 px-4 outline-none  text-white bg-primary`}
            >
              Salva
            </button>
          </div>
          <div className="mt-3">
            <button
              className={`w-full rounded-lg py-2 px-4  outline-none border-[1px] text-primary border-primary `}
            >
              Elimina il mio account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
