import React from "react";
import HeroSection from "../../components/LandingComponent/HeroSection";
import { SecondSection } from "../../components/LandingComponent/SecondSection";
import ThirdSection from "../../components/LandingComponent/ThirdSection";
import FourthSection from "../../components/LandingComponent/FourthSection";
import FifthSection from "../../components/LandingComponent/FifthSection";
import SisthSection from "../../components/LandingComponent/SisthSection";
import SeventhSection from "../../components/LandingComponent/SeventhSection";
import EighthSection from "../../components/LandingComponent/EighthSection";
import LandingHeader from "../../components/LandingComponent/LandingHeader";

import image1 from "../../assets/1.png";
import image5 from "../../assets/5.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import Random from "../../components/LandingComponent/Random";
import BuyPet from "../../components/LandingComponent/BuyPet";
import OurServices from "./OurServices";
import OurPets from "./OurPets";

export default function LandingPage() {
  return (
    <section className=" ">
      <div className="overflow-hidden px-6 md:px-0 mx-auto relative">
        <LandingHeader />
        <Random
          backgroundColor="bg-transparent"
          flexDirection="flex flex-col md:flex-row"
          image={image1}
          heading="Trova un Veterinario nella Tua Zona"
          para="Non è mai stato così semplice. Con CALENDARPET, scopri i migliori professionisti vicino a te, pronti a prendersi cura del tuo pet con passione e professionalità. La salute del tuo amico a quattro zampe è la nostra priorità."
        ></Random>
        <Random
          backgroundColor="bg-[#E0F4FF]"
          flexDirection="flex flex-col md:flex-row-reverse"
          image={image3}
          heading="Prenota la Visita in Modo Facile, Veloce e Gratuito"
          para="Dimentica le lunghe attese al telefono e i calendari complicati. La nostra interfaccia intuitiva ti permette di prenotare una visita veterinaria con pochi clic. Facilità e comodità sono al centro del nostro servizio, tutto completamente gratuito."
        ></Random>
        <Random
          backgroundColor="bg-transparent"
          flexDirection="flex flex-col md:flex-row"
          image={image4}
          heading="Conserva i Dati Sanitari del Tuo Pet"
          para="Con CalendarPet, la cartella clinica del tuo animale è sempre accessibile e aggiornata sia per te che per il tuo veterinario. Conserva tutti i dati sanitari in un unico posto sicuro: dallo storico delle visite, ai vaccini, fino ai trattamenti in corso. Prendersi cura del tuo pet non è mai stato così organizzato."
        ></Random>
        <Random
          backgroundColor="bg-[#E0F4FF]"
          flexDirection="flex flex-col md:flex-row-reverse"
          image={image2}
          heading="Non dimenticherai mai più un appuntamento"
          para="I nostri promemoria via email ti assicurano di rimanere sempre aggiornato sulle prossime visite e sulle esigenze sanitarie del tuo pet, permettendoti di vivere con serenità la cura del tuo amico fedele."
        ></Random>
        <Random
          image={image5}
          flexDirection="flex flex-col md:flex-row"
          heading="Gestisci tutto dal palmo della tua mano"
          para="Prenota, disdici, modifica e controlla l'esito delle tue analisi direttamente dal tuo telefono. Ovunque tu sia, sempre a disposizione!"
        ></Random>
        <BuyPet />
        <OurServices />
        <OurPets />

        {/* <HeroSection /> */}
        {/* <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SisthSection />
        <SeventhSection />
        <EighthSection /> */}
      </div>
    </section>
  );
}
