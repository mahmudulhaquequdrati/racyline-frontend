import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import PlusIcon from "../../assets/ICONS/Plus.svg";
import CancelIcon from "../../assets/ICONS/Cancel.svg";

const SeventhSection = () => {
  return (
    <div className="bg-white flex justify-center items-center py-10 md:py-20">
      <div>
        <div className="text-center mb-10">
          <h1 className="font-bold text-3xl">FAQ</h1>
          <p>Scopri le domande più frequentis</p>
        </div>
        <div className="md:mx-auto  w-full md:w-[593px] p-2 border-b">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg md:px-4 py-2 text-left text-sm font-medium ">
                  <span>
                    Perché il mio cane ha bisogno di integrare Omega-3?
                  </span>
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
                  <Disclosure.Panel className="md:px-4 pb-2 pt-4 text-sm text-gray-500">
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
                      costante per un periodo prolungato per ottenere i benefici
                      desiderati.
                    </p>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mx-auto w-full md:w-[593px] p-2 border-b">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg md:px-4 py-2 text-left text-sm font-medium ">
                  <span>Qual è il dosaggio corretto?</span>
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
                  <Disclosure.Panel className="md:px-4 pb-2 pt-4 text-sm text-gray-500">
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
                      costante per un periodo prolungato per ottenere i benefici
                      desiderati.
                    </p>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mx-auto w-full md:w-[593px] p-2 border-b">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg md:px-4 py-2 text-left text-sm font-medium ">
                  <span>Conservazione e durata dell’olio Nutranext?</span>
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
                  <Disclosure.Panel className="md:px-4 pb-2 pt-4 text-sm text-gray-500">
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
                      costante per un periodo prolungato per ottenere i benefici
                      desiderati.
                    </p>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mx-auto w-full md:w-[593px] p-2 border-b">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg md:px-4 py-2 text-left text-sm font-medium ">
                  <span>Com’è il sapore dell’olio?</span>
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
                  <Disclosure.Panel className="md:px-4 pb-2 pt-4 text-sm text-gray-500">
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
                      costante per un periodo prolungato per ottenere i benefici
                      desiderati.
                    </p>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mx-auto w-full md:w-[593px] p-2 border-b">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg md:px-4 py-2 text-left text-sm font-medium ">
                  <span>
                    Vantaggi di Nutranext rispetto agli altri integratori?
                  </span>
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
                  <Disclosure.Panel className="md:px-4 pb-2 pt-4 text-sm text-gray-500">
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
                      costante per un periodo prolungato per ottenere i benefici
                      desiderati.
                    </p>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mx-auto w-full md:w-[593px] p-2 border-b">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg md:px-4 py-2 text-left text-sm font-medium ">
                  <span>Olio Nutranext come cura o assunzione quotidiana?</span>
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
                  <Disclosure.Panel className="md:px-4 pb-2 pt-4 text-sm text-gray-500">
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
                      costante per un periodo prolungato per ottenere i benefici
                      desiderati.
                    </p>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mx-auto w-full md:w-[593px] p-2 border-b">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg md:px-4 py-2 text-left text-sm font-medium ">
                  <span>Quali sono gli ingredienti di Nutranext?</span>
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
                  <Disclosure.Panel className="md:px-4 pb-2 pt-4 text-sm text-gray-500">
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
                      costante per un periodo prolungato per ottenere i benefici
                      desiderati.
                    </p>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
