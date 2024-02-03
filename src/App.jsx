import React from "react";
import { Routes, Route } from "react-router-dom";
import Photo from "./components/Photo";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Career from "./components/Career";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="main_container">
      <div className="photo_container">
        <Photo />
      </div>
      <div className="header_container">
        <Header />
      </div>
      <div className="navigation_container">
        <Navigation />
      </div>
      <div className="content_container">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career" element={<Career />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
