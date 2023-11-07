import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GoogleIcon from "../../assets/ICONS/google.svg";
import {
  notifyError,
  notifySuccess,
} from "../../components/common/Toast/Toast";
import { useUpdateUserDataMutation } from "../../features/userData/userDataApi";

const UserSettings = () => {
  const { user } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({
    first_name: user?.first_name,
    last_name: user?.last_name,
    phone: user?.phone,
    email: user?.email,
  });

  const [updateUserData, { data, isLoading, isError, isSuccess }] =
    useUpdateUserDataMutation();

  const handleSubmitData = () => {
    const updatedData = {
      _id: user?._id,
      first_name: userData?.first_name,
      last_name: userData?.last_name,
      phone: userData?.phone,
      email: userData?.email,
      role: "user",
    };
    updateUserData(updatedData);
  };

  useEffect(() => {
    if (!isLoading && data?.data?._id) {
      const { email, first_name, last_name, phone, _id } = data?.data;
      notifySuccess("user data updated!");
      setUserData({ first_name, last_name, phone, email });
    }
    if (!isLoading && isError) {
      notifyError("Error occurd while updating data!");
    }
  }, [data?.data?._id]);

  return (
    <div className="p-4 md:p-8 lg:p-20 min-h-[100vh] bg-primary">
      <div className="max-w-[1150px] w-full mx-auto">
        <div className="max-w-[570px] w-full">
          <div className="w-full">
            <h1 className="text-[32px] font-bold">Impostazioni dell’account</h1>
            <p className="font-bold mt-5 mb-3">Anagrafica</p>
            <div className="flex flex-col gap-[14px]">
              <div className="w-full">
                <input
                  type="text"
                  value={userData?.first_name}
                  onChange={(e) => {
                    setUserData({ ...userData, first_name: e.target.value });
                  }}
                  className="rounded-lg py-2 px-4 outline-none border-[1px] border-none shadow w-full"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  value={userData?.last_name}
                  onChange={(e) => {
                    setUserData({ ...userData, last_name: e.target.value });
                  }}
                  className="rounded-lg py-2 px-4 outline-none border-[1px] border-none shadow w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-5">
            <div className="w-full mt-5">
              <p className="font-bold mb-3">Contatto</p>
              <div className="w-full flex flex-col gap-[14px]">
                <div className="w-full">
                  <input
                    type="number"
                    value={userData?.phone}
                    onChange={(e) => {
                      setUserData({ ...userData, phone: e.target.value });
                    }}
                    placeholder="23454356"
                    className="rounded-lg py-2 px-4  bg-white text-black outline-none border-[1px] border-none shadow w-full"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={userData?.email}
                    onChange={(e) => {
                      setUserData({ ...userData, email: e.target.value });
                    }}
                    disabled
                    className="rounded-lg py-2 px-4 bg-[#F3FEFE] text-[#00000066] outline-none border-[1px] border-none shadow w-full"
                  />
                </div>
              </div>
              <p className="flex items-center mt-4 mb-4 text-sm w-full">
                <img src={GoogleIcon} alt="" />
                <span className="ml-2">
                  Hai effettuato l’accesso con il tuo account Google
                </span>
              </p>
            </div>
          </div>

          <div className="w-full mt-12">
            <button
              onClick={handleSubmitData}
              className={`w-full rounded-lg py-2 px-4 outline-none  text-white bg-secondary`}
            >
              Salva
            </button>
          </div>
          <div className="w-full mt-3">
            <button
              className={`w-full rounded-lg py-2 px-4  outline-none border-[1px] text-primary border-primary `}
            >
              Elimina il mio account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
