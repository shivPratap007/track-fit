import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import LoginPage from "./components/loginPage/LoginPage.jsx";
import Entries from "./components/Tracker/Entries";
import Footer from "./components/footer/Footer.jsx";
import QuoteOne from "./components/quoteOne/QuoteOne.jsx";
import Me from "./components/me/Me.jsx";
import QuoteTwo from "./components/quoteTwo/QuoteTwo.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Caltech from "./components/caltech/Caltech";
import BMI from "./components/BMI/bmi.jsx";
import IdealWeightForm from "./components/IdealWeightForm/IdealWeightForm.jsx";
import { Signup } from "./components/signup/signup.jsx";


function App() {
  return (
    
    <BrowserRouter>
      <div className="all">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/bmi" element={<BMI />} />
          <Route path="/idealWeight" element={<IdealWeightForm/>} />
          <Route path="/signup" element={<Signup/>} />

          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            {/* <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;