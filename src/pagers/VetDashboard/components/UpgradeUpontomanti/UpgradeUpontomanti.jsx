/* eslint-disable react/no-unescaped-entities */
import image2 from "../../../../assets/images/image (6).png";
import Button from "../../utils/button";
const UpgradeUpontomanti = () => {
  return (
    <div className="h-[400px] flex flex-col md:flex-row px-3 justify-center items-center gap-3 lg:gap-20 my-40">
      <img src={image2} className="w-[400px] lg:w-auto" alt="" />
      <div>
        <h2 className="text-xl lg:text-[32px] font-bold mb-2 lg:mb-5">
          Non dovrai più chiedere a nessuno: "Che orario le andrebbe bene?"
        </h2>
        <p>Offri un servizio di alto livello ai tuoi pazienti!</p>
        <Button
          className="bg-[#033C5A] text-white mt-4 lg:mt-10"
          content="Upgrade appuntamenti"
        ></Button>
      </div>
    </div>
  );
};

export default UpgradeUpontomanti;
