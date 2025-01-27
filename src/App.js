import "./App.css";
import Dashboard from "./Componets/Dashboard/Dashboard";
import Navbar from "./Componets/Navbar/Navbar";
import Paymentpartner from "./Componets/Paymentpartner/Paymentpartner";
import Reward from "./Componets/Reward/Reward";
import RummySite from "./Componets/RummySite/RummySite";

function App() {
  return (
    <>
      <Navbar />
      <Dashboard/>
      <Reward/>
      <Paymentpartner/>
      <RummySite/>
    </>
  );
}

export default App;
