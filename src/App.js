import { useEffect, useState } from "react";
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
  const [darkMode, setdarkMode] = useState(true);
  // Initilize the AOS Animation Library
  useEffect(() => {
    AOS.init();
  })

  return (

    <div className={`${darkMode && "dark"}`}>
     <Navbar darkMode={darkMode} setdarkMode={setdarkMode}/>
     <Hero darkMode={darkMode} setDarkMode={setdarkMode}/>
     <AboutMe/>
     <Skills/>
     <Services darkMode={darkMode}/>
     <Portfolio />
     <Contact darkMode={darkMode}/>
     <Footer />
    </div>
  );
}

export default App;
