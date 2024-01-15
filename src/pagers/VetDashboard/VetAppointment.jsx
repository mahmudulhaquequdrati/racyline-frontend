import { useSelector } from "react-redux";
import Appointment from "./Appointment";
import FakeAppointment from "./FakeAppointment";

const VetAppointment = () => {
  const { user } = useSelector((state) => state.auth);
  return <div>{user?.approved ? <Appointment /> : <FakeAppointment />}</div>;
};
export default VetAppointment;
