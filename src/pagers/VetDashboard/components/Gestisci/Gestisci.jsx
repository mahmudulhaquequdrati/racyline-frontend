import image12 from "../../../../assets/images/image (12).png";
import image13 from "../../../../assets/images/image (13).png";
import image14 from "../../../../assets/images/image (14).png";
import image15 from "../../../../assets/images/image (15).png";
import image16 from "../../../../assets/images/image (16).png";
import image17 from "../../../../assets/images/image (17).png";
import image18 from "../../../../assets/images/image (18).png";
import image19 from "../../../../assets/images/image (19).png";
const Gestisci = () => {
  const items = [
    {
      img: image12,
      heading: "Calendario Intelligente",
      para: "Organizza la tua giornata con un'interfaccia chiara e intuitiva. Monitora facilmente appuntamenti e impegni",
    },
    {
      img: image13,
      heading: "Prenotazioni Online 24/7",
      para: "Ottimizza le prenotazioni attraverso una pagina personalizzata che evidenzia le tue disponibilità aggiornate, permettendo ai clienti di visualizzare solo i giorni liberi e di prenotare autonomamente la loro prossima visita al tuo ambulatorio",
    },
    {
      img: image14,
      heading: "Gestione Clienti Avanzata",
      para: "Fornisci ai tuoi clienti la flessibilità di annullare o riprogrammare gli appuntamenti. Mantienili informati per eliminare i no-show",
    },
    {
      img: image16,
      heading: "Promemoria Automatici",
      para: "Riduci assenze e prenotazioni doppie con promemoria tempestivi",
    },
    {
      img: image17,
      heading: "Cartella Clinica Digitale",
      para: "Ogni pet ha la propria cartella clinica digitale per un accesso rapido allo storico di visite, analisi e patologie",
    },
    {
      img: image18,
      heading: "Integrazioni Smart",
      para: "Collega con Google Calendar per sincronizzare la gestione degli appuntamenti.",
    },
    {
      img: image15,
      heading: "Database Clienti Sicuro",
      para: "Conserva i dati dei clienti in un archivio digitale centrale e sicuro, con informazioni facilmente accessibili e ricercabili",
    },
    {
      img: image19,
      heading: "Accessibilità Mobile",
      para: "Gestisci tutto comodamente dal tuo smartphone o tablet, per avere il controllo ovunque tu sia",
    },
  ];
  return (
    // grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4
    <div className="my-40 px-2">
      <h3 className="text-4xl font-bold text-center mb-8">
        Gestisci, Innova, Semplifica
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10">
        {items.map((item) => (
          <div
            key={item.img}
            className="bg-[#D0E7F3] px-[24px] py-[40px] place-items-center text-center  w-[250x] min-h-[540pxpx] rounded-lg"
          >
            <img src={item.img} className="mx-auto mb-5" alt="" />
            <h3 className="text-[22px] font-semibold mb-4">{item.heading}</h3>
            <p>{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gestisci;
