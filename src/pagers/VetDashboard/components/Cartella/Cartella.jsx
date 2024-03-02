import OnlineServices from "../../utils/OnlineServices";
import image5 from "../../../../assets/images/image (5).png";

const Cartella = () => {
  const services = [
    {
      subHeading: "Ottimo punto di partenza per i nuovi pazienti:",
      list: " Avvia ogni nuova relazione con il piede giusto, avendo già a disposizione un quadro completo della storia clinica del pet.",
    },
    {
      subHeading: "Prezioso supporto alla memoria per i pazienti abituali:",
      list: "Mantieni un registro dettagliato delle visite passate, trattamenti e diagnosi, fondamentale per fornire cure continue e personalizzate.",
    },
  ];
  return (
    <OnlineServices
      img={image5}
      title=""
      flexDirection="flex flex-col md:flex-row"
      head="Cartella Clinica Pet:"
      subHead="Accesso diretto allo storico di salute del pet:"
      para="Consulta facilmente tutte le informazioni relative alla salute dell'animale."
      lists={services}
      button="Esplora"
    ></OnlineServices>
  );
};

export default Cartella;
