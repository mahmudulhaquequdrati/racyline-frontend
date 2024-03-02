import image3 from "../../../../assets/images/image (3).png";
import OnlineServices from "../../utils/OnlineServices";

const Organizzi = () => {
  const services = [
    {
      subHeading: "Imposta l'orario di lavoro predefinito,",
      list: "definendo le fasce orarie in cui sei disponibile per incontri o appuntamenti.",
    },
    {
      subHeading: "Inserisci i giorni di chiusura,",
      list: "per comunicare automaticamente ai tuoi clienti o pazienti quando non sei disponibile.",
    },
    {
      subHeading: "Programma la tua disponibilità in tempo reale,",
      list: "aggiornando le tue ore lavorative e i periodi di assenza con facilità e flessibilità.",
    },
  ];
  return (
    <OnlineServices
      img={image3}
      title="TU"
      flexDirection="flex flex-col md:flex-row"
      head="Organizzi il calendario"
      subHead="Gestisci tutti i tuoi impegni da un unico pannello di controllo"
      para="centralizzando la gestione per una visione chiara e immediata delle tue attività."
      lists={services}
    ></OnlineServices>
  );
};

export default Organizzi;
