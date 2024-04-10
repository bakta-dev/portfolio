import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projets from "../pages/Projets";
import About from "../pages/about";
import Services from "../pages/services";
import ContactForm from "../pages/contact";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projets" element={<Projets />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default Router;