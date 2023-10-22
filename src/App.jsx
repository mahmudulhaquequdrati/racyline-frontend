import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Dashboard from "./pagers/VetDashboard/Dashboard";
import Login from "./pagers/vetLogin/Login";
import Registration from "./pagers/vetRegistration/Registration";
import RegistrationAvailabilities from "./pagers/vetRegistration/RegistrationAvailabilities";
import RegistrationGoogleCalenderConnect from "./pagers/vetRegistration/RegistrationGoogleCalenderConnect";
import RegistrationGoogleCalenderConnected from "./pagers/vetRegistration/RegistrationGoogleCalenderConnected";
import RegistrationWithGoogle from "./pagers/vetRegistration/RegistrationWithGoogle";
import firebaseAuthInit from "../firebase.init";
// import DefaultLayout from "./pagers/adminPages/DefaultLayout";
// import AllAppointment from "./pagers/adminPages/AllAppointment";

const App = () => {
  firebaseAuthInit();
  return (
    <main className="">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/registration-with-google"
          element={<RegistrationWithGoogle />}
        />
        <Route
          path="/registration-google-calender-connect"
          element={<RegistrationGoogleCalenderConnect />}
        />
        <Route
          path="/registration-google-calender-connected"
          element={<RegistrationGoogleCalenderConnected />}
        />
        <Route
          path="/registration-availabilities"
          element={<RegistrationAvailabilities />}
        />
        {/* <Route path="/admin" element={<DefaultLayout />}>
          <Route element={<AllAppointment />} />
        </Route> */}
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
