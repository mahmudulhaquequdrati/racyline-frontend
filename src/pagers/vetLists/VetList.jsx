import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendDataToAppontment } from "../../features/appointment/appointmentSlice";
import VetCalender from "./Calender";
import { notifyError } from "../../components/common/Toast/Toast";
import moment from "moment";

const VetList = ({ vetInfo }) => {
  const [appointmentDate, setAppointmentDate] = useState({
    time: null,
    date: new Date(),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    _id,
    email,
    first_name,
    last_name,
    veterinary_address,
    availability,
    doctor_type1,
    profile_image_url,
    appointments,
    doctor_type2 = [],
  } = vetInfo || {};
  const handelGetAppointment = () => {
    if (appointmentDate?.time !== null) {
      const appointmentData = {
        vetInfo: {
          vetId: _id,
          vetEmail: email,
          first_name,
          last_name,
          profile_image_url,
          veterinary_address,
          doctor_type1,
        },
        appointDate: {
          time: appointmentDate?.time,
          date: appointmentDate?.date,
        },
      };
      dispatch(sendDataToAppontment(appointmentData));
      navigate("/user/new-appointment");
    } else {
      notifyError("Please select the time!");
    }
  };

  // current date
  const current_day = moment(appointmentDate.date).locale("it").format("ddd");
  const timeSlots = [];
  let timeSlots2 = [];
  const current_day_data = availability?.availabilities?.filter(
    (t) => t?.name == current_day
  );
  const current_appointment_data = appointments?.filter((d) =>
    moment(d?.appointmentDate).isSame(moment(appointmentDate.date))
  );
  if (current_appointment_data && current_appointment_data?.length > 0) {
    timeSlots2 = current_appointment_data?.map((item) => item.appointmentTime);
  }
  console.log(timeSlots2);
  current_day_data?.map((timeData, i) => {
    // Iterate through each time interval
    timeData?.availabilities?.forEach((interval) => {
      const startTime = moment(interval.start_time);
      const endTime = moment(interval.end_time);

      // Generate time slots at 30-minute intervals within the interval
      while (startTime.isSameOrBefore(endTime)) {
        timeSlots.push(startTime.format("HH:mm"));
        startTime.add(30, "minutes");
      }
    });
  });

  console.log(timeSlots);

  return (
    <div className="flex text-black flex-col md:flex-row bg-white rounded-lg overflow-hidden">
      <div className="w-full md:w-1/2 flex flex-col gap-6 p-6 md:border-r-[0.5px] md:border-[#E5E7EC]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-[100px] h-[100px]">
            <img
              src={profile_image_url}
              className="w-full h-full rounded-full object-cover"
              alt="vetUser"
            />
          </div>
          <div>
            <h1 className="text-[16px] sm:text-[18px] leading-[22px] font-semibold mb-2">
              {first_name + " " + last_name}
            </h1>
            <p className="text-[12px] sm:text-[14px] leading-5 font-medium mb-[10px]">
              {doctor_type1?.name}
            </p>
            <p className="flex gap-[6px] text-[#666666] text-[11px] sm:text-[13px] font-normal leading-[22px]">
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
              <span>{veterinary_address}</span>
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-[16px] leading-5 font-medium mb-[12px]">
            Animali trattati
          </h3>
          <div className="flex gap-1">
            {doctor_type2?.length > 0 && (
              <div>
                {doctor_type2?.map((d, i) => {
                  return (
                    <span className="text-[14px]">
                      {d.name}
                      {doctor_type2.length > i + 1 ? "," : ""}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div>
          <h3 className="text-[16px] leading-5 font-medium mb-[12px]">
            Disponibilità
          </h3>
          <div className="flex flex-col gap-2">
            {availability?.availabilities?.map((availabilities, index) => {
              if (availabilities?.available) {
                return (
                  <div key={index} className="flex gap-3 justify-between">
                    <p className="text-[13px] font-normal leading-[22px] text-black">
                      {availabilities?.name}
                    </p>
                    <p className="text-right text-[13px] font-normal leading-[22px] text-[#666666]">
                      {availabilities?.availabilities?.map((avil) => {
                        return (
                          <p>
                            {moment(avil?.start_time).format("HH:mm")} -{" "}
                            {moment(avil?.end_time).format("HH:mm")}
                          </p>
                        );
                      })}
                    </p>
                  </div>
                );
              } else {
                return (
                  <div key={index} className="flex gap-3 justify-between">
                    <p className="text-[13px] font-normal leading-[22px] text-black">
                      {availabilities?.name}
                    </p>
                    <p className="text-right text-[13px] font-normal leading-[22px] text-[#666666]">
                      Chiuso
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 border-l-[0.5px] border-[#E5E7EC]">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="w-full sm:w-1/2">
            <VetCalender
              appointmentDate={appointmentDate}
              setAppointmentDate={setAppointmentDate}
              vetAvailabilities={availability?.availabilities}
            />
          </div>

          <div className="w-full sm:w-1/2 flex flex-wrap gap-3">
            {timeSlots.map((t, i) => (
              <p
                onClick={() => {
                  if (!timeSlots2.includes(t)) {
                    setAppointmentDate({
                      ...appointmentDate,
                      time: t,
                    });
                  }
                }}
                key={i}
                className={`flex items-center justify-center w-[70px] text-center text-[13px] hover:rounded-full hover:bg-[#7D7D7D] cursor-pointer ${
                  timeSlots2.includes(t)
                    ? "bg-[#a8a8a8] rounded-full text-white cursor-not-allowed"
                    : ` ${
                        appointmentDate?.time === t
                          ? "bg-[#7D7D7D] rounded-full text-white"
                          : "hover:text-white"
                      }`
                }`}
              >
                {t}
              </p>
            ))}
          </div>
        </div>

        <button
          onClick={handelGetAppointment}
          className="w-full text-white text-[15px] font-medium text-center p-[12px] bg-secondary rounded"
        >
          Prenota ora
        </button>
      </div>
    </div>
  );
};

export default VetList;
