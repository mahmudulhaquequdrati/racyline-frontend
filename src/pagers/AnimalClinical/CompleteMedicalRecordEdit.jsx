import { useState } from "react";
import { useNavigate } from "react-router-dom";

const plusIcons = (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_457_2801)">
      <path
        d="M16.5111 29.8328C9.14707 29.8328 3.17773 23.8634 3.17773 16.4994C3.17773 9.13543 9.14707 3.16609 16.5111 3.16609C23.8751 3.16609 29.8444 9.13543 29.8444 16.4994C29.8444 23.8634 23.8751 29.8328 16.5111 29.8328ZM15.1777 15.1661H9.8444V17.8328H15.1777V23.1661H17.8444V17.8328H23.1777V15.1661H17.8444V9.83276H15.1777V15.1661Z"
        fill="#339E9F"
      />
    </g>
    <defs>
      <clipPath id="clip0_457_2801">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(0.5 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
const uploadIcons = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 2C18.02 2 22.5 6.48 22.5 12C22.5 17.52 18.02 22 12.5 22C6.98 22 2.5 17.52 2.5 12C2.5 6.48 6.98 2 12.5 2ZM12.5 20C16.92 20 20.5 16.42 20.5 12C20.5 7.58 16.92 4 12.5 4C8.08 4 4.5 7.58 4.5 12C4.5 16.42 8.08 20 12.5 20ZM13.5 12V16H11.5V12H8.5L12.5 8L16.5 12H13.5Z"
      fill="black"
    />
  </svg>
);
const loadingIcons = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_452_1894)">
      <path
        d="M18.364 5.63609L16.95 7.05009C15.8049 5.90489 14.2982 5.19215 12.6865 5.03333C11.0748 4.87451 9.45794 5.27942 8.11134 6.17908C6.76474 7.07874 5.77174 8.41748 5.30154 9.9672C4.83134 11.5169 4.91302 13.1817 5.53268 14.678C6.15234 16.1742 7.27162 17.4093 8.69983 18.1728C10.128 18.9363 11.7768 19.181 13.3652 18.8652C14.9536 18.5493 16.3833 17.6925 17.4108 16.4407C18.4382 15.1889 18.9999 13.6196 19 12.0001H21C21 14.0823 20.278 16.1001 18.957 17.7096C17.6361 19.3192 15.7979 20.4209 13.7557 20.8271C11.7136 21.2333 9.5937 20.9188 7.75737 19.9373C5.92104 18.9557 4.48187 17.3678 3.68506 15.4441C2.88825 13.5204 2.78311 11.3799 3.38756 9.38739C3.992 7.39486 5.26863 5.67355 6.99992 4.51675C8.73121 3.35996 10.81 2.83925 12.8822 3.04336C14.9544 3.24746 16.8917 4.16375 18.364 5.63609Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_452_1894">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const cancelLoadingIcons = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_452_1896)">
      <path
        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 10.586L9.172 7.757L7.757 9.172L10.586 12L7.757 14.828L9.172 16.243L12 13.414L14.828 16.243L16.243 14.828L13.414 12L16.243 9.172L14.828 7.757L12 10.586Z"
        fill="black"
        fill-opacity="0.1"
      />
    </g>
    <defs>
      <clipPath id="clip0_452_1896">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const cancelIcons = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_452_1902)">
      <path
        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 10.586L9.172 7.757L7.757 9.172L10.586 12L7.757 14.828L9.172 16.243L12 13.414L14.828 16.243L16.243 14.828L13.414 12L16.243 9.172L14.828 7.757L12 10.586Z"
        fill="black"
        fill-opacity="0.4"
      />
    </g>
    <defs>
      <clipPath id="clip0_452_1902">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const checkIcons = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 2.992V21.008C20.9979 21.2706 20.8926 21.5219 20.7068 21.7075C20.521 21.8931 20.2696 21.9982 20.007 22H3.993C3.72981 22 3.47739 21.8955 3.2912 21.7095C3.105 21.5235 3.00027 21.2712 3 21.008V2.992C3.00209 2.72938 3.10742 2.47813 3.29322 2.29251C3.47902 2.1069 3.73038 2.00183 3.993 2H20.007C20.555 2 21 2.444 21 2.992ZM19 4H5V20H19V4ZM11.293 13.121L15.536 8.879L16.95 10.293L11.293 15.95L7.403 12.06L8.818 10.646L11.293 13.121Z"
      fill="#58C624"
    />
  </svg>
);

