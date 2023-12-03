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
  notifyError,
  notifySuccess,
} from "../../components/common/Toast/Toast";
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

        updatedWeakData[index]["availabilities"].push(newField);
        return updatedWeakData;
      });
    } else {
      setWeakData((prevWeakData) => {
        let updatedWeakData = [...prevWeakData];
        const newfield = {
          start_time: setHours(setMinutes(new Date(), 0), 9),
          end_time: setHours(setMinutes(new Date(), 0), 17),
        };
        updatedWeakData[index]["availabilities"] = [newfield];
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
        updatedWeakData[index]["availabilities"] = [];
        updatedWeakData[index]["available"] = false;
        return updatedWeakData;
      });
    } else {
      setWeakData((prevWeakData) => {
        let updatedWeakData = [...prevWeakData];
        const newfield = {
          start_time: setHours(setMinutes(new Date(), 0), 9),
          end_time: setHours(setMinutes(new Date(), 0), 17),
        };
        updatedWeakData[index]["availabilities"] = [newfield];
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
          notifyError("End time cannot be less than start time");
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
          notifyError("Start time cannot be grater than end time");
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
            notifyError("End time cannot be less than start time");
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
            notifyError("Start time cannot be grater than end time");
          }
        }
      } else {
        notifyError("Previous time cannot be change");
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
      createAvailabilities(newData)
        .then((res) => {
          notifySuccess("Availabilities Saved!");
        })
        .catch((err) => {
          notifyError("Error occurd while Saving Availabilities!");
        });
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
      // dispatch(setAllWeakAvailabilitiesData(loadedData));
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
      // dispatch(setAllWeakAvailabilitiesData(emptyWeekData));
    }
  }, [data?.data?._id]);

  return (
    <section className="flex bg-primary py-16 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[1140px] w-full mx-auto py-4 px-4 md:py-8 md:px-0">
        <div className="max-w-[638px] w-full rounded-lg p-6 md:p-8 lg:py-6 bg-white">
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
                  <div key={i} className="border-b border-b-[#E5E7EC] pb-6">
                    <div className="flex gap-6 justify-between  ">
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
                        <div className="hidden md:block">
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
                    <div className="block md:hidden">
                      {res.availabilities?.length === 0 ? (
                        <div className="text-gray-700 text-sm mt-3">
                          Non disponibile
                        </div>
                      ) : (
                        <div>
                          {res.availabilities?.map((avl, avlI) => (
                            <div
                              key={avlI}
                              className={`flex items-center justify-between ${
                                avlI !== 0 && "mt-3"
                              }`}
                            >
                              <div className={`flex items-center gap-[10px] `}>
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
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="mt-8">
            {isLoading ? (
              <div className="flex items-center justify-center w-full rounded-lg py-3 px-4 outline-none  text-white bg-secondary">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 text-gray-100 animate-spin fill-secondary"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span>Loading...</span>
              </div>
            ) : (
              <button
                onClick={onSubmit}
                className={`w-full rounded-lg py-3 px-4 outline-none  text-white bg-secondary`}
              >
                Salva
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Availabilities;
