import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./styles/main.scss";
import NavbarComp from "./components/NavbarComp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Learn from "./pages/learn";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import Footer from "./components/Footer";
import NotFound from "./pages/notfound";

import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <div>
    <Router>
    <ScrollToTop></ScrollToTop>
      <NavbarComp />
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
    </div>
  );
}

export default App;
