import backgroundImage from "../../assets/Rectangle.png";

const LandingHeader = () => {
  const headerStyle = {
    background: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "600px",
  };

  return (
    <section style={headerStyle}>
      <div className="p-10 lg:w-[70%] mx-auto text-center ">
        <div className="bg-[#D4D9DD] text-[#033C5A] p-10 my-5">
          <h1 className="text-[2.25rem] lg:text-[5rem] tracking-tighter font-[900] mb-5">
            CALENDARPET
          </h1>
          <p className=" text-[#033C5A] text-xl lg:text-3xl 2xl:text-4xl tracking-tighter font-bold">
            La Tua agenda, il nostro impegno
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <p className=" text-white text-xl lg:text-4xl tracking-tighter font-bold text-center mb-10">
          La tua prenotazione veterinaria a portata di click.
        </p>
        <button className="bg-white uppercase px-4 py-2 rounded-sm font-semibold tracking-tighter cursor-pointer">
          Prenota Ora
        </button>
      </div>
    </section>
  );
};

export default LandingHeader;
