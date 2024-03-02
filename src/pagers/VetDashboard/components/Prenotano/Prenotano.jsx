import OnlineServices from "../../utils/OnlineServices";
import image4 from "../../../../assets/images/image (4).png";

const Prenotano = () => {
  const services = [
    {
      subHeading: "Comodamente da casa,",
      list: "offrendo una soluzione pratica e accessibile per tutti.",
    },
    {
      subHeading: "Senza la necessità di effettuare chiamate,",
      list: "eliminando gli inconvenienti legati alla comunicazione telefonica.",
    },
    {
      subHeading: "Senza perdite di tempo,",
      list: " ottimizzando il processo di prenotazione per te e per i tuoi pazienti.",
    },
  ];
  return (
    <OnlineServices
      img={image4}
      flexDirection="flex flex-col md:flex-row-reverse"
      title="LORO"
      head="Prenotano in autonomia"
      subHead="Permetti ai tuoi pazienti di scegliere il giorno e l'orario più comodo"
      para="per i loro impegni, in base alle tue disponibilità visualizzabili automaticamente sulla piattaforma."
      lists={services}
    ></OnlineServices>
  );
};

export default Prenotano;
