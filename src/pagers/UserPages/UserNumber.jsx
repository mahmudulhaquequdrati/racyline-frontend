/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserNumber() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  // const [register, { data: UserLoggedInData, isError }] = useRegisterMutation();
  // const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [feildError, setFeildError] = useState(false);
  const registerUser = (e) => {
    e.preventDefault();
    if (inputData?.phone !== "") {
      setFeildError(false);
      setIsLoading(true);
      register(inputData);
    } else {
      setFeildError(true);
    }
  };

  // useEffect(() => {
  //   if (isError) {
  //     alert("Something went wrong");
  //   }
  //   if (UserLoggedInData?.data?.accessToken) {
  //     dispatch(userLoggedIn(UserLoggedInData?.data));
  //     navigate("/user/vet-lists");
  //   }
  // }, [UserLoggedInData, isError, navigate]);

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
