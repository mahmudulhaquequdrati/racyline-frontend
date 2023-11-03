/* eslint-disable no-unused-vars */
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Delete from "../../assets/ICONS/delete.svg";
import PlusIcon from "../../assets/ICONS/plusIcon.svg";
import {
  useCreateAvailabilitiesMutation,
  useGetAllAvailabilitiesQuery,
} from "../../features/availabilities/availabilitiesApi";

const Availabilities = () => {
  const [weakData, setWeakData] = useState([]);

  const { user } = useSelector((state) => state.auth);

  const { data, isLoading, isError, isSuccess } = useGetAllAvailabilitiesQuery(
    {
      userId: user?._id,
    },
    { skip: !user?._id }
  );

  // Redux mutation for sending data to server
  const [
    createAvailabilities,
    {
      data: createAvailabilitiesResponse,
      isLoading: creatingAvailabilities,
      isError: errorSavingAvailabilities,
      isSuccess: savedAvailabilities,
    },
  ] = useCreateAvailabilitiesMutation();

  const navigate = useNavigate();

  const addFields = (index) => {
    if (weakData[index]?.availabilities?.length !== 0) {
      setWeakData((prevWeakData) => {
        const updatedWeakData = [...prevWeakData];
        const lastAvailability =
          updatedWeakData[index].availabilities[
            updatedWeakData[index].availabilities.length - 1
          ];
        const newStartTime = new Date(lastAvailability.end_time);
        newStartTime.setMinutes(newStartTime.getMinutes() + 15);

        const newEndTime = new Date(newStartTime);
        newEndTime.setMinutes(newEndTime.getMinutes() + 30);

        const newField = {
          start_time: newStartTime,
          end_time: newEndTime,
        };

        updatedWeakData[index].availabilities.push(newField);
        return updatedWeakData;
      });
    } else {
      setWeakData((prevWeakData) => {
        let updatedWeakData = [...prevWeakData];
        const newfield = {
          start_time: setHours(setMinutes(new Date(), 0), 0),
          end_time: setHours(setMinutes(new Date(), 0), 0),
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
          start_time: setHours(setMinutes(new Date(), 0), 0),
          end_time: setHours(setMinutes(new Date(), 0), 0),
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
    if (weakData[elementIndex].availabilities?.length === 1) {
      if (key === "end_time") {
        if (
          moment(value).isAfter(
            moment(
              weakData[elementIndex].availabilities[availabilityIndex][
                "start_time"
              ]
            )
          )
        ) {
          setWeakData((prevWeakData) => {
            const updatedWeakData = [...prevWeakData];
            updatedWeakData[elementIndex].availabilities[availabilityIndex][
              key
            ] = value;
            return updatedWeakData;
          });
        } else {
          alert("End time cannot be less than start time");
        }
      } else {
        if (
          moment(value).isBefore(
            moment(
              weakData[elementIndex].availabilities[availabilityIndex][
                "end_time"
              ]
            )
          )
        ) {
          setWeakData((prevWeakData) => {
            const updatedWeakData = [...prevWeakData];
            updatedWeakData[elementIndex].availabilities[availabilityIndex][
              key
            ] = value;
            return updatedWeakData;
          });
        } else {
          alert("Start time cannot be grater than end time");
        }
      }
    } else {
      if (
        weakData[elementIndex].availabilities?.length ===
        availabilityIndex + 1
      ) {
        if (key === "end_time") {
          if (
            moment(value).isAfter(
              moment(
                weakData[elementIndex].availabilities[availabilityIndex - 1][
                  "end_time"
                ]
              )
            ) &&
            moment(value).isAfter(
              moment(
                weakData[elementIndex].availabilities[availabilityIndex][
                  "start_time"
                ]
              )
            )
          ) {
            setWeakData((prevWeakData) => {
              const updatedWeakData = [...prevWeakData];
              updatedWeakData[elementIndex].availabilities[availabilityIndex][
                key
              ] = value;
              return updatedWeakData;
            });
          } else {
            alert("End time cannot be less than start time");
          }
        } else {
          if (
            moment(value).isAfter(
              moment(
                weakData[elementIndex].availabilities[availabilityIndex - 1][
                  "end_time"
                ]
              )
            ) &&
            moment(value).isBefore(
              moment(
                weakData[elementIndex].availabilities[availabilityIndex][
                  "end_time"
                ]
              )
            )
          ) {
            setWeakData((prevWeakData) => {
              const updatedWeakData = [...prevWeakData];
              updatedWeakData[elementIndex].availabilities[availabilityIndex][
                key
              ] = value;
              return updatedWeakData;
            });
          } else {
            alert("Start time cannot be grater than end time");
          }
        }
      } else {
        alert("Previous time cannot be change");
      }
    }
  };

  const onSubmit = () => {
    const newData = {
      userId: user?._id,
      availabilities: weakData,
    };
    if (weakData?.length > 0) {
      // sending data through redux mutation
      createAvailabilities(newData);
    }
    // navigate("/registration-google-calender-connect");
  };

  useEffect(() => {
    if (data?.data?._id) {
      const loadedData = data?.data?.availabilities?.map((avil) => {
        return {
          ...avil,
          availabilities: avil?.availabilities?.map((times) => {
            const startTimeHours = new Date(`${times?.start_time}`).getHours();
            const startTimeMinutes = new Date(
              `${times?.start_time}`
            ).getMinutes();
            const endTimeHours = new Date(`${times?.end_time}`).getHours();
            const endTimeMinutes = new Date(`${times?.end_time}`).getMinutes();
            return {
              ...times,
              start_time: setHours(
                setMinutes(new Date(), startTimeMinutes),
                startTimeHours
              ),
              end_time: setHours(
                setMinutes(new Date(), endTimeMinutes),
                endTimeHours
              ),
            };
          }),
        };
      });
      setWeakData(loadedData);
    } else {
      const emptyWeekData = [
        {
          name: "Lun",
          availabilities: [],
          available: false,
        },
        {
          name: "Mar",
          availabilities: [],
          available: false,
        },
        {
          name: "Mer",
          availabilities: [],
          available: false,
        },
        {
          name: "Gio",
          availabilities: [],
          available: false,
        },
        {
          name: "Ven",
          availabilities: [],
          available: false,
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
      ];
      setWeakData(emptyWeekData);
    }
  }, [data?.data?._id]);

  return (
    <section className="flex bg-[#FFF7EC] py-16 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[1140px] w-full mx-auto">
        <div className="max-w-[638px] w-full  rounded-lg p-16 bg-white">
          <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
            Inserisci le tue disponibilità
          </h1>
          <p className="text-center text-[15px] text-[#00000099] pb-8">
            Aggiungi tutti i tuoi orari lavorativi per ogni giorno della
            settimana per concludere la registrazione
          </p>
          <div className="flex flex-col gap-y-8">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
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
                            onChange={(e) =>
                              onAvailableChange(e.target.checked, i)
                            }
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
              </>
            )}
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
      </div>
    </section>
  );
};

export default Availabilities;
