import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function RegistrationGoogleCalenderConnect() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  async function handleGoogle(e) {
    e.preventDefault();
    var SCOPES =
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar";
    const client = window.google.accounts.oauth2.initCodeClient({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      scope: SCOPES,
      ux_mode: "popup",
      callback: async (response) => {
        try {
          if (!response.code) {
            return;
          }
          axios
            .post(
              `${
                import.meta.env.VITE_SERVER_LINK
              }/guser/connect/google-calender`,
              {
                code: response.code,
                user_id: JSON.parse(localStorage.getItem("authNutraNextUser"))
                  ?.user?._id,
              }
            )
            .then((res) => {
              if (res?.data) {
                navigate("/registration-google-calender-connected");
              }
            });
        } catch (error) {
          console.error(error);
        }
      },
    });
    client.requestCode();
  }

  return (
    <section className="flex justify-center items-center bg-primary py-16 border-[1px] border-[#EAEAEB]">
      <div className="max-w-[638px] w-full  rounded-lg p-16 bg-white">
        <h1 className="text-[32px] font-bold leading-10 text-center mb-6">
          Sincronizza i tuoi appuntamenti con il tuo Calendario Google
        </h1>
        <p className="text-center text-[15px] text-[#00000099] pb-8">
          Se vuoi fai puoi connettere il tuo calendario Google e sincronizzare
          tutti gli appuntamenti dei tuoi clienti sul tuo calendario.
        </p>

        <form action="" className="flex flex-col gap-y-4">
          <div>
            <button
              onClick={handleGoogle}
              className={`w-full rounded-lg py-3 px-4 outline-none bg-secondary text-white`}
            >
              Connetti a Google Calendar
            </button>
          </div>
          <div>
            <button
              onClick={() => navigate("/vets/my-appointment")}
              className="w-full rounded-lg py-3 px-4 outline-none border-[1px] border-[#E5E7EC]"
            >
              Concludi la registrazione
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default RegistrationGoogleCalenderConnect;
