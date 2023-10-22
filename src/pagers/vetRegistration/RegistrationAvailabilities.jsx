import React from "react";
import Delete from "../../assets/ICONS/delete.svg";
import PlusIcon from "../../assets/ICONS/plusIcon.svg";

const RegistrationAvailabilities = () => {
  return (
    <section className="flex justify-center items-center bg-[#FFF7EC] py-16 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg p-16 bg-white">
        <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
          Inserisci le tue disponibilità
        </h1>
        <p className="text-center text-[15px] text-[#00000099] pb-8">
          Aggiungi tutti i tuoi orari lavorativi per ogni giorno della settimana
          per concludere la registrazione
        </p>
        <div className="flex flex-col gap-y-8">
          <div className="flex gap-6 justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="mr-2">
                <input type="checkbox" className="checkbox" />
                <label htmlFor="lun">Lun</label>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[85px]">
                  <input
                    type="text"
                    value={"4:30"}
                    className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
                  />
                </div>
                <hr className="w-[10px] border-black" />
                <div className="w-[85px]">
                  <input
                    type="text"
                    value={"3:30"}
                    className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
                  />
                </div>
              </div>
              <div>
                <img src={Delete} alt="" />
              </div>
            </div>
            <div>
              <img src={PlusIcon} alt="" />
            </div>
          </div>

          <div className="flex gap-6 justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="mr-2">
                <input type="checkbox" className="checkbox" />
                <label htmlFor="lun">Lun</label>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[85px]">
                  <input
                    type="text"
                    value={"4:30"}
                    className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
                  />
                </div>
                <hr className="w-[10px] border-black" />
                <div className="w-[85px]">
                  <input
                    type="text"
                    value={"3:30"}
                    className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
                  />
                </div>
              </div>
              <div>
                <img src={Delete} alt="" />
              </div>
            </div>
            <div>
              <img src={PlusIcon} alt="" />
            </div>
          </div>

          <div className="flex gap-6 justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="mr-2">
                <input type="checkbox" className="checkbox" />
                <label htmlFor="lun">Lun</label>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[85px]">
                  <input
                    type="text"
                    value={"4:30"}
                    className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
                  />
                </div>
                <hr className="w-[10px] border-black" />
                <div className="w-[85px]">
                  <input
                    type="text"
                    value={"3:30"}
                    className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
                  />
                </div>
              </div>
              <div>
                <img src={Delete} alt="" />
              </div>
            </div>
            <div>
              <img src={PlusIcon} alt="" />
            </div>
          </div>

          <div className="flex gap-6 justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="mr-2">
                <input type="checkbox" className="checkbox" />
                <label htmlFor="lun">Lun</label>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[85px]">
                  <input
                    type="text"
                    value={"4:30"}
                    className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
                  />
                </div>
                <hr className="w-[10px] border-black" />
                <div className="w-[85px]">
                  <input
                    type="text"
                    value={"3:30"}
                    className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
                  />
                </div>
              </div>
              <div>
                <img src={Delete} alt="" />
              </div>
            </div>
            <div>
              <img src={PlusIcon} alt="" />
            </div>
          </div>

          <div className="flex gap-6 justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="mr-2">
                <input type="checkbox" className="checkbox" />
                <label htmlFor="lun">Lun</label>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[85px]">
                  <input
                    type="text"
                    value={"4:30"}
                    className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
                  />
                </div>
                <hr className="w-[10px] border-black" />
                <div className="w-[85px]">
                  <input
                    type="text"
                    value={"3:30"}
                    className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
                  />
                </div>
              </div>
              <div>
                <img src={Delete} alt="" />
              </div>
            </div>
            <div>
              <img src={PlusIcon} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button className="w-full rounded-lg py-3 px-4 outline-none bg-[#E8971F] text-white">
            Avanti
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegistrationAvailabilities;
