import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/ICONS/google.svg";
import { useLoginMutation } from "../../features/auth/authApi";
import { userLoggedOut } from "../../features/auth/authSlice";
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
    sessionStorage.clear();
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
      alert("No User Found");
    }
    if (LoginInData?.data?.accessToken) {
      navigate("/user/vet-lists");
    }
  }, [isLoggedIn, LoginInData, isError, navigate]);

  async function handleGoogle() {
    var SCOPES =
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email";
    // var SCOPES = "https://www.googleapis.com/auth/calendar.events ";
    const client = window.google.accounts.oauth2.initCodeClient({
      client_id:
        "745412608351-323qm5ivn5cgpn6ipikf5k7q5dfhh9sn.apps.googleusercontent.com",
      scope: SCOPES,
      ux_mode: "popup",
      callback: async (response) => {
        try {
          if (!response.code) {
            return;
          }
          googleLogin({ code: response.code, role: "user" }).then((res) => {
            if (res?.data?.data?.user?.role === "vet_admin") {
              alert("you are not a user");
              handleLogut();
            } else {
              navigate("/user/vet-lists");
            }
          });
        } catch (error) {
          console.log(error);
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
