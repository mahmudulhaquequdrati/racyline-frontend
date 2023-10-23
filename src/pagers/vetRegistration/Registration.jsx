/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import userIcon from "../../assets/ICONS/user.svg";
import { useRegisterMutation } from "../../features/auth/authApi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    doctor_type1: "",
    doctor_type2: "",
    veterinary_address: "",
    profile_image_url: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [register, { data: UserLoggedInData, isError }] = useRegisterMutation();
  const [selectedFile, setSelectedFile] = useState(null);
  const registerUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    register(inputData);
  };

  useEffect(() => {
    if (isError) {
      alert("Something went wrong");
    }
    if (UserLoggedInData?.data?.accessToken) {
      navigate("/registration-availabilities");
    }
  }, [UserLoggedInData, isError, navigate]);

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
    let formData = new FormData();
    const maxFileSize = 5 * 1024 * 1024;
    const file = e.target.files[0];
    if (file && file.size > maxFileSize) {
      alert(
        "File size exceeds the maximum allowed size (5MB). Please choose a smaller file."
      );
    } else {
      formData.append("image", file);
      formData.append("key", `${import.meta.env.VITE_IMGBB_API_KEY}`);
      setSelectedFile(file);
      axios.post("https://api.imgbb.com/1/upload", formData).then((res) => {
        setInputData({ ...inputData, profile_image_url: res.data.data.url });
      });
    }
  };

  return (
    <section className="flex justify-center items-center bg-[#FFF7EC] py-16 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg p-16 bg-white">
        <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
          Completa la registrazione
        </h1>
        <p className="text-center text-[15px] text-[#00000099]">
          Concludi la registrazione per diventare membro di Racyline
        </p>

        <div className="flex gap-6 items-center py-[30px]">
          <div className="w-[105px] h-[105px] flex items-center gap-6 justify-center rounded-full bg-[#E5E7EC]">
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt=""
                className="w-[105px] h-[105px] rounded-full"
              />
            ) : (
              <img src={userIcon} alt="" className="w-[32px] h-[33px]" />
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
        <form
          onSubmit={registerUser}
          action=""
          className="flex flex-col gap-y-4"
        >
          <div>
            <input
              type="text"
              name="first_name"
              value={inputData.first_name}
              onChange={handleInputChange}
              placeholder="Name *"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="last_name"
              value={inputData.last_name}
              onChange={handleInputChange}
              placeholder="Cognome *"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="doctor_type1"
              value={inputData.doctor_type1}
              onChange={handleInputChange}
              placeholder="Scegli che tipo di dottore sei *"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
            />
          </div>
          <div>
            <input
              type="text"
              name="doctor_type2"
              value={inputData.doctor_type2}
              onChange={handleInputChange}
              placeholder="Scegli che tipo di dottore sei *"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
            />
          </div>
          <hr className="outline-1 border[#ddd]" />
          <div>
            <input
              type="text"
              name="veterinary_address"
              value={inputData.veterinary_address}
              onChange={handleInputChange}
              placeholder="Indirizzo del tuo ufficio veterinario *"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={inputData.email}
              onChange={handleInputChange}
              placeholder="Email *"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password *"
              name="password"
              value={inputData.password}
              onChange={handleInputChange}
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-lg py-3 px-4 outline-none bg-[#E8971F] text-white"
            >
              Avanti
            </button>
          </div>
          <div>
            <p className="text-center text-[15px] text-black/[.40]">
              * I campi sono obbligatori
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Registration;
