/* eslint-disable no-unused-vars */
import { useState } from "react";
import userIcon from "../../assets/ICONS/user.svg";
import { useRegisterMutation } from "../../features/auth/authApi";

function Registration() {
  const [inputData, setInputData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    doctor_type1: "",
    doctor_type2: "",
    veterinary_address: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [register, { data: UserLoggedInData, isError }] = useRegisterMutation();
  const registerUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // http://localhost:5000/api/v1/user
    // user data sob diben
    register(inputData);
  };

  // korte paren or auth api teke direct navigate o korte paren
  // useEffect(() => {
  //   if (isError) {
  //     alert("Something went wrong");
  //   }
  //   if (UserLoggedInData?.data?.accessToken) {
  //     navigate("/dashboard");
  //   }
  // }, [UserLoggedInData, isError, navigate]);

  const handleInputChange = (event) => {
    setInputData((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
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
            <img src={userIcon} alt="" className="w-[32px] h-[33px]" />
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <button className="border-[1px] border-black rounded-md py-3 px-8 text-[15px] font-medium">
              Carica la foto di profilo
            </button>
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
