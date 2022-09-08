import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
