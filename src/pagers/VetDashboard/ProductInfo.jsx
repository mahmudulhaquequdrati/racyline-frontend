import React from "react";
import { Link } from "react-router-dom";
import Cartella from "./components/Cartella/Cartella";
import Gallery from "./components/Gallery/Gallery";
import Gestisci from "./components/Gestisci/Gestisci";
import Header from "./components/Header/Header";
import LaVostra from "./components/LaVostra/LaVostra";
import Organizzi from "./components/Organizzi/Organizzi";
import Prenotano from "./components/Prenotano/Prenotano";
import Pronto from "./components/Pronto/Pronto";
import QrCode from "./components/QrCode/QrCode";
import Services from "./components/Services/Services";
import UpgradeUpontomanti from "./components/UpgradeUpontomanti/UpgradeUpontomanti";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import doctor from "../../assets/images/doctor.png";
import FAQ from "./components/FAQ/FAQ";

export default function ProductInfo() {
  return (
    // <div className="flex flex-col items-center gap-[10px] md:gap-[40px] px-5 md:px-[250px]  relative bg-white">
    //   <div className="bg-gray-50 relative w-[200px] md:w-[564px] h-[150px] md:h-[300px] rounded-[8px] overflow-hidden mt-[20px] mb-4">
    //     <div className="flex h-full justify-center items-center text-gray-300 font-medium md:text-[45px] text-center">
    //       Video Placeholder
    //     </div>
    //   </div>
    //   <div className="w-full md:w-[700px] gap-[10px] flex flex-col items-center relative  ">
    //     <p className="relative mt-[-1.00px] font-h2 ">
    //       <span className="font-bold text-3xl md:px-20 text-center inline-block">
    //         Integratore NutraNext – Il Futuro del Benessere Animale
    //       </span>
    //     </p>
    //     <p className="relative text-center">
    //       Il nostro primo prodotto è una rivoluzione negli integratori per
    //       animali domestici.
    //     </p>
    //   </div>
    //   <div className="mb-16 flex gap-6 items-center">
    //     <div className="font-medium">€ 19.99</div>
    //     <Link to={"/user/vet-lists"}>
    //       <button className="bg-[#339E9F] px-10 py-3 text-white rounded ">
    //         Compralo ora
    //       </button>
    //     </Link>
    //   </div>
    // </div>
    <div className="bg-[#E0F4FF]">
      <div className="max-w-[1140px] mx-auto">
        <Header></Header>
        <Organizzi></Organizzi>
        <Prenotano></Prenotano>
        <Gestisci></Gestisci>
        <Cartella></Cartella>
        <VideoPlayer></VideoPlayer>
        <UpgradeUpontomanti></UpgradeUpontomanti>
        <Pronto></Pronto>
        <Services></Services>
        <QrCode></QrCode>
        <img src={doctor} className="my-40" alt="" />
        <FAQ></FAQ>
        <Gallery></Gallery>
        <LaVostra></LaVostra>
      </div>
    </div>
  );
}
