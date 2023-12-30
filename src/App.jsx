import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthCheck from "../src/components/hooks/useAuthCheck.js";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import AddPetsMedicalRecords from "./pagers/AnimalClinical/AddPetsMedicalRecords.jsx";
import CompleteMedicalRecord from "./pagers/AnimalClinical/CompleteMedicalRecord.jsx";
import MedicalRecord from "./pagers/AnimalClinical/MedicalRecord.jsx";
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
import LandingPage from "./pagers/VetDashboard/LandingPage";
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
import UserNumber from "./pagers/UserPages/UserNumber.jsx";
import AuthProtected from "./routes/AuthProtected.jsx";
import SingleMedicalRecord from "./pagers/AnimalClinical/SingleAnimalClinical/SingleMedicalRecord.jsx";
import CompleteSingleMedicalRecord from "./pagers/AnimalClinical/SingleAnimalClinical/CompleteSingleMedicalRecord.jsx";
import SingleAddPetsMedicalRecords from "./pagers/AnimalClinical/SingleAnimalClinical/SingleAddPetsMedicalRecords.jsx";
import moment from "moment";
const App = () => {
  const isAuth = useAuthCheck();
  moment.defineLocale("it", {
    months:
      "Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split(
        "_"
      ),
    monthsShort: "Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),
    monthsParseExact: true,
    weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split(
      "_"
    ),
    weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
    weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm",
    },
    calendar: {
      sameDay: "[Oggi alle] LT",
      nextDay: "[Domani alle] LT",
      nextWeek: "dddd [alle] LT",
      lastDay: "[Ieri alle] LT",
      lastWeek: "dddd [scorso alle] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "tra %s",
      past: "%s fa",
      s: "alcuni secondi",
      m: "un minuto",
      mm: "%d minuti",
      h: "un'ora",
      hh: "%d ore",
      d: "un giorno",
      dd: "%d giorni",
      M: "un mese",
      MM: "%d mesi",
      y: "un anno",
      yy: "%d anni",
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: "%dº",
    meridiemParse: /AM|PM/i,
    isPM: function (input) {
      return input.toLowerCase() === "pm";
    },
    meridiem: function (hours, minutes, isLower) {
      if (hours < 12) {
        return "AM";
      } else {
        return "PM";
      }
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // Used to determine first week of the year.
    },
  });

  return !isAuth ? null : (
    <main className="">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
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
          path="/vets/registration-availabilities"
          element={
            <VetProtected>
              <RegistrationAvailabilities />
            </VetProtected>
          }
        />

        {/* Vets Routes  */}
        <Route path="/vets/registration" element={<Registration />} />
        <Route path="/vets/login" element={<Login />} />
        {/* ====================== New Files Start ==================== */}
        <Route
          path="/user/all-pet-info"
          element={
            <UserProtected>
              <AddPetsMedicalRecords />
            </UserProtected>
          }
        />
        <Route
          path="/user/add-single-pet-info"
          element={<SingleAddPetsMedicalRecords />}
        />
        <Route path="/user/single-pet-info" element={<SingleMedicalRecord />} />
        <Route path="/user/add-pet-info" element={<MedicalRecord />} />
        <Route
          path="/user/complete-single-medical-record"
          element={<CompleteSingleMedicalRecord />}
        />
        <Route
          path="/user/complete-medical-record"
          element={<CompleteMedicalRecord />}
        />
        {/* ====================== New Files End ==================== */}
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
        <Route path="/user/registration" element={<UserRegistration />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route
          path="/user/login/phone-connect"
          element={
            <AuthProtected>
              <UserNumber />
            </AuthProtected>
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
