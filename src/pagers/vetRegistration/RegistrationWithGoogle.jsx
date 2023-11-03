import { useNavigate } from "react-router-dom";

function RegistrationWithGoogle() {
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const request = await fetch(
        "http://localhost:5000/api/v1/handleGoogleDataUpdate",
        {
          method: "patch",
          // body:
        }
      );
      const response = await request.json();
      window.location.href = response.url;
    } catch (error) {
      console.log("App.js 12 | error", error);
      throw new Error("Issue with Login", error.message);
    }

    // navigate("/vets/appointment");
  };
  return (
    <section className="flex justify-center items-center bg-[#FFF7EC] py-16 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg p-16 bg-white">
        <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
          Completa la registrazione
        </h1>
        <p className="text-center text-[15px] text-[#00000099] pb-8">
          Concludi la registrazione per diventare membro di Racyline
        </p>

        <form onSubmit={handleForm} className="flex flex-col gap-y-4">
          <div>
            <input
              type="text"
              placeholder="Scegli che tipo di dottore sei *"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Scegli gli animali che curi *"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Indirizzo del tuo ufficio veterinario *"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
            />
          </div>

          <div>
            <button
              type="submit"
              className={`w-full rounded-lg py-3 px-4 outline-none  text-white bg-primary`}
            >
              Avanti
            </button>
          </div>
          <div>
            <p className="text-center text-[15px] text-black/[.40]">
              * I campi sono obbligatori
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default RegistrationWithGoogle;
