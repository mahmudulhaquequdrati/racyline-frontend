import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import DropDown from "./Dropdown";
export default function Header() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);

  const { user, accessToken } = state || {};

  return (
    <div className="px-4 md:px-8 py-[1.30rem] bg-[#fff] flex justify-center items-center">
      <div className="max-w-[1140px] w-full mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <img src={logo} className="w-[80%] md:w-[100%]" alt="logo" />
        </Link>
        {!user && !accessToken ? (
          <div className="flex gap-3 md:gap-8 uppercase ">
            <Link
              to="/vets/login"
              // onClick={() => navigate("/login")}
              className="text-sm  cursor-pointer"
            >
              Sei un medico veterinario?{" "}
            </Link>
            <h2
              onClick={() => navigate("/user/login")}
              className={` cursor-pointer text-primary text-sm`}
            >
              accedi
            </h2>
          </div>
        ) : (
          <div>
            <DropDown />
          </div>
        )}
        {user?.role === "user" && !user?.completed_medical_report && (
          <div className="flex gap-3 md:gap-8 uppercase ">
            <Link
              to="/vets/login"
              // onClick={() => navigate("/login")}
              className="text-sm  cursor-pointer"
            >
              Sei un medico veterinario?{" "}
            </Link>
            <h2
              onClick={() => navigate("/user/login")}
              className={` cursor-pointer text-primary text-sm`}
            >
              accedi
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
