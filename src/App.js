import React from "react";
import "./App.css"
import Footer from "./Componets/Footer/Footer";
import Navbar from "./Componets/Navbar/Navbar";
import Dashboard from "./Componets/Dashboard/Dashboard";
import Reward from "./Componets/Reward/Reward";
import Paymentpartner from "./Componets/Paymentpartner/Paymentpartner";
import RummySite from "./Componets/RummySite/RummySite";
import Testimonials from "./Componets/Testimonials/Testimonials";
import Winner from "./Componets/Winner/Winner";
import RouterLink from "./Componets/RouterLink";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Dashboard />
      <Reward />
      <Paymentpartner />
      <RummySite />
      <Winner />
      <Testimonials />
      <Footer />
      <RouterLink />
      </BrowserRouter>
    </>
  );
}

export default App;
