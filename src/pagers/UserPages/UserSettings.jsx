import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/ICONS/google.svg";
import {
  notifyError,
  notifySuccess,
} from "../../components/common/Toast/Toast";
import { getUserInfo, userLoggedOut } from "../../features/auth/authSlice";
import {
  useDeleteUserMutation,
  useUpdateUserDataMutation,
} from "../../features/userData/userDataApi";
import AccountDeletatioModal from "./AccountDeletationModal";
import { useGetUserInfoQuery } from "../../features/auth/authApi";

const UserSettings = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const { data: userupdate, refetch } = useGetUserInfoQuery(undefined, {
    skip: !accessToken,
  });
  const user = userupdate?.user;
  const [userData, setUserData] = useState({
    first_name: user?.first_name,
    last_name: user?.last_name,
    phone: user?.phone,
    email: user?.email,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // Updating User data through redux mutation
  const [updateUserData, { data, isLoading, isError, isSuccess }] =
    useUpdateUserDataMutation();
  // Deleting user account mutation
  const [
    deleteUser,
    { isLoading: deleteAccLoading, isSuccess: isAccountDeleted },
  ] = useDeleteUserMutation();
  console.log(user);
  // Sending data to redux query
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

  // Sending user ID for deleteing account
  const handleDeleteAcc = (userId) => {
    if (userId) {
      deleteUser(userId);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      if (data?.status === 400) {
        notifyError(data?.message);
      } else if (!isLoading && data?.data?._id) {
        refetch();
        const { email, first_name, last_name, phone, _id } = data?.data;
        notifySuccess("user data updated!");
        setUserData({ first_name, last_name, phone, email });
      }
    }

    if (!isLoading && isError) {
      notifyError("Error occurd while updating data!");
    }
  }, [isSuccess, data?.data?._id]);

  useEffect(() => {
    if (isAccountDeleted) {
      localStorage.clear();
      setIsOpen(false);
      notifySuccess("User Account Deleted!");
      dispatch(userLoggedOut());
      navigate("/user/login");
    }
  }, [isAccountDeleted, navigate]);

  return (
    <div className="p-4 md:p-8 lg:p-20 bg-primary">
      <div className="max-w-[1150px] w-full mx-auto">
        <div className="max-w-[570px] w-full">
          <div className="w-full">
            <h1 className="text-[32px] font-bold">Impostazioni dell’account</h1>
            <p className="font-bold mt-5 mb-3">Anagrafica</p>
            <div className="flex flex-col gap-[14px]">
              <div className="w-full">
                <input
                  type="text"
                  placeholder={
                    userData?.first_name ? userData?.first_name : "Cognome"
                  }
                  value={userData?.first_name}
                  onChange={(e) => {
                    setUserData({ ...userData, first_name: e.target.value });
                  }}
                  className="rounded-lg py-2 px-4 outline-none border-[1px] border-none shadow w-full placeholder:text-black"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  value={userData?.last_name}
                  placeholder={
                    userData?.last_name ? userData?.last_name : "Cognome"
                  }
                  onChange={(e) => {
                    setUserData({ ...userData, last_name: e.target.value });
                  }}
                  className="rounded-lg py-2 px-4 outline-none border-[1px] border-none shadow w-full placeholder:text-black"
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
                    placeholder={userData?.phone}
                    value={userData?.phone}
                    onChange={(e) => {
                      setUserData({ ...userData, phone: e.target.value });
                    }}
                    className="rounded-lg py-2 px-4  bg-white text-black outline-none border-[1px] border-none shadow w-full placeholder:text-black"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={userData?.email}
                    onChange={(e) => {
                      setUserData({ ...userData, email: e.target.value });
                    }}
                    disabled={user?.userLoginType === "google"}
                    className={`rounded-lg py-2 px-4  outline-none border-[1px] border-none shadow w-full ${
                      user?.userLoginType === "google"
                        ? "bg-[#F3FEFE] text-[#00000066]"
                        : ""
                    } `}
                  />
                </div>
              </div>
              {user?.userLoginType === "google" && (
                <p className="flex items-center mt-4 mb-4 text-sm w-full">
                  <img src={GoogleIcon} alt="" />
                  <span className="ml-2">
                    Hai effettuato l’accesso con il tuo account Google
                  </span>
                </p>
              )}
            </div>
          </div>

          <div className="w-full mt-12">
            <button
              onClick={handleSubmitData}
              className={`w-full rounded-lg py-2 px-4 outline-none  text-white bg-secondary`}
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
                "Salva"
              )}
            </button>
          </div>
          <div className="w-full mt-3">
            <button
              onClick={openModal}
              className={`w-full rounded-lg py-2 px-4  outline-none border-[1px] text-primary border-primary `}
            >
              {deleteAccLoading ? (
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
                "Elimina il mio account"
              )}
            </button>
          </div>
        </div>
      </div>

      <AccountDeletatioModal
        closeModal={closeModal}
        isOpen={isOpen}
        openModal={openModal}
        setIsOpen={setIsOpen}
        handleDeleteAcc={handleDeleteAcc}
        userId={user?._id}
      />
    </div>
  );
};

export default UserSettings;
