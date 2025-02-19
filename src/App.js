import React from "react";
import "./App.css"
import RouterLink from "./Componets/RouterLink";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./Componets/Home/Home";
import PrivacyPolicy from "./Componets/policy/PrivacyPolicy";
import Cookie from "./Componets/cookies/Cookie";
import Refund from "./Componets/RefundCancel/Refund";
import Term from "./Componets/term/Term";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<Cookie />} />
          <Route path="/refund-policy" element={<Refund />} />
          <Route path="/terms-and-conditions" element={<Term />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
