/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../features/auth/authApi";

function UserRegistration() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    role: "user",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [register, { data: UserLoggedInData, isError }] = useRegisterMutation();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [feildError, setFeildError] = useState(false);
  const registerUser = (e) => {
    e.preventDefault();
    if (
      inputData?.first_name !== "" &&
      inputData?.last_name !== "" &&
      inputData?.email !== "" &&
      inputData?.password !== "" &&
      inputData?.phone !== ""
    ) {
      setFeildError(false);
      setIsLoading(true);
      register(inputData);
    } else {
      setFeildError(true);
    }
  };

  useEffect(() => {
    if (isError) {
      alert("Something went wrong");
    }
    if (UserLoggedInData?.data?.accessToken) {
      navigate("/user/vet-lists");
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
      });
    }
  };
  const people = [
    {
      name: "Veterinary Doctor",
    },
  ];
  const type = [
    {
      name: "Dog",
    },
    {
      name: "Cat",
    },
    {
      name: "Parrot",
    },
  ];

  return (
    <section className="flex justify-center items-center bg-[#FFF7EC] py-16 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg px-4 py-12 md:p-8 lg:p-16 bg-white">
        <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
          Completa la registrazione
        </h1>
        <p className="text-center text-[15px] text-[#00000099]">
          Concludi la registrazione per diventare membro di Racyline
        </p>
        <form
          onSubmit={registerUser}
          action=""
          className="flex flex-col gap-y-4 mt-8"
        >
          <div>
            <input
              type="text"
              name="first_name"
              value={inputData.first_name}
              onChange={handleInputChange}
              placeholder="Name *"
              className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                feildError && inputData?.first_name === ""
                  ? "border-red-500"
                  : "border-[#E5E7EC] "
              } `}
            />
          </div>
          <div>
            <input
              type="text"
              name="last_name"
              value={inputData.last_name}
              onChange={handleInputChange}
              placeholder="Cognome *"
              className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                feildError && inputData?.last_name === ""
                  ? "border-red-500"
                  : "border-[#E5E7EC] "
              } `}
            />
          </div>

          <div>
            <input
              type="number"
              name="phone"
              value={inputData.phone}
              onChange={handleInputChange}
              placeholder="Numero di cellulare *"
              className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                feildError && inputData?.phone === ""
                  ? "border-red-500"
                  : "border-[#E5E7EC] "
              } `}
            />
          </div>

          <hr className="outline-1 border[#ddd]" />

          <div>
            <input
              type="email"
              name="email"
              value={inputData.email}
              onChange={handleInputChange}
              placeholder="Email *"
              className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                feildError && inputData?.email === ""
                  ? "border-red-500"
                  : "border-[#E5E7EC] "
              } `}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password *"
              name="password"
              value={inputData.password}
              onChange={handleInputChange}
              className={`w-full rounded-lg py-3 px-4 outline-none border-[1px] ${
                feildError && inputData?.password === ""
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
              type="submit"
              className={`w-full rounded-lg py-3 px-4 outline-none  text-white bg-primary`}
            >
              Avanti
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
        </form>
      </div>
    </section>
  );
}

export default UserRegistration;
