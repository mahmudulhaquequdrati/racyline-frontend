import image from "../../assets/Frame 1000005916 (3).png";
const OurPets = () => {
  return (
    <div className="bg-[#FFF5E6] ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-x-20 p-5 md:py-20 text-center md:text-left">
        <img src={image} alt="" />
        <div>
          <h2 className="text-5xl font-bold mt-5 md:mt-0 mb-10">
            Esplora la Rivoluzione degli Integratori
          </h2>
          <p className="text-lg">
            Con i nostri integratori all'avanguardia, promettiamo qualità senza
            compromessi, innovazione scientifica per il massimo effetto,
            sostenibilità in ogni passo e trasparenza totale. Scopri oggi come
            stiamo trasformando il benessere, un integratore alla volta.
            Unisciti a noi in questo viaggio verso una salute migliore.
          </p>
          <button className="bg-[#033C5A] text-white  px-4 py-2 rounded-sm cursor-pointer mt-8">
            Scopri ora SeriPet
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurPets;
