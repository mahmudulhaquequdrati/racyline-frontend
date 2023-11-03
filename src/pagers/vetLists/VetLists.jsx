import React from "react";
import VetList from "./vetList";

const VetLists = () => {
  const vetList = [
    {
      id: 1,
      name: "Mario Rossi",
      image: "",
      company: "Veterinario di medicina generale, Chirurgo veterinario",
      location: "Via Roma, 1, Roma, 00196 Roma (RM), Italia",
      treatmentAnimals: ["Canini", "Felini", "Roditori"],
      availability: [
        { day: "Da Lunedì a Venerdì", time: "15.00 - 22.30" },
        { day: "Sabato", time: "14.00 - 19.00" },
        { day: "Domenica", time: "Chiuso" },
      ],
    },
    {
      id: 2,
      name: "Mario Rossi",
      image: "",
      company: "Veterinario di medicina generale, Chirurgo veterinario",
      location: "Via Roma, 1, Roma, 00196 Roma (RM), Italia",
      treatmentAnimals: ["Canini", "Felini", "Roditori"],
      availability: [
        { day: "Da Lunedì a Venerdì", time: "15.00 - 22.30" },
        { day: "Sabato", time: "14.00 - 19.00" },
        { day: "Domenica", time: "Chiuso" },
      ],
    },
    {
      id: 3,
      name: "Mario Rossi",
      image: "",
      company: "Veterinario di medicina generale, Chirurgo veterinario",
      location: "Via Roma, 1, Roma, 00196 Roma (RM), Italia",
      treatmentAnimals: ["Canini", "Felini", "Roditori"],
      availability: [
        { day: "Da Lunedì a Venerdì", time: "15.00 - 22.30" },
        { day: "Sabato", time: "14.00 - 19.00" },
        { day: "Domenica", time: "Chiuso" },
      ],
    },
  ];

  return (
    <div className="bg-[#FFF7EC] pt-[60px] pb-[80px]">
      <div className="max-w-[1140px] w-full mx-auto">
        <h2 className="text-[18px] sm:text-[26px] p-4 md:p-0 md:text-[32px] font-bold leading-6 sm:leading-10 mb-3 sm:mb-7 md:mb-9">
          Scegli il veterinario, l’orario e prenota la visita
        </h2>
        <div className="flex flex-col gap-4 p-4 md:p-0">
          {vetList?.map((vetList) => (
            <VetList vetInfo={vetList} key={vetList?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VetLists;
