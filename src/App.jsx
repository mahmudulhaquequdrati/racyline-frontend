import { Route, Routes } from "react-router-dom";
import Dashboard from "./pagers/VetDashboard/Dashboard";
import Header from "./components/common/Header";
import RegistrationAvailabilities from "./pagers/Vets/RegistrationAvailabilities/RegistrationAvailabilities";

const App = () => {
  return (
    <main className="">
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/registration-availabilities"
          element={<RegistrationAvailabilities />}
        />
      </Routes>

      {/* <Footer /> */}
    </main>
  );
};

export default App;
