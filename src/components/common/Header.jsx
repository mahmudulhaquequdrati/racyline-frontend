import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import DropDown from "./Dropdown";
export default function Header() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);

  const { user, accessToken } = state || {};
  const location = useLocation();
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
            {user?.role === "vet_admin" && (
              <div>
                <Link
                  to="/vets/my-appointment"
                  className={`${
                    location?.pathname == "/vets/my-appointment"
                      ? "bg-primary text-gray-800"
                      : "text-gray-900"
                  } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                >
                  Appointment List
                </Link>
                <Link
                  to="/vets/accountsettings"
                  className={`${
                    location?.pathname == "/vets/accountsettings"
                      ? "bg-primary text-gray-800"
                      : "text-gray-900"
                  } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                >
                  Account Settings
                </Link>
                <Link
                  to="/vets/MyAvailabilities"
                  className={`${
                    location?.pathname == "/vets/MyAvailabilities"
                      ? "bg-primary text-gray-800"
                      : "text-gray-900"
                  } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                >
                  Availability
                </Link>
                <Link
                  to="/vets/calender"
                  className={`${
                    location?.pathname == "/vets/calender"
                      ? "bg-primary text-gray-800"
                      : "text-gray-900"
                  } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                >
                  Calendar
                </Link>
              </div>
            )}
            <div>
              <DropDown />
            </div>
          </div>
        )}
        {/* {user?.role === "user" && !user?.completed_medical_report && (
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
        )} */}
      </div>
    </div>
  );
}
