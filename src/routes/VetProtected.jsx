import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useProfile } from "../components/hooks/userHooks";

const VetProtected = ({ children }) => {
  const location = useLocation();
  // const { userProfile, loading } = useProfile();
  const { loading } = useProfile();

  const state = useSelector((state) => state.auth);

  const { user, accessToken } = state || {};

  if (loading) {
    return;
  }

  console.log(user);

  return user && user?.role === "vet_admin" && accessToken && !loading ? (
    children
  ) : (
    <Navigate to={{ pathname: "/vets/login", state: { from: location } }} />
  );
};

export default VetProtected;
