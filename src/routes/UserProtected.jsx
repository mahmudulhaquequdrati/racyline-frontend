import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const UserProtected = ({ children }) => {
  const location = useLocation();

  const state = useSelector((state) => state.auth);

  const { user, accessToken } = state || {};

  return user && user?.role === "user" && accessToken ? (
    children
  ) : (
    <Navigate to={{ pathname: "/user/login", state: { from: location } }} />
  );
};

export default UserProtected;
