import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/ICONS/google.svg";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
function Login() {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const user = result.user;
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    // .finally(() => setIsLoading(false));
  };
  return (
    <section className="flex justify-center items-center bg-[#FFF7EC] py-16 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg p-16 bg-white">
        <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
          Sei un medico veterinario?Accedi o registrati
        </h1>
        <p className="text-center text-[15px] pb-8 text-[#00000099]">
          Accedi o registrati tramite Google per diventare un medico veterinario
          di Racyline e prendere le prenotazioni dei tuoi clienti
        </p>
        <form className="flex flex-col gap-y-4">
          <div>
            <input
              type="text"
              placeholder="Email"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Password"
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
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
