// import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { Moon, Sun } from "lucide-react";


export default function Navbar({darkMode, setdarkMode}){
  const [onScrollColor, setOnScrollColor] = useState("transparent");

  useEffect(() => {
    if(darkMode) setOnScrollColor("black");
    if(!darkMode) setOnScrollColor("white");
    
    // Change the color of the navbar on scroll

    window.onscroll = () =>{

      if(window.scrollY > 50){
        setOnScrollColor("white");
      } 

      else{
        setOnScrollColor("transparent");
      }
    }
  });



   return(
     <header className="navbar p-4 flex-wrap flex w-full items-center sticky top-0 z-20 justify-between md:px-32 transition-all duration-1000"
      style={{background: onScrollColor}}>

       <div className="logo flex items-center text-white">
        <p className="text-[22px] text-black dark:text-white">Karam</p>
       </div>
       
       <NavLinks darkMode={darkMode} setdarkMode={setdarkMode}/>

      <button className="hidden md:flex" onClick={() => setdarkMode(!darkMode)}>{darkMode ? <Sun/> : <Moon/>}</button>

     </header>
   )
}