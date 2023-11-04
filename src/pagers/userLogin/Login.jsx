import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/ICONS/google.svg";
import { useLoginMutation } from "../../features/auth/authApi";

function UserLogin() {
  const [login, { data: LoginInData, isError, isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const [googleLogin, setGoogleLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setGoogleLogin(false);
    login({ email, password, userType: "user" });
  };
  useEffect(() => {
    if (isError) {
      alert("No User Found");
    }
    if (LoginInData?.data?.accessToken && googleLogin) {
      navigate("/registration-with-google");
    } else if (LoginInData?.data?.accessToken && !googleLogin) {
      navigate("/user/vet-lists");
    }
  }, [isLoggedIn, LoginInData, isError, navigate, googleLogin]);

  useEffect(() => {
    handleTokenFromQueryParams();
  }, []);

  const createGoogleAuthLink = async () => {
    try {
      const request = await fetch(
        "http://localhost:5000/api/v1/createAuthLink",
        {
          method: "POST",
        }
      );
      const response = await request.json();
      window.location.href = response.url;
    } catch (error) {
      console.log("App.js 12 | error", error);
      throw new Error("Issue with Login", error.message);
    }
  };

  const handleTokenFromQueryParams = () => {
    const query = new URLSearchParams(window.location.search);
    const accessToken = query.get("accessToken");
    const refreshToken = query.get("refreshToken");
    const expirationDate = newExpirationDate();
    console.log("App.js 30 | expiration Date", expirationDate);
    if (accessToken && refreshToken) {
      storeTokenData(accessToken, refreshToken, expirationDate);
      setIsLoggedIn(true);
    }
  };

  const newExpirationDate = () => {
    var expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    return expiration;
  };

  const storeTokenData = async (token, refreshToken, expirationDate) => {
    sessionStorage.setItem("accessToken", token);
    sessionStorage.setItem("refreshToken", refreshToken);
    sessionStorage.setItem("expirationDate", expirationDate);
  };

  // const signOut = () => {
  //   setIsLoggedIn(false);
  //   sessionStorage.clear();
  // };
  return (
    <section className="flex flex-col justify-center items-center bg-[#FFF7EC] pb-16 pt-8 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg px-4 py-12 md:p-8 lg:p-16 bg-white">
        <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
          Accedi o registrati per concludere la prenotazione
        </h1>
        <p className="text-center text-[15px] pb-8 text-[#00000099]">
          Accedi o registrati tramite Google per concludere la prenotazione e
          diventare membro di Racyline
        </p>
        <form className="flex flex-col gap-y-4" onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isLoading ? (
            <div>
              <button
                type="button"
                className={`w-full rounded-lg py-3 px-4 outline-none text-white bg-primary `}
              >
                Loading...
              </button>
            </div>
          ) : (
            <div>
              <button
                type="submit"
                className={`w-full rounded-lg py-3 px-4 outline-none text-white bg-primary `}
              >
                Accedi
              </button>
            </div>
          )}

          <div>
            <button
              onClick={createGoogleAuthLink}
              type="button"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
            >
              <p className="flex items-center justify-center">
                <img src={GoogleIcon} alt="" />
                <span className="ml-2">Continua con Google</span>
              </p>
            </button>
          </div>
          <div>
            <Link to={"/user/registration"} className="no-underline">
              <p className="text-center text-[15px]">
                Non hai ancora un account?{" "}
                <span className={`text-primary`}>Registrati ora!</span>
              </p>
            </Link>
          </div>
        </form>
      </div>
      <div className="mt-4">
        <Link to={"/vets/login"} className="no-underline">
          <p className="text-center text-[15px]">
            Sei un medico veterinario?
            <span className={`text-primary`}>Clicca qui</span>
          </p>
        </Link>
      </div>
    </section>
  );
}

export default UserLogin;
