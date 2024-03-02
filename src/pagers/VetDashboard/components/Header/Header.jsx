import image9 from "../../../../assets/images/image (9).png";
import image2 from "../../../../assets/images/image (2).png";
import Button from "../../utils/button";
const Header = () => {
  return (
    <div className="relative">
      <img src={image9} className="ml-auto pt-20" alt="" />
      <img
        src={image2}
        className="absolute -left-10  lg:left-48 top-36 md:top-52 lg:top-[350px] z-10"
        alt=""
      />
      <div className="hidden lg:block absolute left-20 xl:left-0 top-24 bg-[#033C5A] lg:w-[405px] h-[580px] p-[60px] mt-10 rounded-xl z-50">
        <h3 className="text-[36px] font-bold text-white">
          Il tuo alleato nella gestione della clinica veterinaria
        </h3>
        <p className="text-[18px] text-gray-300 my-5">
          Software su misura che semplifica la pianficazione e massimizza ogni
          momento dedicato alla cura degli animali
        </p>
        <Button className="bg-yellow-500" content="Inizia ora"></Button>

        <p className="tracking-tighter text-gray-300">
          NON È NECESSARIA LA CARTA DI CREDITO
        </p>
      </div>
      <div className="lg:w-[630px] flex flex-col justify-center items-center gap-y-3 text-center mx-auto mt-16">
        <h3 className="text-[32px] font-bold">
          La prima agenda digitale VETERINARIA completamente gratuita
        </h3>
        <p className="px-3 md:px-0">
          Organizzazione semplice delle prenotazioni, per concentrarti solo su
          ciò che ami!
        </p>

        <Button
          className="bg-[#033C5A] text-white"
          content="Inizia ora"
        ></Button>
      </div>
    </div>
  );
};

export default Header;
