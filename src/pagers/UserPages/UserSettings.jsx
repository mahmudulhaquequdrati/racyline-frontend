import { useState } from "react";
import GoogleIcon from "../../assets/ICONS/google.svg";

const people = [
  {
    name: "Veterinary Doctor",
  },
];
const type = [
  {
    name: "Dog",
  },
  {
    name: "Cat",
  },
  {
    name: "Parrot",
  },
];
const UserSettings = () => {
  const [selected, setSelected] = useState(people[0]);
  const [selected2, setSelected2] = useState(type[0]);
  return (
    <div className="p-12 lg:p-20 min-h-[100vh] bg-[#FFF7EC]">
      <div className="max-w-[1150px] w-full mx-auto">
        <div className="max-w-[570px] w-full">
          <div className="w-full">
            <h1 className="text-[32px] font-bold">Impostazioni dell’account</h1>
            <p className="font-bold mt-5 mb-3">Anagrafica</p>
            <div className="flex flex-col gap-[14px]">
              <div className="w-full">
                <input
                  type="text"
                  className="rounded-lg py-2 px-4 outline-none border-[1px] border-none shadow w-full"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="rounded-lg py-2 px-4 outline-none border-[1px] border-none shadow w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-5">
            <div className="w-full mt-5">
              <p className="font-bold mb-3">Contatto</p>
              <div className="w-full flex flex-col gap-[14px]">
                <div className="w-full">
                  <input
                    type="number"
                    placeholder="3330123456"
                    className="rounded-lg py-2 px-4 outline-none border-[1px] border-none shadow w-full"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="mariorossi@gmail.com"
                    className="rounded-lg py-2 px-4 outline-none border-[1px] border-none shadow w-full"
                  />
                </div>
              </div>
              <p className="flex items-center mt-4 mb-4 text-sm w-full">
                <img src={GoogleIcon} alt="" />
                <span className="ml-2">
                  Hai effettuato l’accesso con il tuo account Google
                </span>
              </p>
            </div>
          </div>

          <div className="w-full mt-12">
            <button
              className={`w-full rounded-lg py-2 px-4 outline-none  text-white bg-primary`}
            >
              Salva
            </button>
          </div>
          <div className="w-full mt-3">
            <button
              className={`w-full rounded-lg py-2 px-4  outline-none border-[1px] text-primary border-primary `}
            >
              Elimina il mio account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
