import React from "react";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  return (
    <div>
      <NavbarComp />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
