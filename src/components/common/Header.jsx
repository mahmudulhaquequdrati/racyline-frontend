import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import DropDown from "./Dropdown";
import { primary_color } from "../../../constant";
export default function Header() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);

  const { user, accessToken } = state || {};
  return (
    <div className="px-4 md:px-8 py-6 container mx-auto bg-[#fff] flex justify-between items-center">
      <div className="">
        <Link to={"/"}>
          <img src={logo} className="w-[80%] md:w-[100%]" alt="logo" />
        </Link>
      </div>
      {!user && !accessToken ? (
        <div className="flex gap-3 md:gap-8 uppercase">
          <h2 className="text-sm md:text-base">Sei un medico veterinario? </h2>
          <h2
            onClick={() => navigate("/login")}
            className={`${primary_color} cursor-pointer`}
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
