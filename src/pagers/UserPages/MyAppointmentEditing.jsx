import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import vetUser from "../../../public/vetListImage/vetUser.jpeg";
import {
  notifyError,
  notifySuccess,
} from "../../components/common/Toast/Toast";
import {
  useEditAppointmentMutation,
  useGetAllAppointmentsQuery,
  useGetAppointmentDetailsQuery,
} from "../../features/appointment/appointmentApi";
import VetCalender from "../vetLists/Calender";
import moment from "moment";
import { useSelector } from "react-redux";

const MyAppointmentEditing = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const {
    data: allAppointmentList,
    isLoading: allAppointmentListLoading,
    isError: allAppointmentListError,
  } = useGetAllAppointmentsQuery(
    {
      email: user?.email,
    },
    { skip: !user?.email }
  );

  const [appointmentDate, setAppointmentDate] = useState({
    time: null,
    date: new Date(),
  });

  const { id } = useParams();
  const {
    data: appointmentData,
    isLoading: appointmentLoading,
    isError,
    refetch,
  } = useGetAppointmentDetailsQuery(id);
  const { data, data: { vetInfo, _id } = {} } = appointmentData || {};

  useEffect(() => {
    if (data) {
      setAppointmentDate({
        date: data?.appointmentDate,
        time: data?.appointmentTime,
      });
    }
  }, [data]);
  const [
    editAppointment,
    {
      data: editAppointmentResponse,
      isError: editAppointmentError,
      isLoading: editAppointmentLoading,
    },
  ] = useEditAppointmentMutation();
  const time = [
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
  ];

  const handleSubmitAppointmentData = (id) => {
    const newData = {
      appointmentDate: appointmentDate.date,
      appointmentTime: appointmentDate.time,
    };
    editAppointment({ data: newData, id });
  };

  useEffect(() => {
    if (!editAppointmentError && editAppointmentResponse?.data?._id) {
      notifySuccess("Appointment updated!");
      refetch();
      navigate("/user/my-appointment");
      return;
    }
    if (!editAppointmentLoading && editAppointmentError) {
      notifyError("Error occurred while updating appointment");
      return;
    }
  }, [editAppointmentError, editAppointmentLoading, editAppointmentResponse]);

  let content;
  let sortedArray = [];
  if (
    !allAppointmentListLoading &&
    !allAppointmentListError &&
    allAppointmentList?.data?.length > 0
  ) {
    sortedArray = [...allAppointmentList?.data]?.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    content = (
      <>
        <p className="text-[18px] leading-[24px] font-semibold mb-3">Passati</p>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
          {sortedArray?.length &&
            sortedArray
              ?.filter((fill) =>
                moment(fill?.appointmentDate).isBefore(moment(new Date()))
              )
              ?.map((appointment, i) => {
                const { _id, vetInfo } = appointment;
                let timeHour = appointment?.appointmentTime?.split(":")[0];
                let timeMin = appointment?.appointmentTime
                  ?.split(":")[1]
                  ?.split(" ")[0];
                return (
                  <div
                    key={i}
                    className="max-w-[550px] w-full flex flex-col gap-8 rounded bg-white p-6 opacity-60"
                    style={{
                      boxShadow: "0px 1px 3px 0px rgba(232, 151, 31, 0.15)",
                    }}
                  >
                    <p className="text-[15px] font-normal leading-6">
                      Stai prenotando un appuntamento per le{" "}
                      {appointment?.appointmentTime?.includes("PM")
                        ? `${12 + Number(timeHour) + `:` + timeMin}`
                        : timeHour < 10
                        ? `0${timeHour + `:` + timeMin}`
                        : `${timeHour + `:` + timeMin}`}{" "}
                      di Martedì{" "}
                      {moment(appointment?.appointmentDate).format(
                        "DD MMMM YYYY"
                      )}{" "}
                      con il/la Dottore/Dottoressa
                    </p>
                    <div className="flex gap-6">
                      <div className="w-[100px] h-[100px]">
                        <img
                          src={vetInfo?.profile_image_url}
                          className="w-full h-full rounded-full"
                          alt="vetUser"
                        />
                      </div>
                      <div>
                        <h1 className="text-[18px] leading-[22px] font-semibold mb-2">
                          {`${vetInfo?.first_name} ${vetInfo?.last_name}`}
                        </h1>
                        <p className="text-[14px] leading-5 font-medium mb-[10px]">
                          {vetInfo?.doctor_type1}
                        </p>
                        <p className="flex items-center gap-[6px] text-[#666666] text-[13px] font-normal leading-[22px]">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path
                                d="M8.91161 15.7634L9 15.8518L9.08839 15.7634L12.8009 12.0509L12.7125 11.9625L12.8009 12.0509C13.5525 11.2992 14.0644 10.3414 14.2718 9.2988C14.4791 8.25616 14.3726 7.17546 13.9658 6.19334C13.559 5.21122 12.87 4.37179 11.9861 3.7812C11.1022 3.19061 10.0631 2.87539 9 2.87539C7.93695 2.87539 6.89777 3.19061 6.01387 3.7812C5.12997 4.37179 4.44104 5.21122 4.0342 6.19334C3.62737 7.17546 3.52089 8.25616 3.72824 9.2988C3.93559 10.3414 4.44746 11.2992 5.19911 12.0509L5.2875 11.9625L5.19911 12.0509L8.91161 15.7634ZM9 17.6192L4.31539 12.9346C3.38888 12.0081 2.75792 10.8276 2.50229 9.54251C2.24667 8.25739 2.37788 6.92533 2.87931 5.71477C3.38074 4.50422 4.22988 3.46954 5.31936 2.74158C6.40883 2.01362 7.6897 1.62507 9 1.62507C10.3103 1.62507 11.5912 2.01362 12.6806 2.74158C13.7701 3.46954 14.6193 4.50422 15.1207 5.71477C15.6221 6.92533 15.7533 8.25739 15.4977 9.54251C15.2421 10.8276 14.6111 12.0081 13.6846 12.9346L9 17.6192ZM9 9.87501C9.43098 9.87501 9.8443 9.7038 10.1491 9.39906C10.4538 9.09431 10.625 8.68099 10.625 8.25001C10.625 7.81903 10.4538 7.40571 10.1491 7.10096C9.8443 6.79622 9.43098 6.62501 9 6.62501C8.56903 6.62501 8.1557 6.79622 7.85095 7.10096C7.54621 7.40571 7.375 7.81903 7.375 8.25001C7.375 8.68099 7.54621 9.09431 7.85095 9.39906C8.1557 9.7038 8.56903 9.87501 9 9.87501ZM9 11.125C8.23751 11.125 7.50624 10.8221 6.96707 10.2829C6.4279 9.74378 6.125 9.01251 6.125 8.25001C6.125 7.48751 6.4279 6.75624 6.96707 6.21708C7.50624 5.67791 8.23751 5.37501 9 5.37501C9.7625 5.37501 10.4938 5.67791 11.0329 6.21708C11.5721 6.75624 11.875 7.48751 11.875 8.25001C11.875 9.01251 11.5721 9.74378 11.0329 10.2829C10.4938 10.8221 9.7625 11.125 9 11.125Z"
                                fill="black"
                                fillOpacity="0.6"
                                stroke="white"
                                strokeWidth="0.25"
                              />
                            </svg>
                          </span>
                          <span>{vetInfo?.veterinary_address}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </>
    );
  }

  // console.log(appointmentDate);
  let timeHour = appointmentDate?.time?.split(":")[0];
  let timeMin = appointmentDate?.time?.split(":")[1]?.split(" ")[0];

  // console.log(appointmentData?.data?.vetInfo?.appointments);

  const current_day = moment(appointmentDate.date).locale("it").format("ddd");
  const timeSlots = [];
  let timeSlots2 = [];
  const current_day_data =
    appointmentData?.data?.vetInfo?.availability?.availabilities?.filter(
      (t) => t?.name == current_day
    );
  const current_appointment_data =
    appointmentData?.data?.vetInfo?.appointments?.filter((d) => {
      return moment(d?.appointmentDate).isSame(moment(appointmentDate.date));
    });
  if (current_appointment_data && current_appointment_data?.length > 0) {
    timeSlots2 = current_appointment_data?.map((item) => item.appointmentTime);
  }
  // console.log(timeSlots2);
  current_day_data?.map((timeData, i) => {
    // Iterate through each time interval
    timeData?.availabilities?.forEach((interval) => {
      const startTime = moment(interval.start_time);
      const endTime = moment(interval.end_time);

      // Generate time slots at 30-minute intervals within the interval
      while (startTime.isSameOrBefore(endTime)) {
        timeSlots.push(startTime.format("HH:mm"));
        startTime.add(15, "minutes");
      }
    });
  });

  console.log(appointmentData);

  return (
    <div className="w-full bg-primary pt-[60px] p-4 md:p-8 pb-[80px]">
      <div className="max-w-[1150px] w-full mx-auto">
        <h1 className="text-[32px] leading-[40px] font-bold mb-18 md:mb-[36px]">
          I miei appuntamenti
        </h1>
        <p className="text-[18px] leading-[24px] font-semibold mb-3">
          I prossimi appuntamenti
        </p>
        <div
          className="max-w-[550px] w-full flex flex-col gap-8 rounded bg-white p-6"
          style={{ boxShadow: "0px 1px 3px 0px rgba(232, 151, 31, 0.15)" }}
        >
          <p className="text-[15px] font-normal leading-6">
            Stai prenotando un appuntamento per le{" "}
            {appointmentDate?.time?.includes("PM")
              ? `${12 + Number(timeHour) + `:` + timeMin}`
              : timeHour < 10
              ? `${timeHour + `:` + timeMin}`
              : `${timeHour + `:` + timeMin}`}{" "}
            di Martedì {moment(appointmentDate?.date).format("DD MMMM YYYY")}{" "}
            con il/la Dottore/Dottoressa
          </p>
          <div className="flex gap-6">
            <div className="w-[100px] h-[100px]">
              <img
                src={vetInfo?.profile_image_url}
                className="w-full h-full rounded-full object-cover"
                alt="vetUser"
              />
            </div>
            <div>
              <h1 className="text-[18px] leading-[22px] font-semibold mb-2">
                {vetInfo?.first_name + " " + vetInfo?.last_name}
              </h1>
              <p className="text-[14px] leading-5 font-medium mb-[10px]">
                {vetInfo?.doctor_type1}
              </p>
              <p className="flex items-center gap-[6px] text-[#666666] text-[13px] font-normal leading-[22px]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M8.91161 15.7634L9 15.8518L9.08839 15.7634L12.8009 12.0509L12.7125 11.9625L12.8009 12.0509C13.5525 11.2992 14.0644 10.3414 14.2718 9.2988C14.4791 8.25616 14.3726 7.17546 13.9658 6.19334C13.559 5.21122 12.87 4.37179 11.9861 3.7812C11.1022 3.19061 10.0631 2.87539 9 2.87539C7.93695 2.87539 6.89777 3.19061 6.01387 3.7812C5.12997 4.37179 4.44104 5.21122 4.0342 6.19334C3.62737 7.17546 3.52089 8.25616 3.72824 9.2988C3.93559 10.3414 4.44746 11.2992 5.19911 12.0509L5.2875 11.9625L5.19911 12.0509L8.91161 15.7634ZM9 17.6192L4.31539 12.9346C3.38888 12.0081 2.75792 10.8276 2.50229 9.54251C2.24667 8.25739 2.37788 6.92533 2.87931 5.71477C3.38074 4.50422 4.22988 3.46954 5.31936 2.74158C6.40883 2.01362 7.6897 1.62507 9 1.62507C10.3103 1.62507 11.5912 2.01362 12.6806 2.74158C13.7701 3.46954 14.6193 4.50422 15.1207 5.71477C15.6221 6.92533 15.7533 8.25739 15.4977 9.54251C15.2421 10.8276 14.6111 12.0081 13.6846 12.9346L9 17.6192ZM9 9.87501C9.43098 9.87501 9.8443 9.7038 10.1491 9.39906C10.4538 9.09431 10.625 8.68099 10.625 8.25001C10.625 7.81903 10.4538 7.40571 10.1491 7.10096C9.8443 6.79622 9.43098 6.62501 9 6.62501C8.56903 6.62501 8.1557 6.79622 7.85095 7.10096C7.54621 7.40571 7.375 7.81903 7.375 8.25001C7.375 8.68099 7.54621 9.09431 7.85095 9.39906C8.1557 9.7038 8.56903 9.87501 9 9.87501ZM9 11.125C8.23751 11.125 7.50624 10.8221 6.96707 10.2829C6.4279 9.74378 6.125 9.01251 6.125 8.25001C6.125 7.48751 6.4279 6.75624 6.96707 6.21708C7.50624 5.67791 8.23751 5.37501 9 5.37501C9.7625 5.37501 10.4938 5.67791 11.0329 6.21708C11.5721 6.75624 11.875 7.48751 11.875 8.25001C11.875 9.01251 11.5721 9.74378 11.0329 10.2829C10.4938 10.8221 9.7625 11.125 9 11.125Z"
                      fill="black"
                      fillOpacity="0.6"
                      stroke="white"
                      strokeWidth="0.25"
                    />
                  </svg>
                </span>
                <span>{vetInfo?.veterinary_address}</span>
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="w-full">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="w-full sm:w-1/2">
                  <VetCalender
                    appointmentDate={appointmentDate}
                    setAppointmentDate={setAppointmentDate}
                  />
                </div>
                <div className="w-full sm:w-1/2 flex flex-wrap gap-3">
                  {timeSlots?.map((tm, i) => {
                    let timeHour = tm?.split(":")[0];
                    let timeMin = tm?.split(":")[1]?.split(" ")[0];
                    // console.log(t);
                    const t = timeHour + ":" + timeMin;

                    return (
                      <p
                        onClick={() => {
                          if (!timeSlots2.includes(tm)) {
                            setAppointmentDate({
                              ...appointmentDate,
                              time: tm,
                            });
                          }
                        }}
                        key={i}
                        className={`flex items-center justify-center w-[70px] text-center text-[13px] hover:rounded-full hover:bg-[#7D7D7D] cursor-pointer ${
                          timeSlots2.includes(tm)
                            ? "bg-[#a8a8a8] rounded-full text-white cursor-not-allowed"
                            : ` ${
                                appointmentDate?.time === t
                                  ? "bg-[#7D7D7D] rounded-full text-white py-1"
                                  : "hover:text-white py-1"
                              }`
                        }`}
                        // onClick={() =>
                        //   setAppointmentDate({
                        //     ...appointmentDate,
                        //     time: tm,
                        //   })
                        // }
                        // key={index}
                        // className={`flex items-center justify-center w-[70px] text-center text-[13px] hover:rounded-full hover:bg-[#7D7D7D] cursor-pointer hover:text-white ${
                        //   appointmentDate?.time == t &&
                        //   "bg-[#7D7D7D] rounded-full text-white"
                        // }`}
                      >
                        {tm}
                      </p>
                    );
                  })}
                </div>
              </div>
              <button
                onClick={() =>
                  handleSubmitAppointmentData(appointmentData?.data?._id)
                }
                className="w-full text-white text-[15px] font-medium text-center p-[12px] bg-secondary rounded"
              >
                {editAppointmentLoading ? (
                  <div className="flex items-center justify-center">
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
                  "Salva il nuovo orario selezionato"
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-9">{content}</div>
      </div>
    </div>
  );
};

export default MyAppointmentEditing;
