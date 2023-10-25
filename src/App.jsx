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
import Appointment from "./pagers/VetDashboard/Appointment";
import AuthProtected from "./routes/AuthProtected";
// import PublicRoute from "./routes/PublicRoutes";
import AccountSetting from "./pagers/VetDashboard/AccountSetting";
import Availabilities from "./pagers/VetDashboard/Availabilities";
import Calender from "./pagers/VetDashboard/Calender";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import DefaultLayout from "./pagers/adminPages/DefaultLayout";
// import AllAppointment from "./pagers/adminPages/AllAppointment";

const App = () => {
  return (
    <main className="">
      <GoogleOAuthProvider clientId="512829763535-rnppdojmbme1ecaaitu68ck56fk61ent.apps.googleusercontent.com">
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
            path="/registration-availabilities"
            element={
              <AuthProtected>
                <RegistrationAvailabilities />
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
            path="/vets/accountsettings"
            element={
              <AuthProtected>
                <AccountSetting />
              </AuthProtected>
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

          {/* <Route path="/admin" element={<DefaultLayout />}>
          <Route element={<AllAppointment />} />
        </Route> */}
        </Routes>
        <Footer />
      </GoogleOAuthProvider>
    </main>
  );
};

export default App;
