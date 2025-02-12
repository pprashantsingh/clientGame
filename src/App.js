import "./App.css";
import Cookie from "./Componets/cookies/Cookie";
import Dashboard from "./Componets/Dashboard/Dashboard";
import Footer from "./Componets/Footer/Footer";
import Navbar from "./Componets/Navbar/Navbar";
import Paymentpartner from "./Componets/Paymentpartner/Paymentpartner";
import PrivacyPolicy from "./Componets/policy/PrivacyPolicy";
import Refund from "./Componets/RefundCancel/Refund";
import Reward from "./Componets/Reward/Reward";
import RummySite from "./Componets/RummySite/RummySite";
import Term from "./Componets/term/Term";
import Testimonials from "./Componets/Testimonials/Testimonials";
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
      <Testimonials/>
      <Footer/>
      <PrivacyPolicy/>
      <Cookie/>
      <Refund/>
      <Term/>
    </>
  );
}

export default App;
