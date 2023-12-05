import React from "react";

const FifthSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="text-center">
        <h1 className="font-bold text-3xl">
          Benefici Che si Vedono e Si Sentono
        </h1>
        <p>
          L'integratore offre una serie di vantaggi tangibili per i vostri
          animali domestici
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-10 gap-7 flex-wrap my-20 mx-10 md:mx-40">
        <div className="w-[354px] h-[330px] px-2 border shadow py-10 rounded">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gray-50"></div>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-2xl my-5">
              Salute del Cuore e del Sistema Cardiovascolare
            </h2>
            <p>
              L'alto contenuto di EPA contribuisce a mantenere il cuore del
              vostro animale domestico in condizioni ottimali.
            </p>
          </div>
        </div>
        <div className="w-[354px] h-[330px] px-2 border shadow py-10 rounded">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gray-50"></div>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-2xl my-5">
              Pelle Sana e Pelo Lucente
            </h2>
            <p>
              Gli acidi grassi essenziali promuovono una pelle sana e un pelo
              lucente che non passano inosservati.
            </p>
          </div>
        </div>
        <div className="w-[354px] h-[330px] px-2 border shadow py-10 rounded">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gray-50"></div>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-2xl my-5">
              Funzione Cognitiva Ottimale
            </h2>
            <p>
              I nostri ingredienti aiutano gli animali a rimanere attivi e
              vitali, migliorando la loro funzione cognitiva.
            </p>
          </div>
        </div>
        <div className="w-[354px] h-[330px] px-2 border shadow py-10 rounded">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gray-50"></div>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-2xl my-5">
              Sistema Immunitario Potenziato
            </h2>
            <p>
              Il sistema immunitario dei vostri animali domestici sarà
              rafforzato, aiutandoli a difendersi da malattie.
            </p>
          </div>
        </div>
        <div className="w-[354px] h-[330px] px-2 border shadow py-10 rounded">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gray-50"></div>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-2xl my-5">Sostenibilità</h2>
            <p>
              Oltre a questi benefici diretti, il vostro acquisto contribuirà a
              un mondo più sostenibile, un regalo per le future generazioni di
              animali domestici e i loro padroni.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
