import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Appointment from "./pagers/Appointment/Appointment";
import AppointmentError from "./pagers/Appointment/AppointmentError";
import AppointmentSuccess from "./pagers/Appointment/AppointmentSuccess";
import Dashboard from "./pagers/VetDashboard/Dashboard";
import VetLists from "./pagers/vetLists/vetLists";
import Login from "./pagers/vetLogin/Login";
import Registration from "./pagers/vetRegistration/Registration";
import RegistrationGoogleCalenderConnect from "./pagers/vetRegistration/RegistrationGoogleCalenderConnect";
import RegistrationGoogleCalenderConnected from "./pagers/vetRegistration/RegistrationGoogleCalenderConnected";
import RegistrationWithGoogle from "./pagers/vetRegistration/RegistrationWithGoogle";
import AuthProtected from "./routes/AuthProtected";
// import PublicRoute from "./routes/PublicRoutes";
import MyAppointment from "./pagers/UserPages/MyAppointment";
import MyAppointmentEditing from "./pagers/UserPages/MyAppointmentEditing";
import UserSettings from "./pagers/UserPages/UserSettings";
import AccountSetting from "./pagers/VetDashboard/AccountSetting";
import Availabilities from "./pagers/VetDashboard/Availabilities";
import Calender from "./pagers/VetDashboard/Calender";
import UserLogin from "./pagers/userLogin/Login";
// import DefaultLayout from "./pagers/adminPages/DefaultLayout";
// import AllAppointment from "./pagers/adminPages/AllAppointment";

const App = () => {
  return (
    <main className="">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/login"
          element={
            // <PublicRoute>
            <Login />
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
            <AuthProtected>
              <RegistrationWithGoogle />
            </AuthProtected>
          }
        />
        <Route
          path="/registration-google-calender-connect"
          element={
            <AuthProtected>
              <RegistrationGoogleCalenderConnect />
            </AuthProtected>
          }
        />
        <Route
          path="/registration-google-calender-connected"
          element={
            <AuthProtected>
              <RegistrationGoogleCalenderConnected />
            </AuthProtected>
          }
        />
        <Route
          path="/vets/appointment"
          element={
            <AuthProtected>
              <Appointment />
            </AuthProtected>
          }
        />
        <Route
          path="/appointment-success"
          element={
            <AuthProtected>
              <AppointmentSuccess />
            </AuthProtected>
          }
        />
        <Route
          path="/appointment-error"
          element={
            <AuthProtected>
              <AppointmentError />
            </AuthProtected>
          }
        />
        <Route
          path="/user/settings"
          element={
            <AuthProtected>
              <UserSettings />
            </AuthProtected>
          }
        />
        <Route
          path="/user/my-appointment"
          element={
            <AuthProtected>
              <MyAppointment />
            </AuthProtected>
          }
        />
        <Route
          path="/user/my-appointment-editing"
          element={
            <AuthProtected>
              <MyAppointmentEditing />
            </AuthProtected>
          }
        />
        <Route
          path="/vets/accountsettings"
          element={
            // <AuthProtected>
            <AccountSetting />
            // </AuthProtected>
          }
        />
        <Route
          path="/vets/availabilities"
          element={
            <AuthProtected>
              <Availabilities />
            </AuthProtected>
          }
        />
        <Route
          path="/vets/calender"
          element={
            <AuthProtected>
              <Calender />
            </AuthProtected>
          }
        />
        <Route path="/vet-lists" element={<VetLists />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
