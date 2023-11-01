import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import DropDown from "./Dropdown";
export default function Header() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);

  const { user, accessToken } = state || {};
  return (
    <div className="px-4 md:px-8 py-6 container mx-auto bg-[#fff] flex justify-between items-center">
      <Link to={"/"}>
        <img src={logo} className="w-[80%] md:w-[100%]" alt="logo" />
      </Link>
      {!user && !accessToken ? (
        <div className="flex gap-3 md:gap-8 uppercase">
          <h2
            // onClick={() => navigate("/login")}
            className="text-sm md:text-base cursor-pointer"
          >
            Sei un medico veterinario?{" "}
          </h2>
          <h2
            onClick={() => navigate("/user/login")}
            className={` cursor-pointer text-primary`}
          >
            accedi
          </h2>
        </div>
      ) : (
        <div>
          <DropDown />
        </div>
      )}
    </div>
  );
}
