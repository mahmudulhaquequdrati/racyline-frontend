import Delete from "../../assets/ICONS/delete.svg";
import PlusIcon from "../../assets/ICONS/plusIcon.svg";
import { useNavigate } from "react-router-dom";

const Availabilities = () => {
  const navigate = useNavigate();
  return (
    <section className="p-20 flex justify-start items-center bg-[#FFF7EC] py-16 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg p-16 bg-white">
        <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
          Le mie disponibilità
        </h1>
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
          <button
            onClick={() => navigate("/registration-google-calender-connect")}
            className="w-full rounded-lg py-3 px-4 outline-none bg-[#E8971F] text-white"
          >
            Salva
          </button>
        </div>
      </div>
    </section>
  );
};

export default Availabilities;
