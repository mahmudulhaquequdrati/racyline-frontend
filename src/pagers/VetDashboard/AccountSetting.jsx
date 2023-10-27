import { Fragment, useState } from "react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/solid";
import { Listbox, Transition } from "@headlessui/react";
import GoogleIcon from "../../assets/ICONS/google.svg";
import {
  primary_bg_color,
  primary_border_color,
  primary_color,
} from "../../../constant";

const people = [
  {
    id: 1,
    name: "Veterinario di medicina generale, Chirurgo veterinario",
    unavailable: false,
  },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];
const AccountSetting = () => {
  const [selected, setSelected] = useState(people[0]);
  const [selected2, setSelected2] = useState(people[3]);
  return (
    <div className="p-12 lg:p-20 min-h-[100vh] bg-[#FFF7EC]">
      <div>
        <h1 className="text-[32px] font-bold">Impostazioni dell’account</h1>
        <p className="font-bold mt-5 mb-3">Anagrafica</p>
        <div>
          <input
            type="text"
            className="rounded-lg py-2 px-4 outline-none border-[1px] border-none shadow w-full md:w-[60%] lg:w-[40%]"
          />
        </div>
        <div className="mt-3">
          <input
            type="text"
            className="rounded-lg py-2 px-4 outline-none border-[1px] border-none shadow w-full md:w-[60%] lg:w-[40%]"
          />
        </div>
      </div>
      <div className="mt-5">
        <p className="font-bold mb-3">Lavorative</p>
        <div>
          <div className="w-full md:w-[60%] lg:w-[40%]">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white  focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selected.name}</span>
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
        </div>
        <div className="mt-3 mb-3">
          <div className="w-full md:w-[60%] lg:w-[40%]">
            <Listbox value={selected2} onChange={setSelected2}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selected2.name}</span>
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
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
        </div>
        <div className="mt-3 mb-3">
          <input
            type="text"
            className="rounded-lg py-3 px-4 outline-none border-[1px] border-none shadow-xl w-full md:w-[60%] lg:w-[40%]"
          />
        </div>
        <div className="mt-5">
          <p className="font-bold mb-3">Contatto</p>
          <div>
            <input
              type="email"
              placeholder="mariorossi@gmail.com"
              className="rounded-lg py-2 px-4 outline-none border-[1px] border-none shadow w-full md:w-[60%] lg:w-[40%]"
            />
          </div>
          <p className="flex items-center mt-4 mb-4 text-sm w-full md:w-[60%] lg:w-[40%]">
            <img src={GoogleIcon} alt="" />
            <span className="ml-2">
              Hai effettuato l’accesso con il tuo account Google
            </span>
          </p>
        </div>
      </div>
      <div className="mt-12">
        <button
          className={`w-full md:w-[60%] lg:w-[40%] rounded-lg py-2 px-4 outline-none  text-white bg-primary`}
        >
          Salva
        </button>
      </div>
      <div className="mt-3">
        <button
          className={`w-full md:w-[60%] lg:w-[40%] rounded-lg py-2 px-4  outline-none border-[1px] text-primary border-primary `}
        >
          Elimina il mio account
        </button>
      </div>
    </div>
  );
};

export default AccountSetting;
