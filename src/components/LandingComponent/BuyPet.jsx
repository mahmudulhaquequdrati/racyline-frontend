import backgroundImage from "../../assets/bgImage.png";

const BuyPet = () => {
  const headerStyle = {
    background: `url(${backgroundImage}) no-repeat center / cover`,
    height: "600px",
    backgroundPosition: "center",
    // height: "600px",
  };

  return (
    <section style={headerStyle} className="relative">
      <div className=" flex h-full  justify-center lg:justify-end items-center ">
        <div className="bg-white p-5 w-[70%] md:w-[40%] lg:w-[30%] text-center rounded-md mr-0 lg:mr-20  ">
          <h1 className="text-[2.25rem] 2xl:text-[3rem] tracking-tighter font-semibold mb-5">
            Non solo un servizio
          </h1>
          <p className=" text-[#033C5A] text-xl lg:text-lg 2xl:text-xl tracking-tighter font-semibold">
            Una vera e propria community di amanti degli animali. Condividi
            esperienze, consigli e storie con altri proprietari e scopri
            comerendere la vita del tuo pet ancora più felice e salutare.
          </p>
          <button className="bg-[#033C5A] text-white uppercase px-4 py-2 rounded-sm font-semibold tracking-tighter cursor-pointer mt-8">
            Trova il tuo veterinario
          </button>
        </div>
      </div>
    </section>
  );
};

export default BuyPet;