function CompleteMedicalRecordEdit() {
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [fieldError, setFieldError] = useState(false);
  const [inputData, setInputData] = useState({
    medicalData: "",
  });

  const handleInputChange = (event) => {
    setInputData((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  // handle files submit
  const handleFils = () => {};

  //  handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="flex flex-col justify-center items-center bg-primary pb-16 px-4 pt-8 border-[1px] border-[#EAEAEB]">
      {/* Same as */}

      <div className="max-w-[638px] w-full  rounded-lg px-4 py-12 md:p-8 lg:p-16 bg-white">
        <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
          Completa la cartella clinica
        </h1>
        <p className="text-center text-[15px] pb-8 text-[#00000099]">
          Completa questa sezione con la storia medica del tuo animale
        </p>

        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="medicalHistory"
              className="text-lg font-bold leading-10"
            >
              Anamnesi
            </label>
            <textarea
              className="resize-none text-[15px] w-full h-48 outline-none border border-gray-200 rounded-lg"
              name="medicalHistory"
              id="medicalHistory"
              placeholder="Descrivi le caratteristiche, sintomi o fatti di interesse riferiti al tuo animale..."
            ></textarea>
          </div>

          <div>
            <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="text-lg font-bold leading-10">Diario Medico</h3>
                <p className="text-[15px] text-[#000000] mb-5">
                  Aggiungi eventuali note mediche del tuo animale
                </p>
              </div>

              <label
                htmlFor="Files"
                className="flex gap-3 justify-center items-center py-5 mb-4 cursor-pointer rounded-lg"
              >
                <span> {plusIcons} </span>
                <input
                  onChange={() => handleFils()}
                  type="file"
                  name="fils"
                  className="hidden"
                  id="Files"
                />
              </label>
            </div>

            <div className="p-4 border border-primary rounded-lg">
              <p className="text-lg font-bold leading-10">
                Aggiungi un nuova nota medica
              </p>

              <div>
                <input
                  type="text"
                  name="medicalData"
                  value={inputData.medicalData}
                  onChange={handleInputChange}
                  placeholder="20/04/2019"
                  className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                    fieldError && inputData?.medicalData === ""
                      ? "border-red-500"
                      : "border-[#E5E7EC] "
                  } `}
                />

                <textarea
                  className="resize-none w-full mt-5 text-[15px] h-48 outline-none border border-gray-200 rounded-lg"
                  name="medicalHistory"
                  id="medicalHistory"
                  placeholder="Vaccinazione antirabbica 1"
                ></textarea>

                <div className="p-4 mt-4 rounded-lg border">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-[14px]">
                      Carica i file{" "}
                      <span className="text-[#00000066]">
                        {" "}
                        {`(Max 3 file)`}{" "}
                      </span>
                    </p>

                    <p className="text-[13px] text-[#00000066]">
                      JPG, PNG or PDF. Max size of 5MB.{" "}
                    </p>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="Files"
                      className="flex gap-3 justify-center items-center py-8 border border-dashed mb-4 cursor-pointer rounded-lg"
                    >
                      <span> {uploadIcons} </span>
                      <p className="text-center text-[15px] text-[#000000]">
                        Carica documento -{" "}
                        <span className="text-primary underline ">
                          Scegli il file{" "}
                        </span>
                      </p>
                      <input
                        onChange={() => handleFils()}
                        type="file"
                        name="fils"
                        className="hidden"
                        id="Files"
                      />
                    </label>

                    <div>
                      <div className="flex flex-col md:flex-row gap-2 items-center justify-between border-b py-4">
                        <div className="flex gap-[10px]">
                          <span> {checkIcons}</span>
                          <p> name_file1.pdf </p>
                        </div>

                        <button> {cancelIcons} </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className={`mt-8 w-full rounded-lg py-3 px-4 outline-none hover:text-secondary border-secondary border bg-secondary hover:bg-transparent text-white transition duration-300`}
                    >
                      {isLoading ? (
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
                        "Aggiungi nota"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-base">Tutte le note</h4>

            <div className="border rounded-lg p-4 mt-4">
              <div className="flex flex-col md:flex-row items-center justify-between ">
                <h5 className="font-normal text-[15px]">
                  {" "}
                  Vaccinazione antirabbica 2
                </h5>
                <p className="text-[#00000066]"> 20/04/2019 </p>
              </div>

              <div className="py-3 flex gap-1 flex-wrap">
                <span className="py-1.5 px-3 max-w-max rounded-lg text-[#00000066] bg-[#E5E7EC99]">
                  name_file1.pdf
                </span>
                <span className="py-1.5 px-3 max-w-max rounded-lg text-[#00000066] bg-[#E5E7EC99]">
                  name_file2.pdf
                </span>
                <span className="py-1.5 px-3 max-w-max rounded-lg text-[#00000066] bg-[#E5E7EC99]">
                  name_file3.pdf
                </span>
              </div>

              <div className="flex gap-4 mt-2">
                <button
                  className={`w-full rounded-lg py-3 px-4 outline-none text-secondary border-secondary border hover:bg-secondary hover:text-white transition duration-300`}
                >
                  Modifica cartella clinica
                </button>
                <button
                  className={`w-full rounded-lg py-3 px-4 outline-none text-secondary border-secondary border hover:bg-secondary hover:text-white transition duration-300`}
                >
                  Elimina
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-10">
            <label
              htmlFor="medicalHistory"
              className="text-lg font-bold leading-10"
            >
              Note aggiuntive
            </label>
            <textarea
              className="resize-none w-full  text-[15px] h-48 outline-none border border-gray-200 rounded-lg"
              name="medicalHistory"
              id="medicalHistory"
              placeholder="Aggiungi note aggiuntive o informazioni utili per il veterinario...."
            ></textarea>
          </div>

          <button
            type="submit"
            className={`mt-8 w-full rounded-lg py-3 px-4 outline-none hover:text-secondary border-secondary border bg-secondary hover:bg-transparent text-white transition duration-300`}
          >
            {isLoading ? (
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
              "Aggiungi il tuo animale"
            )}
          </button>
        </form>

        <p className="text-center text-[15px] mt-10 text-[#00000066]">
          * I campi sono obbligatori
        </p>
      </div>
    </section>
  );
}

export default CompleteMedicalRecordEdit;
