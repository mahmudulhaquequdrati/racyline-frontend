const Calender = () => {
  return (
    <div className="p-20 min-h-[100vh] bg-[#FFF7EC]">
      <h1 className="font-bold text-2xl">Calendario</h1>
      <div className="w-1/2 bg-white p-10 rounded-md mt-3">
        <p className="text-gray-400">
          Account attualmente connesso al Calendario Google
        </p>
        <p className="font-bold text-lg">marcorizzaa@gmail.com</p>
      </div>
      <div className="mt-8">
        <button className="w-1/2 rounded-lg py-3 px-4 outline-none bg-[#E8971F] text-white">
          Disconnetti Google Calendar
        </button>
      </div>
    </div>
  );
};

export default Calender;