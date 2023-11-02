import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Calender() {
  const [value, onChange] = useState(new Date());

  const formatDate = ({ date, sd }) => {
    console.log(date, sd);
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        className={"customizeCalender"}
        prev2Label={null}
        next2Label={null}
      />
    </div>
  );
}
