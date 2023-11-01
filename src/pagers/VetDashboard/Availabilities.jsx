/* eslint-disable no-unused-vars */
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Delete from "../../assets/ICONS/delete.svg";
import PlusIcon from "../../assets/ICONS/plusIcon.svg";

const Availabilities = () => {
  const [weakData, setWeakData] = useState([
    {
      name: "Lun",
      availabilities: [
        {
          start_time: new Date(),
          end_time: new Date(),
        },
      ],
      available: true,
    },
    {
      name: "Mar",
      availabilities: [
        {
          start_time: new Date(),
          end_time: new Date(),
        },
      ],
      available: true,
    },
    {
      name: "Mer",
      availabilities: [
        {
          start_time: new Date(),
          end_time: new Date(),
        },
      ],
      available: true,
    },
    {
      name: "Gio",
      availabilities: [
        {
          start_time: new Date(),
          end_time: new Date(),
        },
      ],
      available: true,
    },
    {
      name: "Ven",
      availabilities: [
        {
          start_time: new Date(),
          end_time: new Date(),
        },
      ],
      available: true,
    },
    {
      name: "Sab",
      availabilities: [],
      available: false,
    },
    {
      name: "Dom",
      availabilities: [],
      available: false,
    },
  ]);

  const navigate = useNavigate();

  const addFields = (index) => {
    if (weakData[index]?.availabilities?.length !== 0) {
      setWeakData((prevWeakData) => {
        const updatedWeakData = [...prevWeakData];
        const newfield = {
          start_time: new Date(),
          end_time: new Date(),
        };
        updatedWeakData[index].availabilities.push(newfield);
        return updatedWeakData;
      });
    } else {
      setWeakData((prevWeakData) => {
        let updatedWeakData = [...prevWeakData];
        const newfield = {
          start_time: new Date(),
          end_time: new Date(),
        };
        updatedWeakData[index].availabilities = [newfield];
        updatedWeakData[index]["available"] = true;
        return updatedWeakData;
      });
    }
  };

  const deleteFields = (elementIndex, availabilityIndex) => {
    if (weakData[elementIndex]?.availabilities?.length === 1) {
      setWeakData((prevWeakData) => {
        const updatedWeakData = [...prevWeakData];
        updatedWeakData[elementIndex].availabilities.splice(
          availabilityIndex,
          1
        );
        updatedWeakData[elementIndex]["available"] = false;
        return updatedWeakData;
      });
    } else {
      setWeakData((prevWeakData) => {
        const updatedWeakData = [...prevWeakData];
        updatedWeakData[elementIndex].availabilities.splice(
          availabilityIndex,
          1
        );
        return updatedWeakData;
      });
    }
  };

  // adding or removing appointment
  const onAvailableChange = (value, index) => {
    if (weakData[index]?.available) {
      setWeakData((prevWeakData) => {
        const updatedWeakData = [...prevWeakData];
        updatedWeakData[index].availabilities = [];
        updatedWeakData[index]["available"] = false;
        return updatedWeakData;
      });
    } else {
      setWeakData((prevWeakData) => {
        let updatedWeakData = [...prevWeakData];
        const newfield = {
          start_time: new Date(),
          end_time: new Date(),
        };
        updatedWeakData[index].availabilities = [newfield];
        updatedWeakData[index]["available"] = true;
        return updatedWeakData;
      });
    }
  };

  const handleAvailabilityChange = (
    elementIndex,
    availabilityIndex,
    key,
    value
  ) => {
    setWeakData((prevWeakData) => {
      const updatedWeakData = [...prevWeakData];
      updatedWeakData[elementIndex].availabilities[availabilityIndex][key] =
        value;

      return updatedWeakData;
    });
  };

  const onSubmit = () => {
    console.log(weakData);
    navigate("/registration-google-calender-connect");
  };

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
          {weakData?.map((res, i) => (
            <div
              key={i}
              className="flex gap-6 justify-between  border-b border-b-[#E5E7EC] pb-6"
            >
              <div className="flex items-start gap-6">
                <div className="mr-2 flex items-center mt-3">
                  <label className="option ">
                    <span> {res.name}</span>
                    <input
                      type="checkbox"
                      className="mr-2"
                      name="checkbox1"
                      checked={res.available}
                      onChange={(e) => onAvailableChange(e.target.checked, i)}
                    />
                    <span className="customcheckbox"></span>
                  </label>
                </div>
                {res.availabilities?.length === 0 ? (
                  <div className="text-gray-700 text-sm mt-3">
                    Non disponibile
                  </div>
                ) : (
                  <div>
                    {res.availabilities?.map((avl, avlI) => (
                      <div
                        key={avlI}
                        className={`flex items-center gap-[10px] ${
                          avlI !== 0 && "mt-3"
                        }`}
                      >
                        <div className="w-[85px]">
                          <DatePicker
                            selected={avl?.start_time}
                            onChange={(date) =>
                              handleAvailabilityChange(
                                i,
                                avlI,
                                "start_time",
                                date
                              )
                            }
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
                            selected={avl?.end_time}
                            onChange={(date) =>
                              handleAvailabilityChange(
                                i,
                                avlI,
                                "end_time",
                                date
                              )
                            }
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption=""
                            dateFormat="HH:mm"
                            timeFormat="HH:mm"
                            className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC] "
                          />
                        </div>
                        <div>
                          <img
                            className="cursor-pointer"
                            onClick={() => deleteFields(i, avlI)}
                            src={Delete}
                            alt=""
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-3">
                <img
                  className="cursor-pointer"
                  onClick={() => addFields(i)}
                  src={PlusIcon}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button
            onClick={onSubmit}
            className={`w-full rounded-lg py-3 px-4 outline-none  text-white bg-primary`}
          >
            Avanti
          </button>
        </div>
      </div>
    </section>
  );
};

export default Availabilities;
