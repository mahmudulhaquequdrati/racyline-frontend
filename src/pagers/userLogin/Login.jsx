import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/ICONS/google.svg";
import {
  notifyError,
  notifySuccess,
} from "../../components/common/Toast/Toast";
import { useLoginMutation } from "../../features/auth/authApi";
import { userLoggedIn, userLoggedOut } from "../../features/auth/authSlice";
import { useGoogleLoginMutation } from "../../features/auth/googleAuthApi";

function UserLogin() {
  const [login, { data: LoginInData, isError, isLoading }] = useLoginMutation();
  const [
    googleLogin,
    { data: googleLoginData, isError: googleError, isLoading: isGoogleLogin },
  ] = useGoogleLoginMutation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const handleLogut = () => {
    localStorage.removeItem("authNutraNextUser");
    dispatch(userLoggedOut());
    navigate("/user/login");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password, userType: "user" });
  };
  useEffect(() => {
    if (isError) {
      notifyError("Email or password isn't correct!");
    }
    if (LoginInData?.data?.accessToken) {
      notifySuccess("welcome back!");

      dispatch(userLoggedIn(LoginInData?.data));
      navigate("/user/vet-lists");
    }
  }, [LoginInData, isError, navigate]);

  async function handleGoogle() {
    var SCOPES =
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email";
    // var SCOPES = "https://www.googleapis.com/auth/calendar.events ";
    const client = window.google.accounts.oauth2.initCodeClient({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      scope: SCOPES,
      ux_mode: "popup",
      callback: async (response) => {
        try {
          if (!response.code) {
            return;
          }
          googleLogin({ code: response.code, role: "user" }).then((res) => {
            if (res?.data?.data?.user?.role === "vet_admin") {
              notifyError("you are not a user!");
              handleLogut();
            } else {
              // if(res.data.user.data.)
              if (
                res.data?.data?.user?.already_connected === true
                // res.data?.data?.user?.completed_medical_report === true
              ) {
                navigate("/user/vet-lists");
              } else {
                navigate("/user/login/phone-connect", {
                  state: {
                    user: res.data?.user,
                  },
                });
              }
            }
          });
        } catch (error) {
          console.error(error);
        }
      },
    });
    client.requestCode();
  }

  // const signOut = () => {
  //   setIsLoggedIn(false);
  //   sessionStorage.clear();
  // };
  return (
    <section className="flex flex-col justify-center items-center bg-primary pb-16 px-4 pt-8 border-[1px] border-[#EAEAEB]">
      {/* Same as */}

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
          <button
            type="submit"
            className={`w-full rounded-lg py-3 px-4 outline-none text-white bg-secondary `}
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
              "Accedi"
            )}
          </button>

          <div>
            <button
              onClick={handleGoogle}
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
