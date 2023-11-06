import React from "react";
import { useSelector } from "react-redux";

const ConnectCalender = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="p-4 md:p-8 lg:p-20 min-h-[100vh] bg-primary">
      <div className="max-w-[1140px] w-full mx-auto">
        <h1 className="font-bold text-2xl mb-6">Calendario</h1>
        <div className="w-full md:w-1/2 bg-white p-10 rounded-md mt-3">
          <p className="text-[22px] font-semibold mb-6 leading-8">
            Sincronizza i tuoi appuntamenti con il tuo Calendario Google
          </p>
          <p className="text-[15px] font-normal text-gray-400 leading-6">
            Se vuoi fai puoi connettere il tuo calendario Google e sincronizzare
            tutti gli appuntamenti dei tuoi clienti sul tuo calendario.
          </p>
        </div>
        <div className="mt-8">
          <button
            className={`w-full md:w-1/2 rounded-lg py-3 px-4 outline-none  text-white bg-secondary `}
          >
            Connetti a Google Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectCalender;
