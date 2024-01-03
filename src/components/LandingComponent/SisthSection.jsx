import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import PlusIcon from "../../assets/ICONS/Plus.svg";
import CancelIcon from "../../assets/ICONS/Cancel.svg";

const SisthSection = () => {
  return (
    <div className="container max-w-[1140px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="py-10 md:py-20 px-10 lg:px-0 md:px-6 ">
          <h1 className="font-bold text-4xl">Informazioni sul prodotto</h1>
          <p>Modalità d’uso</p>
        </div>
        <div className="py-10 md:py-20 px-5 md:px-0  ">
          <div className="w-full lg:px-4">
            <div className="mx-auto w-full lg:w-[593px] p-2 border-b">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                      <span>Dosaggio</span>
                      {open ? (
                        <img
                          src={CancelIcon}
                          alt="CancelIcon"
                          className={`h-5 w-5`}
                        />
                      ) : (
                        <img
                          src={PlusIcon}
                          alt="CancelIcon"
                          className={`h-5 w-5`}
                        />
                      )}
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                        <p>La quantità varia in base al peso dell’animale.</p>
                        <p>Dosaggio di EPA/DHA al giorno per i cani:</p>
                        <p>- 0-6kg: 250mg (=0,4ml di olio Nutranext)</p>
                        <p>- 6-13kg: 500mg (=0,8ml di olio Nutranext)</p>
                        <p>- 13-22kg: 1000mg (=1,6ml di olio Nutranext)</p>
                        <p>- 22-35kg: 1500mg (=2,4ml di olio Nutranext)</p>
                        <p>- oltre 35kg: 2000mg (=3,2ml di olio Nutranext)</p>
                        <p>
                          Suggerimento: Gli omega-3 non forniscono risultati
                          immediati, quindi è importante somministrarli in modo
                          costante per un periodo prolungato per ottenere i
                          benefici desiderati.
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="mx-auto w-full lg:w-[593px] p-2 border-b">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                      <span>Assunzione</span>
                      {open ? (
                        <img
                          src={CancelIcon}
                          alt="CancelIcon"
                          className={`h-5 w-5`}
                        />
                      ) : (
                        <img
                          src={PlusIcon}
                          alt="CancelIcon"
                          className={`h-5 w-5`}
                        />
                      )}
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                        <p>La quantità varia in base al peso dell’animale.</p>
                        <p>Dosaggio di EPA/DHA al giorno per i cani:</p>
                        <p>- 0-6kg: 250mg (=0,4ml di olio Nutranext)</p>
                        <p>- 6-13kg: 500mg (=0,8ml di olio Nutranext)</p>
                        <p>- 13-22kg: 1000mg (=1,6ml di olio Nutranext)</p>
                        <p>- 22-35kg: 1500mg (=2,4ml di olio Nutranext)</p>
                        <p>- oltre 35kg: 2000mg (=3,2ml di olio Nutranext)</p>
                        <p>
                          Suggerimento: Gli omega-3 non forniscono risultati
                          immediati, quindi è importante somministrarli in modo
                          costante per un periodo prolungato per ottenere i
                          benefici desiderati.
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="mx-auto w-full lg:w-[593px] p-2 border-b">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                      <span>Stoccaggio e durata di conservazione</span>
                      {open ? (
                        <img
                          src={CancelIcon}
                          alt="CancelIcon"
                          className={`h-5 w-5`}
                        />
                      ) : (
                        <img
                          src={PlusIcon}
                          alt="CancelIcon"
                          className={`h-5 w-5`}
                        />
                      )}
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                        <p>La quantità varia in base al peso dell’animale.</p>
                        <p>Dosaggio di EPA/DHA al giorno per i cani:</p>
                        <p>- 0-6kg: 250mg (=0,4ml di olio Nutranext)</p>
                        <p>- 6-13kg: 500mg (=0,8ml di olio Nutranext)</p>
                        <p>- 13-22kg: 1000mg (=1,6ml di olio Nutranext)</p>
                        <p>- 22-35kg: 1500mg (=2,4ml di olio Nutranext)</p>
                        <p>- oltre 35kg: 2000mg (=3,2ml di olio Nutranext)</p>
                        <p>
                          Suggerimento: Gli omega-3 non forniscono risultati
                          immediati, quindi è importante somministrarli in modo
                          costante per un periodo prolungato per ottenere i
                          benefici desiderati.
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="mx-auto w-full lg:w-[593px] p-2 border-b">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                      <span>Ingredienti</span>
                      {open ? (
                        <img
                          src={CancelIcon}
                          alt="CancelIcon"
                          className={`h-5 w-5`}
                        />
                      ) : (
                        <img
                          src={PlusIcon}
                          alt="CancelIcon"
                          className={`h-5 w-5`}
                        />
                      )}
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                        <p>La quantità varia in base al peso dell’animale.</p>
                        <p>Dosaggio di EPA/DHA al giorno per i cani:</p>
                        <p>- 0-6kg: 250mg (=0,4ml di olio Nutranext)</p>
                        <p>- 6-13kg: 500mg (=0,8ml di olio Nutranext)</p>
                        <p>- 13-22kg: 1000mg (=1,6ml di olio Nutranext)</p>
                        <p>- 22-35kg: 1500mg (=2,4ml di olio Nutranext)</p>
                        <p>- oltre 35kg: 2000mg (=3,2ml di olio Nutranext)</p>
                        <p>
                          Suggerimento: Gli omega-3 non forniscono risultati
                          immediati, quindi è importante somministrarli in modo
                          costante per un periodo prolungato per ottenere i
                          benefici desiderati.
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="mx-auto w-full lg:w-[593px] p-2 border-b">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                      <span>Maggiori informazioni sull'olio di alghe</span>
                      {open ? (
                        <img
                          src={CancelIcon}
                          alt="CancelIcon"
                          className={`h-5 w-5`}
                        />
                      ) : (
                        <img
                          src={PlusIcon}
                          alt="CancelIcon"
                          className={`h-5 w-5`}
                        />
                      )}
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                        <p>La quantità varia in base al peso dell’animale.</p>
                        <p>Dosaggio di EPA/DHA al giorno per i cani:</p>
                        <p>- 0-6kg: 250mg (=0,4ml di olio Nutranext)</p>
                        <p>- 6-13kg: 500mg (=0,8ml di olio Nutranext)</p>
                        <p>- 13-22kg: 1000mg (=1,6ml di olio Nutranext)</p>
                        <p>- 22-35kg: 1500mg (=2,4ml di olio Nutranext)</p>
                        <p>- oltre 35kg: 2000mg (=3,2ml di olio Nutranext)</p>
                        <p>
                          Suggerimento: Gli omega-3 non forniscono risultati
                          immediati, quindi è importante somministrarli in modo
                          costante per un periodo prolungato per ottenere i
                          benefici desiderati.
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SisthSection;
