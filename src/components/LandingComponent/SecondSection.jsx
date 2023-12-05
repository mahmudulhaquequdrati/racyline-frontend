import React from "react";

export const SecondSection = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] md:gap-[60px] px-5 md:px-[250px] py-[80px] relative bg-white">
      <div className="w-full md:w-[700px] gap-[10px] flex flex-col items-center relative ">
        <p className="relative mt-[-1.00px] font-h2 ">
          <p className="font-bold text-3xl md:px-20 text-center">
            Integratore NutraNext – Il Futuro del Benessere Animale
          </p>
        </p>
        <p className="relative text-center">
          Il nostro primo prodotto è una rivoluzione negli integratori per
          animali domestici.
        </p>
      </div>
      <div className="bg-gray-50 relative w-[200px] md:w-[564px] h-[150px] md:h-[300px] rounded-[8px] overflow-hidden">
        <div className="flex h-full justify-center items-center text-gray-300 font-medium md:text-[45px] text-center">
          Video Placeholder
        </div>
      </div>
      <div className="gap-[36px] w-full flex flex-col items-center relative ">
        <p className="text-center mt-[-1.00px] font-h5">
          Progettato per promuovere la salute cardiaca, delle ossa, cerebrale e
          la bellezza del mantello, è la soluzione completa che i tuoi amici
          animali.
        </p>
        <p className="text-[15px] text-center tracking-[0] leading-[24px]">
          <span className="text-black ">
            Questa formula unica combina l’olio di Alga Schizochytrium, ricco di{" "}
          </span>
          <span className="font-bold">Omega-3 essenziali</span>
          <span className="text-black ">
            , con l&#39;olio di Hermetia Illucens, un potente{" "}
          </span>
          <span className="font-bold">antibatterico naturale</span>
          <span className="text-black ">
            . Ciò non solo garantisce una nutrizione avanzata ma anche un
            impegno concreto per la sostenibilità ambientale, offrendo il meglio
            alla salute dei tuoi animali e al pianeta.
          </span>
        </p>
      </div>
    </div>
  );
};
