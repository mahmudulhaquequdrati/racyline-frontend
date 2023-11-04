import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useProfile } from "../components/hooks/userHooks";

const UserProtected = ({ children }) => {
  const location = useLocation();
  // const { userProfile, loading } = useProfile();
  const { loading } = useProfile();

  const state = useSelector((state) => state.auth);

  const { user, accessToken } = state || {};

  if (loading) {
    return;
  }

  return user && user?.role === "user" && accessToken && !loading ? (
    children
  ) : (
    <Navigate to={{ pathname: "/user/login", state: { from: location } }} />
  );
};

export default UserProtected;
