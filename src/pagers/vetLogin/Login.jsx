import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/ICONS/google.svg";
import { useLoginMutation } from "../../features/auth/authApi";
import { userLoggedIn } from "../../features/auth/authSlice";
import { useGoogleLoginMutation } from "../../features/auth/googleAuthApi";

function Login() {
  const [login, { data: LoginInData, isError, isLoading }] = useLoginMutation();
  const [
    googleLogin,
    { data: googleLoginData, isError: googleError, isLoading: isGoogleLogin },
  ] = useGoogleLoginMutation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password, userType: "vet_admin" }).then((res) => {
      if (res?.data?.data?.accessToken) {
        dispatch(userLoggedIn(res?.data?.data));
        navigate("/vets/my-appointment");
      }
    });
  };
  // useEffect(() => {
  //   if (isError || googleError) {
  //     alert("No User Found");
  //   }
  //   if (LoginInData?.data?.accessToken) {
  //     dispatch(userLoggedIn(LoginInData?.data));
  //     navigate("/vets/my-appointment");
  //   }
  // }, [LoginInData, isError, navigate]);

  async function handleGoogle() {
    var SCOPES =
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email";
    // var SCOPES = "https://www.googleapis.com/auth/userinfo.email";
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
          googleLogin({ code: response.code, role: "vet_admin" }).then(
            (res) => {
              console.log(res?.data);
              if (res?.data?.data?.user?.already_connected) {
                navigate("/vets/my-appointment");
              } else {
                navigate("/registration-with-google");
              }
            }
          );
        } catch (error) {
          console.log(error);
        }
      },
    });
    client.requestCode();
  }

  return (
    <section className="flex justify-center items-center bg-primary pb-16 px-4 pt-8 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg px-4 py-12 md:p-8 lg:p-16 bg-white">
        <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
          Sei un medico veterinario?Accedi o registrati
        </h1>
        <p className="text-center text-[15px] pb-8 text-[#00000099]">
          Accedi o registrati tramite Google per diventare un medico veterinario
          di Racyline e prendere le prenotazioni dei tuoi clienti
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
                className={`w-full rounded-lg py-3 px-4 outline-none text-white bg-secondary `}
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
            <Link to={"/vets/registration"} className="no-underline">
              <p className="text-center text-[15px]">
                Non hai ancora un account?{" "}
                <span className={`text-primary`}>Registrati ora!</span>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
