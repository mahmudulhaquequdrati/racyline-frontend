import React from "react";
import ActionCover from "../../assets/ICONS/Call to Action V5.svg";
const ThirdSection = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 p-10 md:p-6 lg:p-0 container mx-auto max-w-[1140px]">
        <div className="py-20  mx-auto w-full ">
          <div className="bg-gray-50 relative w-full lg:w-[520px] md:h-[432px] h-[280px] rounded-[8px] overflow-hidden">
            <div className="flex h-full justify-center items-center text-gray-300 font-medium md:text-[45px] text-center">
              Image Placeholder
            </div>
          </div>
        </div>
        <div className="md:py-20  md:mt-10 w-full">
          <h1 className="font-bold text-3xl">
            Alga Schizochytrium - L'ORO VERDE DEI MARI
          </h1>
          <p className="my-5">
            L'Alga Schizochytrium è una vera e propria gemma dei nostri mari.
            Questa microalga è straordinariamente ricca di Omega-3, definiti
            acidi grassi essenziali perché non possono essere sintetizzati
            autonomamente e devono essere introdotti dalla dieta.
          </p>
          <p>
            Gli Omega-3, tra cui l'EPA (acido eicosapentaenoico) e il DHA (acido
            docosaesaenoico), sono nutrienti cruciali per il benessere cardiaco,
            la salute delle ossa, la vitalità cerebrale e la bellezza del
            mantello.
          </p>
          <div>
            <button className="text-white px-10 py-3 bg-[#339E9F] rounded-lg mt-16">
              Scopri di più
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 p-10 md:p-6 lg:p-0 container mx-auto max-w-[1140px]">
        <div className="md:py-20  md:mt-10 w-full">
          <h1 className="font-bold text-3xl">
            Hermetia Illucens – POTENTE ANTIBATTERICO NATURALE
          </h1>
          <p className="my-5">
            L'olio di Hermetia Illucens è un ingrediente rivoluzionario, in
            quanto è estratto da insetti. Questo olio è noto per essere una
            ricca fonte di composti bioattivi e acido laurico, un acido grasso
            con proprietà antibatteriche naturali.
          </p>
          <p>
            Il suo utilizzo è un passo avanti verso la sostenibilità, poiché
            consente di ridurre l'uso di risorse naturali e di contribuire a un
            ambiente più equilibrato.
          </p>
          <div>
            <button className="text-white px-10 py-3 bg-[#339E9F] rounded-lg mt-16">
              Scopri di più
            </button>
          </div>
        </div>
        <div className="py-20  mx-auto w-full ">
          <div className="bg-gray-50 relative w-full lg:w-[520px] md:h-[432px] h-[280px] rounded-[8px] overflow-hidden">
            <div className="flex h-full justify-center items-center text-gray-300 font-medium md:text-[45px] text-center">
              Image Placeholder
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center items-center py-20 container mx-auto max-w-[1140px] md:p-6 p-10 lg:p-0">
        <div className="bg-gray-50 relative w-full md:w-[564px] md:h-[452px] h-[280px] rounded-[8px] overflow-hidden">
          <div className="flex h-full justify-center items-center text-gray-300 font-medium md:text-[45px] text-center">
            Image Placeholder
          </div>
        </div>
      </div>
      <div>
        <img src={ActionCover} width={"100%"} alt="" />
      </div>
      <div className="bg-white py-10 md:py-20 md:px-60 px-10">
        <div className="text-center">
          <h1 className="font-bold text-3xl mb-5">Chi siamo</h1>
          <p>
            In un mondo in costante evoluzione, il benessere degli animali
            domestici è diventato una priorità per molte famiglie. Noi, come
            start-up dedicata al benessere degli animali domestici, abbiamo
            abbracciato questa missione con passione e determinazione. La nostra
            filosofia è basata su ingredienti innovativi e sostenibili, pensati
            per migliorare la vita dei vostri amici a quattro zampe.
          </p>
          <p className="my-10">
            Il nostro innovativo integratore per animali domestici rappresenta
            una svolta nella nutrizione animale. La combinazione unica di questi
            due ingredienti avanzati, l'olio di Alga Schizochytrium e l'olio di
            Hermetia Illucens, offre una nutrizione avanzata che va al di là
            delle aspettative tradizionali. Non solo vogliamo migliorare la
            salute dei vostri animali, ma lo facciamo contribuendo a un futuro
            più sostenibile, riducendo l'impatto ambientale e promuovendo la
            conservazione delle risorse naturali.
          </p>
          <p>
            Unisciti a noi nel plasmare un futuro migliore per gli animali
            domestici e per il nostro pianeta. Scegli il nostro integratore e
            investi nel benessere, nella sostenibilità e nella felicità dei tuoi
            animali domestici!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
