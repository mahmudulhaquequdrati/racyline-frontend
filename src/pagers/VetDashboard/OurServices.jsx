import image1 from "../../assets/1 5955.png";
import image2 from "../../assets/2 75751238.png";
import image3 from "../../assets/3 330123457.png";
import image4 from "../../assets/last.png";
const OurServices = () => {
  const services = [
    {
      img: image1,
      heading: "Cerca",
      para: "Individua un nuovo veterinario nella tua zona o inserisci quello di fiducia.",
    },
    {
      img: image2,
      heading: "Scegli",
      para: "Trova il giorno in cui è libero il tuo veterinario, accedendo direttamente al calendario delle sue disponibilità per vedere le date e gli orari in cui è già occupato.",
    },
    {
      img: image3,
      heading: "Registrati",
      para: "Inserisci solo la tua email. Opzionalmente, completa la scheda clinica del tuo animale per fornire tutte le informazioni al veterinario prima del tuo arrivo.",
    },
    {
      img: image4,
      heading: "Prenota",
      para: "In pochi minuti la tua prenotazione sarà pronta. Riceverai una conferma via email e ci occuperemo noi di ricordarti l'appuntamento.",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto my-20">
      <h2 className="text-3xl font-bold text-center mt-16 mb-10">
        Come funziona
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
        {services.map((service) => (
          <div
            key={service.img}
            className="text-center rounded-lg p-8 border border-gray-200 h-[400px]"
          >
            <img src={service.img} className="mx-auto" alt="" />
            <h3 className="text-xl font-bold my-3">{service.heading}</h3>
            <p>{service.para}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[#033C5A] text-white  px-6 py-2 rounded-sm  cursor-pointer mt-8">
          Inizia ora
        </button>
      </div>
    </div>
  );
};

export default OurServices;
