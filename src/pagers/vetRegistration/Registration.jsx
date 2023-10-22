import React from "react";
import userIcon from "../../assets/ICONS/user.svg";

function Registration() {
  return (
    <section className="flex justify-center items-center bg-[#FFF7EC] py-16 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg p-16 bg-white">
        <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
          Completa la registrazione
        </h1>
        <p className="text-center text-[15px] text-[#00000099]">
          Concludi la registrazione per diventare membro di Racyline
        </p>

        <div className="flex gap-6 items-center py-[30px]">
          <div className="w-[105px] h-[105px] flex items-center gap-6 justify-center rounded-full bg-[#E5E7EC]">
            <img src={userIcon} alt="" className="w-[32px] h-[33px]" />
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <button className="border-[1px] border-black rounded-md py-3 px-8 text-[15px] font-medium">
              Carica la foto di profilo
            </button>
            <span className="text-black/[.40]">
              JPG or PNG. Max size of 5MB.
            </span>
          </div>
        </div>
        <form action="" className="flex flex-col gap-y-4">
          <div>
            <input
              type="text"
              placeholder="Name *"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Cognome *"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
            />
          </div>
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
              placeholder="Scegli che tipo di dottore sei *"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
            />
          </div>
          <hr className="outline-1 border[#ddd]" />
          <div>
            <input
              type="text"
              placeholder="Indirizzo del tuo ufficio veterinario *"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Email *"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Password *"
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

export default Registration;
