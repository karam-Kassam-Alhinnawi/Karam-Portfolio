import { useEffect } from "react";
import "./App.css";
// Import Scroll Animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Compnents
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";

import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";

import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

// Import Font Icons
import 'boxicons';

function App() {
  // Initilize the AOS Animation Library
  useEffect(() => {
    AOS.init();
  })

  return (
    <div >
     <Navbar/>
     <Hero/>
     <AboutMe/>
     <Skills/>
     <Services/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
