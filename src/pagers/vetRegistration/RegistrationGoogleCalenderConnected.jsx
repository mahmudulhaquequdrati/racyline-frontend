import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationGoogleCalenderConnected() {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);
  return (
    <>
      {!completed ? (
        <section className="flex justify-center items-center bg-primary py-16 border-[1px] border-[#EAEAEB]">
          <div className="max-w-[638px] w-full  rounded-lg p-16 bg-white">
            <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
              Ora sei connesso con il tuo Calendario Google
            </h1>
            <p className="text-center text-[15px] text-[#00000099] pb-8">
              Tutti gli appuntamenti ora verranno sincronizzati sul tuo
              Calendario Google così non te ne perderai neanche uno.
            </p>
            {/* <p className="text-center text-[15px] text-[#00000099] pb-8">
          Ti contatteremo via email per farti sapere dell’eventuale conferma.
        </p> */}

            <div className="flex flex-col gap-y-4">
              <button
                onClick={() => setCompleted(true)}
                className={`w-full rounded-lg py-3 px-4 outline-none  text-white bg-secondary`}
              >
                Concludi la registrazione
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="flex justify-center items-center bg-primary py-16 border-[1px] border-[#EAEAEB]">
          <div className="max-w-[638px] w-full  rounded-lg p-16 bg-white">
            <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
              Registrazione completata!
            </h1>
            <p className="text-center text-[15px] text-[#00000099] pb-8">
              Il tuo profilo è stato configurato con successo. Ora attendi che
              un amministratore controlli la tua registrazione e la accetti per
              diventare parte del team di veterinari di Racyline.
            </p>
            <p className="text-center text-[15px] text-[#00000099] pb-8">
              Ti contatteremo via email per farti sapere dell’eventuale
              conferma.
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default RegistrationGoogleCalenderConnected;
