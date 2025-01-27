import "./App.css";
import Dashboard from "./Componets/Dashboard/Dashboard";
import Footer from "./Componets/Footer/Footer";
import Navbar from "./Componets/Navbar/Navbar";
import Paymentpartner from "./Componets/Paymentpartner/Paymentpartner";
import Reward from "./Componets/Reward/Reward";
import RummySite from "./Componets/RummySite/RummySite";
import Winner from "./Componets/Winner/Winner";

function App() {
  return (
    <>
      <Navbar />
      <Dashboard/>
      <Reward/>
      <Paymentpartner/>
      <RummySite/>
      <Winner/>
      <Footer/>
    </>
  );
}

export default App;
