/* eslint-disable react/no-unescaped-entities */
import Button from "../../utils/button";

const LaVostra = () => {
  return (
    <div className="text-center px-3 mt-10 xl:p-20 pb-16 md:pb-0">
      <h1 className="text-4xl font-bold mb-8">
        La vostra voce guida il nostro lavoro
      </h1>
      <p>
        Calendarpet è frutto dell'ascolto delle esigenze dei veterinari,
        progettato per offrire soluzioni su misura che migliorano il lavoro
        quotidiano e la cura degli animali. Entrando nella nostra community,
        contribuirai a migliorare il futuro di Calendarpet, arricchendolo con
        nuove funzionalità che rispondono alle sfide del settore.{" "}
        <span className="font-bold">Hai spunti o suggerimeti da proporci?</span>
      </p>

      <Button
        className="bg-[#033C5A] text-white mt-8"
        content="Proponi"
      ></Button>
    </div>
  );
};

export default LaVostra;
