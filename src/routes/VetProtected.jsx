import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const VetProtected = ({ children }) => {
  const location = useLocation();
  const state = useSelector((state) => state.auth);

  const { user, accessToken } = state || {};
  return user && user?.role === "vet_admin" && accessToken && user?.active ? (
    children
  ) : (
    <Navigate to={{ pathname: "/vets/login", state: { from: location } }} />
  );
};

export default VetProtected;
