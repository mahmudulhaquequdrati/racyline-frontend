/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function UserNumber() {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const location = useLocation();
  const [inputData, setInputData] = useState({
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [feildError, setFeildError] = useState(false);
  const registerUser = (e) => {
    e.preventDefault();
    if (inputData?.phone !== "") {
      setFeildError(false);
      setIsLoading(true);
      //! must save phone number to database
      axios
        .post(`${import.meta.env.VITE_SERVER_LINK}/guser/update/${user?._id}`, {
          phone: inputData?.phone,
        })
        .then((res) => {
          if (res?.data) {
            navigate("/user/all-pet-info", {
              state: { user: location.state },
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });

      // register(inputData);
    } else {
      setFeildError(true);
    }
  };

  const handleInputChange = (event) => {
    setInputData((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <section className="flex justify-center items-center bg-primary py-16 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg px-4 py-12 md:p-8 lg:p-16 bg-white">
        <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
          Completa la registrazione
        </h1>
        <p className="text-center text-[15px] text-[#00000099]">
          Concludi la registrazione per diventare membro di Racyline
        </p>
        <form onSubmit={registerUser} className="flex flex-col gap-y-4 mt-8">
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

          {error && (
            <p className="text-center text-[15px] text-red-500">{error}</p>
          )}
          <div>
            <button
              type="submit"
              className={`w-full rounded-lg py-3 px-4 outline-none  text-white bg-secondary`}
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

export default UserNumber;
