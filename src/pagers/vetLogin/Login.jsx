import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/ICONS/google.svg";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../features/auth/authApi";

function Login() {
  const [login, { data: LoginInData, isError }] = useLoginMutation();
  const navigate = useNavigate();
  const [googleLogin, setGoogleLogin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setGoogleLogin(false);
    login({ email, password });
  };
  useEffect(() => {
    if (isError) {
      alert("Something went wrong");
    }
    if (LoginInData?.data?.accessToken && googleLogin) {
      navigate("/registration-with-google");
    } else if (LoginInData?.data?.accessToken && !googleLogin) {
      navigate("/vets/appointment");
    }
  }, [LoginInData, isError, navigate, googleLogin]);

  /*
   * Create form to request access token from Google's OAuth 2.0 server.
   */
  function oauthSignIn() {
    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    var form = document.createElement("form");
    form.setAttribute("method", "GET"); // Send as a GET request.
    form.setAttribute("action", oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {
      client_id:
        "512829763535-rnppdojmbme1ecaaitu68ck56fk61ent.apps.googleusercontent.com",
      redirect_uri: "http://localhost:5173/login",
      response_type: "token",
      scope:
        "https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.events.readonly https://www.googleapis.com/auth/calendar.settings.readonly https://www.googleapis.com/auth/calendar.addons.execute",
      include_granted_scopes: "true",
      state: "pass-through value",
    };

    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", p);
      input.setAttribute("value", params[p]);
      form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }
  useEffect(() => {
    // Extract the access token from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("access_token");

    if (accessToken) {
      // Access token is available, you can use it or store it as needed
      console.log("Access Token:", accessToken);

      // You might want to store the access token in state, context, or send it to a server for further processing.
    } else {
      // Handle error or unauthorized access
      console.error("Access denied. No access token found.");
    }
  }, []);
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
              onClick={oauthSignIn}
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
