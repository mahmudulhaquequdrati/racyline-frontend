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
import Appointment from "./pagers/VetDashboard/Appointment";
import AuthProtected from "./routes/AuthProtected";
import PublicRoute from "./routes/PublicRoutes";
// import DefaultLayout from "./pagers/adminPages/DefaultLayout";
// import AllAppointment from "./pagers/adminPages/AllAppointment";

const App = () => {
  firebaseAuthInit();
  return (
    <main className="">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/registration"
          element={
            // <PublicRoute>
            <Registration />
            // </PublicRoute>
          }
        />
        <Route
          path="/registration-with-google"
          element={
            // <PublicRoute>
            <RegistrationWithGoogle />
            // </PublicRoute>
          }
        />
        <Route
          path="/registration-google-calender-connect"
          element={
            // <PublicRoute>
            <RegistrationGoogleCalenderConnect />
            // </PublicRoute>
          }
        />
        <Route
          path="/registration-google-calender-connected"
          element={
            // <PublicRoute>
            <RegistrationGoogleCalenderConnected />
            // </PublicRoute>
          }
        />
        <Route
          path="/registration-availabilities"
          element={
            // <PublicRoute>
            <RegistrationAvailabilities />
            // </PublicRoute>
          }
        />

        <Route
          path="/vets/appointment"
          element={
            <AuthProtected>
              <Appointment />{" "}
            </AuthProtected>
          }
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
