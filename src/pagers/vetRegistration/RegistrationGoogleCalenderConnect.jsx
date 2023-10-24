import { useNavigate } from "react-router-dom";

function RegistrationGoogleCalenderConnect() {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center items-center bg-[#FFF7EC] py-16 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg p-16 bg-white">
        <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
          Sincronizza i tuoi appuntamenti con il tuo Calendario Google
        </h1>
        <p className="text-center text-[15px] text-[#00000099] pb-8">
          Se vuoi fai puoi connettere il tuo calendario Google e sincronizzare
          tutti gli appuntamenti dei tuoi clienti sul tuo calendario.
        </p>

        <form action="" className="flex flex-col gap-y-4">
          <div>
            <button
              onClick={() =>
                navigate("/registration-google-calender-connected")
              }
              className="w-full rounded-lg py-3 px-4 outline-none bg-[#E8971F] text-white"
            >
              Connetti a Google Calendar
            </button>
          </div>
          <div>
            <button
              onClick={() => navigate("/vets/appointment")}
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
            >
              Concludi la registrazione
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default RegistrationGoogleCalenderConnect;
