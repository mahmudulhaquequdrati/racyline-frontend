import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/ICONS/google.svg";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../features/auth/authApi";
function Login() {
  const [login, { data: LoginInData, isError }] = useLoginMutation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  useEffect(() => {
    if (isError) {
      alert("Something went wrong");
    }
    if (LoginInData?.data?.accessToken) {
      console.log("came");
      navigate("/");
    }
  }, [LoginInData, isError, navigate]);

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
              // onClick={handleAuthorize}
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
