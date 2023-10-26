import { useState } from "react";
import Delete from "../../assets/ICONS/delete.svg";
import PlusIcon from "../../assets/ICONS/plusIcon.svg";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { primary_bg_color } from "../../../constant";
const Availabilities = () => {
  const navigate = useNavigate();
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
  });

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues({
      ...checkboxValues,
      [name]: checked,
    });
  };

  // Function to collect information
  const collectInformation = () => {
    const selectedCheckboxes = Object.keys(checkboxValues).filter(
      (key) => checkboxValues[key]
    );

    // Now you can do something with the selected checkboxes
    console.log("Selected checkboxes:", selectedCheckboxes);
  };
  const [startDate, setStartDate] = useState(new Date());
  return (
    <section className="p-12 lg:p-16 flex justify-start items-center bg-[#FFF7EC] py-16 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  ">
        <h1 className="text-[32px] font-bold leading-10 mb-6">
          Le mie disponibilità
        </h1>
        <div className="rounded-lg p-8 md:p-12 lg:p-16 bg-white">
          <div className="flex flex-col gap-y-8">
            <div className="flex gap-6 justify-between items-center border-b border-b-[#E5E7EC] pb-6">
              <div className="flex items-center gap-6">
                <div className="mr-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    name="checkbox1"
                    checked={checkboxValues.checkbox1}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="lun">Lun</label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[85px]">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption=""
                      dateFormat="HH:mm"
                      timeFormat="HH:mm"
                      className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC] "
                    />
                  </div>
                  <hr className="w-[10px] border-black" />
                  <div className="w-[85px]">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption=""
                      dateFormat="HH:mm"
                      timeFormat="HH:mm"
                      className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC] "
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

            <div className="flex gap-6 justify-between items-center border-b border-b-[#E5E7EC] pb-6">
              <div className="flex items-center gap-6">
                <div className="mr-2">
                  <input
                    type="checkbox"
                    // className="checkbox"
                    className="mr-2"
                    name="checkbox2"
                    checked={checkboxValues.checkbox2}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="lun">Mar</label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[85px]">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption=""
                      dateFormat="HH:mm"
                      timeFormat="HH:mm"
                      className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC] "
                    />
                  </div>
                  <hr className="w-[10px] border-black" />
                  <div className="w-[85px]">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption=""
                      dateFormat="HH:mm"
                      timeFormat="HH:mm"
                      className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC] "
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

            <div className="flex gap-6 justify-between items-center border-b border-b-[#E5E7EC] pb-6">
              <div className="flex items-center gap-6">
                <div className="mr-2">
                  <input
                    type="checkbox"
                    // className="checkbox"
                    className="mr-2"
                    name="checkbox3"
                    checked={checkboxValues.checkbox3}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="lun">Mer</label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[85px]">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption=""
                      dateFormat="HH:mm"
                      timeFormat="HH:mm"
                      className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC] "
                    />
                  </div>
                  <hr className="w-[10px] border-black" />
                  <div className="w-[85px]">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption=""
                      dateFormat="HH:mm"
                      timeFormat="HH:mm"
                      className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC] "
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

            <div className="flex gap-6 justify-between items-center border-b border-b-[#E5E7EC] pb-6">
              <div className="flex items-center gap-6">
                <div className="mr-2">
                  <input
                    type="checkbox"
                    // className="checkbox"
                    className="mr-2"
                    name="checkbox4"
                    checked={checkboxValues.checkbox4}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="lun">Gio</label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[85px]">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption=""
                      dateFormat="HH:mm"
                      timeFormat="HH:mm"
                      className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC] "
                    />
                  </div>
                  <hr className="w-[10px] border-black" />
                  <div className="w-[85px]">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption=""
                      dateFormat="HH:mm"
                      timeFormat="HH:mm"
                      className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC] "
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

            <div className="flex gap-6 justify-between items-center border-b border-b-[#E5E7EC] pb-6">
              <div className="flex items-center gap-6">
                <div className="mr-2">
                  <input
                    type="checkbox"
                    // className="checkbox"
                    className="mr-2"
                    name="checkbox5"
                    checked={checkboxValues.checkbox5}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="lun">Ven</label>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[85px]">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption=""
                      dateFormat="HH:mm"
                      timeFormat="HH:mm"
                      className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC] "
                    />
                  </div>
                  <hr className="w-[10px] border-black" />
                  <div className="w-[85px]">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption=""
                      dateFormat="HH:mm"
                      timeFormat="HH:mm"
                      className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC] "
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
            <div
              className="flex gap-6 justify-between items-center border-b border-b-[#E5E7EC] pb-6
"
            >
              <div className="flex items-center gap-6">
                <div className="mr-2">
                  <input
                    type="checkbox"
                    // className="checkbox"
                    className="mr-2"
                    name="checkbox5"
                    checked={checkboxValues.checkbox5}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="lun">Sab</label>
                </div>
                <div className="text-gray-700 text-sm">Non disponibile</div>
              </div>
              <div>
                <img src={PlusIcon} alt="" />
              </div>
            </div>
            <div
              className="flex gap-6 justify-between items-center border-b border-b-[#E5E7EC] pb-6
"
            >
              <div className="flex items-center gap-6">
                <div className="mr-2">
                  <input
                    type="checkbox"
                    // className="checkbox"
                    className="mr-2"
                    name="checkbox5"
                    checked={checkboxValues.checkbox5}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="lun">Dom</label>
                </div>
                <div className="text-gray-700 text-sm">Non disponibile</div>
              </div>
              <div>
                <img src={PlusIcon} alt="" />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              // onClick={collectInformation}
              onClick={() => navigate("/vets/appointment")}
              className={`w-full rounded-lg py-3 px-4 outline-none  text-white ${primary_bg_color}`}
            >
              Salva
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Availabilities;
