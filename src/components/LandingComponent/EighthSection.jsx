import React from "react";

const EighthSection = () => {
  return (
    <div
      className="md:flex justify-between py-20 px-10  m:px-6 
     lg:px-0 container mx-auto max-w-[1140px] gap-6"
    >
      <div>
        <h1 className="font-bold text-3xl">
          Prenota la prima visita per il tuo animale con i{" "}
          <br className="hidden lg:block" /> veterinari che trovi sulla nostra
          piattaforma
        </h1>
      </div>
      <div className="mt-10 md:mt-0">
        <button className="text-white px-10 py-3 bg-[#339E9F] rounded-lg">
          Prenota ora la visita
        </button>
      </div>
    </div>
  );
};

export default EighthSection;
