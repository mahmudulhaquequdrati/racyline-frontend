/* eslint-disable react/no-unescaped-entities */
import Button from "../../utils/button";
import "./Pronto.css";
const Pronto = () => {
  return (
    <div className="bg-image pt-40">
      <div className="flex flex-col justify-center items-center gap-3 lg:gap-6 lg:w-[800px] m-3 lg:mx-auto bg-[#E0F4FF] p-3 lg:p-10 text-center">
        <h3 className="text-4xl font-bold">Pronto a iniziare?</h3>
        <p>
          Ottieni una panoramica completa delle funzionalità di Calendarpet
          attraverso una dimostrazione video guidata e parla direttamente con il
          nostro team di supporto per assicurarti un'esperienza fluida e senza
          complicazioni fin dall'inizio.
        </p>
        <Button
          className="bg-[#033C5A] text-white rounded-sm"
          content="Prenota una call"
        ></Button>
      </div>
    </div>
  );
};

export default Pronto;
