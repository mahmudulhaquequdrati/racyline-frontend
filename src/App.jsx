import { Route, Routes } from "react-router-dom";
import Dashboard from "./pagers/VetDashboard/Dashboard";
import Header from "./components/common/Header";

const App = () => {
  return (
    <main className="">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      {/* <Footer /> */}
    </main>
  );
};

export default App;
