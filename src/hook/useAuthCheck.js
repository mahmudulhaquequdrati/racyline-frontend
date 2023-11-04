import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetUserInfoQuery } from "../features/auth/authApi";
import { getUserInfo } from "../features/auth/authSlice";

const useAuthCheck = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);
  const { user, accessToken } = state || {};

  const {
    data: userData,
    isLoading,
    isError,
  } = useGetUserInfoQuery(undefined, { skip: !user?._id });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!accessToken) {
      navigate("user/login");
      setIsAuth(true);
    }

    if (!isLoading && !isError && userData?.user?._id) {
      setIsAuth(true);
      dispatch(getUserInfo(userData?.user));
    }
  }, [setIsAuth, isError, isLoading, accessToken, userData]);

  return isAuth;
};

export default useAuthCheck;
