import React from "react";

const AppointmentError = () => {
  return (
    <div className="flex justify-center pt-5 md:pt-16 pb-5 md:pb-60 bg-[#E8971F26]">
      <div className="max-w-[755px] w-full flex flex-col gap-9 items-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M50 100C22.385 100 0 77.615 0 50C0 22.385 22.385 0 50 0C77.615 0 100 22.385 100 50C100 77.615 77.615 100 50 100ZM50 90C60.6087 90 70.7828 85.7857 78.2843 78.2843C85.7857 70.7828 90 60.6087 90 50C90 39.3913 85.7857 29.2172 78.2843 21.7157C70.7828 14.2143 60.6087 10 50 10C39.3913 10 29.2172 14.2143 21.7157 21.7157C14.2143 29.2172 10 39.3913 10 50C10 60.6087 14.2143 70.7828 21.7157 78.2843C29.2172 85.7857 39.3913 90 50 90ZM45 65H55V75H45V65ZM45 25H55V55H45V25Z"
              fill="#EF4C19"
            />
          </svg>
        </span>
        <div>
          <h1 className="text-center text-[22px] md:text-[32px] font-bold mb-3">
            C’è stato un problema con la prenotazione dell’appuntamento
          </h1>
          <p className="text-center text-[16px] md:text-[18px] leading-[27px] text-[#00000099]">
            Riprova ad effettuare la prenotazione. Se riscontri ancora lo stesso
            problema tecnico contattaci all’indirizzo email per risolvere il
            problema qui sotto.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <button className=" text-white text-[15px] font-medium text-center p-[12px] bg-secondary rounded">
            support@company.com
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentError;
