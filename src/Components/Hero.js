import React from 'react'
import HeroLinks from './HeroLinks';
import Button from "./Button";

import hand from "../assets/hand.svg";
import scroll from "../assets/scroll.svg";
import send from "../assets/send.svg";


const Hero = () => {
  return (
    <div data-aos="zoom-up" data-aos-duration="1000" className='px-32 md:px-40 md:h-[100vh] flex flex-col lg:flex-row justify-between items-center'>
        <HeroLinks/>
        <div className='my-14'>

            <h1 className='text-5xl font-bold flex items-center  gap-5'>Karam Kassam Alhinnawi <img src={hand} alt="" /></h1>
            <p className='mt-5 text-lg'>--- Front End Developer</p>

            <p className='mt-6'>I'm a highly motivated person who works significantly to expand my knowledge and my skills, <br /> I'm known to be a self-learner as I always try to learn new stuff </p>
          
            <Button><a href="#contact" className='flex'>Say Hello <img className='ml-3' src={send} alt="" /></a></Button>
            
            <div className='mt-20 flex items-center'>
            <img src={scroll}  alt='scroll'/>
            <p className='text-black ml-2 flex items-center'>Scroll Down <span id='scroll-down' className='mr-2'><box-icon name='down-arrow-alt' ></box-icon></span></p>
            
            </div>
        </div>
        <div id='profile-picture' className='hidden md:block w-96 md:h-96 rounded-full'></div>
    </div>
  )
}

export default Hero