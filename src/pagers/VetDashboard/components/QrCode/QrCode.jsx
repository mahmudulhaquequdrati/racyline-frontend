const QrCode = () => {
  return (
    <div className="my-40 text-center px-3">
      <h1 className="text-4xl font-bold mb-5">QR-Code: Accesso istantaneo</h1>
      <p>
        Incoraggia i tuoi clienti a scannerizzare un codice QR presente nella
        tua clinica veterinaria per un accesso rapido alla piattaforma online.
      </p>
      <ul className="list-disc text-left pl-4 mt-5">
        <li>
          <span className="font-bold">
            {" "}
            Ricevi gratuitamente adesivi QR-code su richiesta:
          </span>
          ti invieremo uno o più adesivi QR-code da posizionare in punti
          strategici a tua scelta.
        </li>
        <li>
          <span className="font-bold">
            {" "}
            Posizionamento ideale per massima visibilità:
          </span>{" "}
          Ad esempio, attaccando l'adesivo sul vetro esterno della clinica,
          fornirai un servizio utile per i clienti che si trovano davanti
          all'ambulatorio nei giorni di chiusura, permettendo loro di prenotare
          facilmente un appuntamento.
        </li>
      </ul>
      <h4 className="font-bold mt-5">
        PROMUOVI IL CAMBIAMENTO VERSO UN SISTEMA PIU' EFFICIENTE
      </h4>
    </div>
  );
};

export default QrCode;
