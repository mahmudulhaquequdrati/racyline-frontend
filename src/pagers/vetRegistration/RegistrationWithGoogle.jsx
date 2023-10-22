import React from "react";

function RegistrationWithGoogle() {
  return (
    <section className="flex justify-center items-center bg-[#FFF7EC] py-16 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg p-16 bg-white">
        <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
          Completa la registrazione
        </h1>
        <p className="text-center text-[15px] text-[#00000099] pb-8">
          Concludi la registrazione per diventare membro di Racyline
        </p>

        <form action="" className="flex flex-col gap-y-4">
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
            <button className="w-full rounded-lg py-3 px-4 outline-none bg-[#E8971F] text-white">
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
