import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthCheck from "../src/components/hooks/useAuthCheck.js";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import UserAppointment from "./pagers/Appointment/Appointment";
import AppointmentError from "./pagers/Appointment/AppointmentError";
import AppointmentSuccess from "./pagers/Appointment/AppointmentSuccess";
import MyAppointment from "./pagers/UserPages/MyAppointment";
import MyAppointmentEditing from "./pagers/UserPages/MyAppointmentEditing";
import UserRegistration from "./pagers/UserPages/UserRegistration";
import UserSettings from "./pagers/UserPages/UserSettings";
import AccountSetting from "./pagers/VetDashboard/AccountSetting";
import VetAppointment from "./pagers/VetDashboard/Appointment";
import Availabilities from "./pagers/VetDashboard/Availabilities";
import Calender from "./pagers/VetDashboard/Calender";
import ConnectCalender from "./pagers/VetDashboard/ConnectCalender.jsx";
import Dashboard from "./pagers/VetDashboard/Dashboard";
import UserLogin from "./pagers/userLogin/Login";
import VetLists from "./pagers/vetLists/VetLists";
import Login from "./pagers/vetLogin/Login";
import Registration from "./pagers/vetRegistration/Registration";
import RegistrationAvailabilities from "./pagers/vetRegistration/RegistrationAvailabilities";
import RegistrationGoogleCalenderConnect from "./pagers/vetRegistration/RegistrationGoogleCalenderConnect";
import RegistrationGoogleCalenderConnected from "./pagers/vetRegistration/RegistrationGoogleCalenderConnected";
import RegistrationWithGoogle from "./pagers/vetRegistration/RegistrationWithGoogle";
import UserProtected from "./routes/UserProtected";
import VetProtected from "./routes/VetProtected";

const App = () => {
  const isAuth = useAuthCheck();

  return !isAuth ? null : (
    <main className="">
      <ToastContainer />
      <Header />
      <Routes>
        {/* Public Routes  */}
        {/* Public Routes  */}
        {/* Public Routes  */}
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/registration-with-google"
          element={
            // <AuthProtected>
            <RegistrationWithGoogle />
            // </AuthProtected>
          }
        />

        <Route
          path="/registration-google-calender-connect"
          element={
            // <AuthProtected>
            <RegistrationGoogleCalenderConnect />
            // </AuthProtected>
          }
        />
        <Route
          path="/registration-google-calender-connected"
          element={
            // <AuthProtected>
            <RegistrationGoogleCalenderConnected />
            // </AuthProtected>
          }
        />
        <Route
          path="/vets/registration-availabilities"
          element={
            <VetProtected>
              <RegistrationAvailabilities />
            </VetProtected>
          }
        />
        {/* Vets Routes  */}
        {/* Vets Routes  */}
        {/* Vets Routes  */}
        <Route
          path="/vets/registration"
          element={
            // <PublicRoute>
            <Registration />
            // </PublicRoute>
          }
        />
        <Route
          path="/vets/login"
          element={
            // <PublicRoute>
            <Login />
            // </PublicRoute>
          }
        />
        <Route
          path="/vets/my-appointment"
          element={
            <VetProtected>
              <VetAppointment />
            </VetProtected>
          }
        />
        <Route
          path="/vets/accountsettings"
          element={
            <VetProtected>
              <AccountSetting />
            </VetProtected>
          }
        />
        <Route
          path="/vets/MyAvailabilities"
          element={
            <VetProtected>
              <Availabilities />
            </VetProtected>
          }
        />
        <Route
          path="/vets/calender"
          element={
            <VetProtected>
              <Calender />
            </VetProtected>
          }
        />
        <Route
          path="/vets/calender-connected"
          element={
            <VetProtected>
              <ConnectCalender />
            </VetProtected>
          }
        />
        {/* User Routes  */}
        {/* User Routes  */}
        {/* User Routes  */}
        <Route
          path="/user/registration"
          element={
            // <PublicRoute>
            <UserRegistration />
            // </PublicRoute>
          }
        />
        <Route
          path="/user/login"
          element={
            // <PublicRoute>
            <UserLogin />
            // </PublicRoute>
          }
        />
        <Route
          path="/user/vet-lists"
          element={
            <UserProtected>
              <VetLists />
            </UserProtected>
          }
        />
        <Route
          path="/user/new-appointment"
          element={
            <UserProtected>
              <UserAppointment />
            </UserProtected>
          }
        />
        <Route
          path="/user/appointment-success"
          element={
            <UserProtected>
              <AppointmentSuccess />
            </UserProtected>
          }
        />
        <Route
          path="/user/appointment-error"
          element={
            <UserProtected>
              <AppointmentError />
            </UserProtected>
          }
        />
        <Route
          path="/user/my-appointment"
          element={
            <UserProtected>
              <MyAppointment />
            </UserProtected>
          }
        />
        <Route
          path="/user/my-appointment/:id"
          element={
            <UserProtected>
              <MyAppointmentEditing />
            </UserProtected>
          }
        />
        <Route
          path="/user/accountsettings"
          element={
            <UserProtected>
              <UserSettings />
            </UserProtected>
          }
        />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
