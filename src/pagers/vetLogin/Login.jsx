import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/ICONS/google.svg";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../features/auth/authApi";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../features/auth/authSlice";
function Login() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const [login, { data: LoginInData, isError }] = useLoginMutation();
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const user = result.user;
        // console.log(result);
        sessionStorage.setItem(
          "authUser",
          JSON.stringify({
            accessToken: "1234",
            user: result.user,
          })
        );
        dispatch(
          userLoggedIn({
            accessToken: "1234",
            user: result.user,
          })
        );
        navigate("/registration-with-google");
      })
      .catch((error) => {
        console.log(error);
      });
    // .finally(() => setIsLoading(false));
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  // useEffect(() => {
  //   if (isError) {
  //     alert("Something went wrong");
  //   }
  //   if (LoginInData?.data?.accessToken && !googleSignIn) {
  //     console.log("came");
  //     navigate("/");
  //   }
  // }, [LoginInData, isError, navigate, googleSignIn]);
  return (
    <section className="flex justify-center items-center bg-[#FFF7EC] pb-16 pt-8 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg p-16 bg-white">
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
          <div>
            <button
              type="submit"
              className="w-full rounded-lg py-3 px-4 outline-none bg-[#E8971F] text-white"
            >
              Accedi
            </button>
          </div>
          <div>
            <button
              onClick={signInWithGoogle}
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
            <Link to={"/registration"} className="no-underline">
              <p className="text-center text-[15px]">
                Non hai ancora un account?{" "}
                <span className="text-[#E8971F]">Registrati ora!</span>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
