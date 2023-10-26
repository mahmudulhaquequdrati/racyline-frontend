import { useNavigate } from "react-router-dom";
import { primary_bg_color } from "../../../constant";

function RegistrationGoogleCalenderConnected() {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center items-center bg-[#FFF7EC] py-16 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg p-16 bg-white">
        <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
          Ora sei connesso con il tuo Calendario Google
        </h1>
        <p className="text-center text-[15px] text-[#00000099] pb-8">
          Il tuo profilo è stato configurato con successo. Ora attendi che un
          amministratore controlli la tua registrazione e la accetti per
          diventare parte del team di veterinari di Racyline.
        </p>
        <p className="text-center text-[15px] text-[#00000099] pb-8">
          Ti contatteremo via email per farti sapere dell’eventuale conferma.
        </p>

        <form action="" className="flex flex-col gap-y-4">
          <div>
            <button
              onClick={() => navigate("/vets/appointment")}
              className={`w-full rounded-lg py-3 px-4 outline-none  text-white ${primary_bg_color}`}
            >
              Concludi la registrazione
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default RegistrationGoogleCalenderConnected;
