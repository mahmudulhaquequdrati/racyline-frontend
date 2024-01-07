import React from "react";
import TikSuccess from "../../assets/ICONS/tiksuccess.svg";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto max-w-[1140px]">
      {/* py-20 pl-10 pr-10 md:pl-[11.5rem] md:pr-40 */}
      <div className="py-20 md:pr-16 px-3 md:px-6 lg:px-0">
        <h1 className="font-bold text-3xl">
          Prenota una visita con il veterinario
        </h1>
        <p className="my-5">
          Scegli tra i veterinari nella nostra piattaforma, potrai:
        </p>
        <div className="flex items-start">
          <img className="mt-1" src={TikSuccess} alt="" />
          <p className="ml-2">
            Prenotare in modo autonomo una visita in una clinica veterinaria a
            tua scelta
          </p>
        </div>
        <div className="flex items-start mt-2">
          <img className="mt-1" src={TikSuccess} alt="" />
          <p className="ml-2">
            Conservare i documenti medici del tuo animale nella cartella clinica
          </p>
        </div>
        <div>
          <Link to={"/user/vet-lists"}>
            <button className="bg-[#339E9F] px-10 py-3 text-white rounded-lg mt-10">
              Prenota ora la visita
            </button>
          </Link>
        </div>
      </div>
      {/* py-20 pl-10 pr-10 md:pl-20 md:pr-60 text-white bg-[#339E9F] */}
      <div className="py-20 md:pl-16 px-3 text-white bg-[#339E9F]">
        <h1 className="font-bold text-3xl">
          NutraNext - Alimentazione del futuro
        </h1>
        <p className="my-5">
          Scopri come migliorare il benessere del tuo animale.
        </p>
        <p>
          Collaboriamo direttamente con i veterinari per sviluppare formule più
          efficaci per la salute del tuo animale domestico.
        </p>
        <Link to="/product-info">
          <button className="text-[#339E9F] px-10 py-3 bg-white rounded-lg mt-16">
            Scopri il nostro prodotto
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
