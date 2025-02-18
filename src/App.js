import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router> {/* ✅ Move Router to wrap everything */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/paymentpartner" element={<Paymentpartner />} />
        <Route path="/rummy-site" element={<RummySite />} />
        <Route path="/winner" element={<Winner />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<Cookie />} />
        <Route path="/refund-policy" element={<Refund />} />
        <Route path="/terms-and-conditions" element={<Term />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
