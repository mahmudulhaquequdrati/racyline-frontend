import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  notifyError,
  notifySuccess,
} from "../../components/common/Toast/Toast";
import {
  useGoogleCalenderInfoQuery,
  useRemoveGoogleCalenderMutation,
} from "../../features/userData/userDataApi";

const Calender = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    data: googleCalenderResponse,
    isLoading,
    refetch,
  } = useGoogleCalenderInfoQuery({ userId: user?._id }, { skip: !user?._id });

  const [removeGoogleCalender, { data: isRemoveCalenderResponse }] =
    useRemoveGoogleCalenderMutation();

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
              // console.log(res);
              if (res?.data) {
                refetch();
                notifySuccess("Calendario di Google collegato!");
              }
            })
            .catch((err) => {
              notifyError(err?.response?.data?.message);
            });
        } catch (error) {
          console.error(error);
        }
      },
    });
    client.requestCode();
  }

  const handleRemoveGoogleCalender = () => {
    removeGoogleCalender({ userId: user?._id });
  };

  useEffect(() => {
    if (isRemoveCalenderResponse?.data?._id) {
      refetch();
      notifySuccess("Calendario di Google Disconnesso!");
    }
  }, [isRemoveCalenderResponse?.data?._id, refetch]);

  return (
    <>
      {googleCalenderResponse?.data?.email ? (
        <div className="">
          <div className=" w-full mx-auto">
            <h1 className="font-bold text-2xl mb-6">Calendario</h1>
            <div className="w-full md:w-1/2 bg-white p-10 rounded-md mt-3">
              <p className="text-gray-400">
                Account attualmente connesso al Calendario Google
              </p>
              <p className="font-bold text-lg">
                {googleCalenderResponse?.data?.email}
              </p>
            </div>
            <div className="mt-8">
              <button
                onClick={handleRemoveGoogleCalender}
                className={`w-full md:w-1/2 rounded-lg py-3 px-4 outline-none  text-white bg-secondary `}
              >
                Disconnetti Google Calendar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 md:p-8 lg:p-20 min-h-[100vh] bg-primary">
          <div className="max-w-[1140px] w-full mx-auto">
            <h1 className="font-bold text-2xl mb-6">Calendario</h1>
            <div className="w-full md:w-1/2 bg-white p-10 rounded-md mt-3">
              <p className="text-[22px] font-semibold mb-6 leading-8">
                Sincronizza i tuoi appuntamenti con il tuo Calendario Google
              </p>
              <p className="text-[15px] font-normal text-gray-400 leading-6">
                Se vuoi fai puoi connettere il tuo calendario Google e
                sincronizzare tutti gli appuntamenti dei tuoi clienti sul tuo
                calendario.
              </p>
            </div>
            <div className="mt-8">
              <button
                onClick={handleGoogle}
                className={`w-full md:w-1/2 rounded-lg py-3 px-4 outline-none  text-white bg-secondary `}
              >
                Connetti a Google Calendar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Calender;
