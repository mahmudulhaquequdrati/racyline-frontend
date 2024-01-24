import { useEffect } from "react";
import { useGetAllVetListsQuery } from "../../features/vetLists/vetLists";
import VetList from "./VetList";

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

  const {
    data: vetLists,
    isLoading,
    isError,
    refetch,
  } = useGetAllVetListsQuery();
  // console.log(vetLists);

  let content;
  if (isLoading) {
    content = <h1>Loading...</h1>;
  }
  if (!isLoading && !isError && vetLists?.vetList?.length > 0) {
    content = (
      <div className="grid grid-cols-1 gap-4">
        {vetLists?.vetList
          ?.filter((vet) => vet.approved && vet.active)
          ?.map((vetList, i) => (
            <VetList vetInfo={vetList} key={i} />
          ))}
        {vetLists?.vetList
          ?.filter((vet) => vet.approved && vet.active)
          ?.map((vetList, i) => (
            <VetList vetInfo={vetList} key={i} />
          ))}
      </div>
    );
  }
  if (!isLoading && !isError && vetLists?.vetList?.length === 0) {
    content = <h1>No vet Found!</h1>;
  }
  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className="bg-primary pt-[60px] pb-[80px]">
      <div className="max-w-[1140px] w-full mx-auto p-4 md:p-8 lg:p-0">
        <h2 className="text-[18px] sm:text-[26px] md:text-[32px] font-bold leading-6 sm:leading-10 mb-4 sm:mb-7 md:mb-9">
          Scegli il veterinario, l’orario e prenota la visita
        </h2>
        <div className="flex flex-col gap-4">{content}</div>
      </div>
    </div>
  );
};

export default VetLists;
