// import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";


export default function Navbar(){
  const [onScrollColor, setOnScrollColor] = useState("transparent");

  useEffect(() => {
    // Change the color of the navbar on scroll
    window.onscroll = () =>{
      if(window.scrollY > 50){
        setOnScrollColor("white");
      } else{
        setOnScrollColor("transparent")
      }
    }
  })

   return(
     <header className=" p-4 flex-wrap flex w-full items-center sticky top-0 z-20 justify-between md:px-32 transition-all duration-1000"
      style={{background: onScrollColor}}>

       <div className="logo flex items-center text-white">
        <p className="text-[22px] text-black">Karam</p>
       </div>
       
       <NavLinks/>
     </header>
   )
}