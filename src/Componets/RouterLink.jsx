import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./policy/PrivacyPolicy";
import Cookie from "./cookies/Cookie";
import Refund from "./RefundCancel/Refund";
import Term from "./term/Term";


const RouterLink = () => {
  <>

      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/cookie-policy" element={<Cookie/>} />
        <Route path="/refund-policy" element={<Refund/>} />
        <Route path="/terms-and-conditions" element={<Term/>} />
      </Routes>

  </>;
};
export default RouterLink;
