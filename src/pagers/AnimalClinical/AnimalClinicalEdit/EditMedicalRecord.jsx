/* eslint-disable no-unused-vars */
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { Fragment, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import userIcon from "../../../assets/ICONS/user.svg";

const genders = [
  {
    gender: "Maschia",
  },
  {
    gender: "Femmina",
  },
];

function EditMedicalRecord() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location?.pathname;
  const { id } = useParams();
  const [isExistPets, setIsExistPets] = useState([]);
  const [selected, setSelected] = useState();

  const [inputData, setInputData] = useState({
    animalName: "",
    specie: "",
    race: "",
    dateOfBirth: "",
    sex: selected,
    Microchip_number: "",
    ImplantationDate: "",
    profile_image_url: "",
  });
  const [loading, setLoading] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [feildError, setFeildError] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_LINK}/pets/report/${id}`)
      .then((res) => {
        setIsExistPets(res?.data?.data);
        setSelected(res?.data?.data[0]?.general_information?.sex);
      });
  }, []);

  // input handle change set object value dynamicale
  const handleInputChange = (event) => {
    setInputData((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setLoading(true);
    let formData = new FormData();
    const maxFileSize = 5 * 1024 * 1024;
    const file = e.target.files[0];
    if (file && file.size > maxFileSize) {
      setLoading(false);
      setError(
        "File size exceeds the maximum allowed size (5MB). Please choose a smaller file."
      );
    } else {
      setError("");
      formData.append("image", file);
      formData.append("key", `${import.meta.env.VITE_IMGBB_API_KEY}`);
      setSelectedFile(file);
      axios.post("https://api.imgbb.com/1/upload", formData).then((res) => {
        setInputData({ ...inputData, profile_image_url: res.data.data.url });
        setLoading(false);
      });
    }
  };

  // form Submit here...
  const handleSubmit = (e) => {
    e.preventDefault();
    const petsData = [];
    const petInfo = {
      general_information: {
        pet_photo: inputData?.profile_image_url,
        animal_name: inputData?.animalName,
        species: inputData?.specie,
        race: inputData?.race,
        date_of_birth: inputData?.dateOfBirth,
        sex: selected,
        microchip_number: inputData?.Microchip_number,
        implantation_date: inputData?.ImplantationDate,
      },
      medical_history: {},
    };
    isExistPets.push(petInfo);
    localStorage.setItem("petsData", JSON.stringify(isExistPets));
    return navigate(`/user/complete-edit-medical-record/${id}`, {
      replace: true,
      state: { ...location, petInfoIndex: `${0}` },
    });
  };

  useEffect(() => {
    if (isExistPets?.length > 0) {
      const getPetInfo = isExistPets[0];
      setInputData({
        animalName: getPetInfo?.general_information?.animal_name,
        specie: getPetInfo?.general_information?.species,
        race: getPetInfo?.general_information?.race,
        dateOfBirth: getPetInfo?.general_information?.date_of_birth,
        Microchip_number: getPetInfo?.general_information?.microchip_number,
        ImplantationDate: getPetInfo?.general_information?.implantation_date,
        profile_image_url: getPetInfo?.general_information?.pet_photo,
        sex: getPetInfo?.general_information?.sex,
      });
    }
  }, [isExistPets?.length]);

  return (
    <section className="flex justify-center items-center bg-primary py-16 px-4 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg px-4 py-12 md:p-8 lg:p-16 bg-white">
        <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold leading-10 text-center mb-6">
          Cartella clinica
        </h1>
        <p className="text-center text-[15px] text-[#00000099]">
          Completa questa sezione con le informazioni generali del tuo animale
        </p>

        <div className="py-[30px]">
          <h3 className="text-lg font-bold leading-10">Dati generali</h3>
          <div className="flex gap-6 flex-wrap items-center">
            <div className="w-[105px] h-[105px] flex items-center gap-6 justify-center rounded-full bg-[#E5E7EC]">
              {selectedFile ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt=""
                  className="w-[105px] h-[105px] rounded-full  object-cover "
                />
              ) : inputData?.profile_image_url ? (
                <img
                  src={inputData?.profile_image_url}
                  alt=""
                  className="w-[105px] h-[105px] rounded-full object-cover"
                />
              ) : (
                <img
                  src={userIcon}
                  alt=""
                  className="w-[32px] h-[32px] object-cover"
                />
              )}
            </div>
            <div className="flex flex-col gap-y-[10px]">
              <button
                onClick={handleButtonClick}
                className="border-[1px] border-black rounded-md py-3 px-8 text-[15px] font-medium"
              >
                Carica la foto di profilo
              </button>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              <span className="text-black/[.40]">
                JPG or PNG. Max size of 5MB.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <input
              type="text"
              name="animalName"
              value={inputData?.animalName}
              onChange={handleInputChange}
              placeholder="Nome dell’animale *"
              className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                feildError && inputData?.animalName === ""
                  ? "border-red-500"
                  : "border-[#E5E7EC] "
              } `}
            />
          </div>

          <div>
            <input
              type="text"
              name="specie"
              value={inputData?.specie}
              onChange={handleInputChange}
              placeholder="Specie *"
              className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                feildError && inputData?.specie === ""
                  ? "border-red-500"
                  : "border-[#E5E7EC] "
              } `}
            />
          </div>

          <div>
            <input
              type="text"
              name="race"
              value={inputData?.race}
              onChange={handleInputChange}
              placeholder="Razza "
              className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                feildError && inputData?.race === ""
                  ? "border-red-500"
                  : "border-[#E5E7EC] "
              } `}
            />
          </div>

          <div>
            <input
              type="text"
              name="dateOfBirth"
              value={inputData?.dateOfBirth}
              onChange={handleInputChange}
              placeholder="Data di nascita "
              className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                feildError && inputData?.dateOfBirth === ""
                  ? "border-red-500"
                  : "border-[#E5E7EC] "
              } `}
            />
          </div>

          <div>
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button
                  className={`relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left border-[1px] ${
                    feildError && selected === ""
                      ? "border-red-500"
                      : "border-[#E5E7EC] "
                  } focus:outline-none `}
                >
                  {selected?.gender ? (
                    <span className="block truncate">{selected?.gender}</span>
                  ) : (
                    <span className="block truncate text-gray-400">
                      {"Sesso *"}
                    </span>
                  )}

                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {genders.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.gender}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

          <h3 className="text-lg font-bold leading-10">Microchip</h3>
          <div>
            <input
              type="text"
              name="Microchip_number"
              value={inputData.Microchip_number}
              onChange={handleInputChange}
              placeholder="Numero del microchip *"
              className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                feildError && inputData?.Microchip_number === ""
                  ? "border-red-500"
                  : "border-[#E5E7EC] "
              } `}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Implantation date"
              name="ImplantationDate"
              value={inputData.ImplantationDate}
              onChange={handleInputChange}
              className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                feildError && inputData?.ImplantationDate === ""
                  ? "border-red-500"
                  : "border-[#E5E7EC] "
              } `}
            />
          </div>
          {error && (
            <p className="text-center text-[15px] text-red-500">{error}</p>
          )}
          <div>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full rounded-lg py-3 px-4 outline-none  text-white bg-secondary`}
            >
              {loading ? (
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
          </div>
          <div>
            <p
              className={`text-center text-[15px] ${
                feildError ? "text-red-500" : "text-black/[.40]"
              }`}
            >
              * I campi sono obbligatori
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditMedicalRecord;
