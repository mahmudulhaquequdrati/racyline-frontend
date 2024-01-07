import React from "react";

const FourthSection = () => {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 md:p-0">
    //   <div className="md:py-20 md:pl-[11.5rem] md:pr-40">
    //     <div className="bg-gray-50 relative w-[200px] md:w-[564px] md:h-[452px] h-[150px] rounded-[8px] overflow-hidden">
    //       <div className="flex h-full justify-center items-center text-gray-300 font-medium md:text-[45px] text-center">
    //         Image Placeholder
    //       </div>
    //     </div>
    //   </div>
    //   <div className="md:py-20 md:pl-20 md:pr-36 ">
    //     <h1 className="font-bold text-3xl">
    //       Sostenibilità al Cuore del Nostro Prodotto
    //     </h1>
    //     <p className="my-5">
    //       Siamo fieri di dire che il nostro integratore non è solo un passo
    //       avanti nel miglioramento della salute degli animali domestici, ma è
    //       anche un passo verso un futuro più sostenibile. Gli ingredienti
    //       chiave, l'olio di Alga Schizochytrium e l'olio di Hermetia Illucens,
    //       sono coltivati con metodi ecologici e sostenibili.
    //     </p>
    //     <p>
    //       Questi ingredienti sono risorse rinnovabili che riducono l'impatto
    //       ambientale, consentendovi di prendervi cura dei vostri animali senza
    //       compromettere il pianeta.
    //     </p>
    //     <div>
    //       <button className="text-white px-10 py-3 bg-[#339E9F] rounded-lg mt-16">
    //         Scopri il nostro prodotto
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 p-10 md:p-6 lg:p-0 container mx-auto max-w-[1140px]">
      <div className="py-20  mx-auto w-full ">
        <div className="bg-gray-50 relative w-full lg:w-[520px] md:h-[455px] h-[280px] rounded-[8px] overflow-hidden">
          <div className="flex h-full justify-center items-center text-gray-300 font-medium md:text-[45px] text-center">
            Image Placeholder
          </div>
        </div>
      </div>
      <div className="md:py-20  md:mt-10 w-full">
        <h1 className="font-bold text-3xl">
          Sostenibilità al Cuore del Nostro Prodotto
        </h1>
        <p className="my-5">
          Siamo fieri di dire che il nostro integratore non è solo un passo
          avanti nel miglioramento della salute degli animali domestici, ma è
          anche un passo verso un futuro più sostenibile. Gli ingredienti
          chiave, l'olio di Alga Schizochytrium e l'olio di Hermetia Illucens,
          sono coltivati con metodi ecologici e sostenibili.
        </p>
        <p>
          Questi ingredienti sono risorse rinnovabili che riducono l'impatto
          ambientale, consentendovi di prendervi cura dei vostri animali senza
          compromettere il pianeta.
        </p>
        <div>
          <button className="text-white px-10 py-3 bg-[#339E9F] rounded-lg mt-16">
            Scopri il nostro prodotto
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
