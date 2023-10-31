import React from "react";
import { Link } from "react-router-dom";
import vetUser from "../../../public/vetListImage/vetUser.jpeg";

const MyAppointment = () => {
  return (
    <div className="w-full bg-[#FFF7EC] pt-[60px] pb-[80px]">
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
            Stai prenotando un appuntamento per le 13:30 di Martedì 25 Ottobre
            2023 con il/la Dottore/Dottoressa
          </p>
          <div className="flex gap-6">
            <div className="w-[100px] h-[100px]">
              <img
                src={vetUser}
                className="w-full rounded-full"
                alt="vetUser"
              />
            </div>
            <div>
              <h1 className="text-[18px] leading-[22px] font-semibold mb-2">
                Mario Rossi
              </h1>
              <p className="text-[14px] leading-5 font-medium mb-[10px]">
                Veterinario di medicina generale, Chirurgo veterinario
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
                <span>sdsdsdsdsdsd</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full">
              <button className="w-full text-white text-[15px] font-medium text-center p-[12px] bg-[#E8971F] rounded">
                <Link to={"/appointment-success"}>Modifica l’appuntamento</Link>
              </button>
            </div>
            <div className="w-full">
              <button className="w-full text-[#E8971F] text-[15px] border-[1px] border-[#E8971F] font-medium text-center p-[12px] bg-white rounded">
                <Link to={"/appointment-success"}>Elimina l’appuntamento</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-9">
          <p className="text-[18px] leading-[24px] font-semibold mb-3">
            Passati
          </p>
          <div className="flex gap-y-4 gap-x-11 flex-wrap">
            <div
              className="max-w-[550px] w-full flex flex-col gap-8 rounded bg-white p-6 opacity-60"
              style={{ boxShadow: "0px 1px 3px 0px rgba(232, 151, 31, 0.15)" }}
            >
              <p className="text-[15px] font-normal leading-6">
                Stai prenotando un appuntamento per le 13:30 di Martedì 25
                Ottobre 2023 con il/la Dottore/Dottoressa
              </p>
              <div className="flex gap-6">
                <div className="w-[100px] h-[100px]">
                  <img
                    src={vetUser}
                    className="w-full rounded-full"
                    alt="vetUser"
                  />
                </div>
                <div>
                  <h1 className="text-[18px] leading-[22px] font-semibold mb-2">
                    Mario Rossi
                  </h1>
                  <p className="text-[14px] leading-5 font-medium mb-[10px]">
                    Veterinario di medicina generale, Chirurgo veterinario
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
                    <span>sdsdsdsdsdsd</span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="max-w-[550px] w-full flex flex-col gap-8 rounded bg-white p-6 opacity-60"
              style={{ boxShadow: "0px 1px 3px 0px rgba(232, 151, 31, 0.15)" }}
            >
              <p className="text-[15px] font-normal leading-6">
                Stai prenotando un appuntamento per le 13:30 di Martedì 25
                Ottobre 2023 con il/la Dottore/Dottoressa
              </p>
              <div className="flex gap-6">
                <div className="w-[100px] h-[100px]">
                  <img
                    src={vetUser}
                    className="w-full rounded-full"
                    alt="vetUser"
                  />
                </div>
                <div>
                  <h1 className="text-[18px] leading-[22px] font-semibold mb-2">
                    Mario Rossi
                  </h1>
                  <p className="text-[14px] leading-5 font-medium mb-[10px]">
                    Veterinario di medicina generale, Chirurgo veterinario
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
                    <span>sdsdsdsdsdsd</span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="max-w-[550px] w-full flex flex-col gap-8 rounded bg-white p-6 opacity-60"
              style={{ boxShadow: "0px 1px 3px 0px rgba(232, 151, 31, 0.15)" }}
            >
              <p className="text-[15px] font-normal leading-6">
                Stai prenotando un appuntamento per le 13:30 di Martedì 25
                Ottobre 2023 con il/la Dottore/Dottoressa
              </p>
              <div className="flex gap-6">
                <div className="w-[100px] h-[100px]">
                  <img
                    src={vetUser}
                    className="w-full rounded-full"
                    alt="vetUser"
                  />
                </div>
                <div>
                  <h1 className="text-[18px] leading-[22px] font-semibold mb-2">
                    Mario Rossi
                  </h1>
                  <p className="text-[14px] leading-5 font-medium mb-[10px]">
                    Veterinario di medicina generale, Chirurgo veterinario
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
                    <span>sdsdsdsdsdsd</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAppointment;
