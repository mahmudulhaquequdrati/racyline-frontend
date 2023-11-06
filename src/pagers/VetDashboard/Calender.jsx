import { useSelector } from "react-redux";

const Calender = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="p-4 md:p-8 lg:p-20 min-h-[100vh] bg-primary">
      <div className="max-w-[1140px] w-full mx-auto">
        <h1 className="font-bold text-2xl mb-6">Calendario</h1>
        <div className="w-full md:w-1/2 bg-white p-10 rounded-md mt-3">
          <p className="text-gray-400">
            Account attualmente connesso al Calendario Google
          </p>
          <p className="font-bold text-lg">{user?.email}</p>
        </div>
        <div className="mt-8">
          <button
            className={`w-full md:w-1/2 rounded-lg py-3 px-4 outline-none  text-white bg-primary `}
          >
            Disconnetti Google Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calender;
