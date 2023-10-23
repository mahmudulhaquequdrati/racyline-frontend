import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="px-4 md:px-8 py-6 container mx-auto bg-[#fff] flex justify-between items-center">
      <div className="">
        <img src={logo} className="w-[80%] md:w-[100%]" alt="logo" />
      </div>
      <div className="flex gap-3 md:gap-8 uppercase">
        <h2 className="text-sm md:text-base">Sei un medico veterinario? </h2>
        <h2
          onClick={() => navigate("/login")}
          className="text-[#E8971F] cursor-pointer"
        >
          accedi
        </h2>
      </div>
    </div>
  );
}
