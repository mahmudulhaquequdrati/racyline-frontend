import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function VetsDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="bg-primary">
      <div className="flex gap-4 px-10 w-full py-20 ">
        <div className="hidden md:block w-max bg-white h-[200px] p-5 lg:p-7 rounded-md">
          <div className="flex flex-col gap-2">
            <div
              onClick={() => navigate("/vets/my-appointment")}
              className={`cursor-pointer flex items-center gap-2 ${
                location.pathname !== "/vets/my-appointment"
                  ? "text-gray-400"
                  : ""
              }`}
            >
              <div>Gestisci gli appuntamenti</div>
              {location.pathname === "/vets/my-appointment" && (
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              )}
            </div>
            <div
              onClick={() => navigate("/vets/MyAvailabilities")}
              className={`cursor-pointer flex items-center gap-2 ${
                location.pathname !== "/vets/MyAvailabilities"
                  ? "text-gray-400"
                  : ""
              }`}
            >
              <div>Le mie disponibilità</div>
              {location.pathname === "/vets/MyAvailabilities" && (
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              )}
            </div>
            <div
              onClick={() => navigate("/vets/accountsettings")}
              className={`cursor-pointer flex items-center gap-2 ${
                location.pathname !== "/vets/accountsettings"
                  ? "text-gray-400"
                  : ""
              }`}
            >
              <div>Impostazioni dell’account</div>
              {location.pathname === "/vets/accountsettings" && (
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              )}
            </div>
            <div
              onClick={() => navigate("/vets/calender")}
              className={`cursor-pointer flex items-center gap-2 ${
                location.pathname !== "/vets/calender" ? "text-gray-400" : ""
              }`}
            >
              <div>Calendario</div>
              {location.pathname === "/vets/calender" && (
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-[75%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
