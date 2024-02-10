import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Footer from "./components/footer/Footer.jsx";
import QuoteOne from "./components/quoteOne/QuoteOne.jsx";
import Me from "./components/me/Me.jsx";
import QuoteTwo from "./components/quoteTwo/QuoteTwo.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Caltech from "./components/caltech/Caltech";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <div className="all">

        <Routes>
          <Route path="/login" element={
                  <Login />          
          } />
          <Route
            path="/"
            element={
              <>
        <Navbar />
        <Caltech />
        <QuoteOne />
        
        <Entries />

        <QuoteTwo />
        <Me />
              </>
            }
          />
        </Routes>


      <Footer />
      </div>
      </Router>
    </>
  );
}

export default App;
