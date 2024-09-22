import React from 'react';

import HoobankImg from "../assets/hoobank.webp";
import AudioPhile from "../assets/audioPhile.png";
import CareerCompass from "../assets/CareerCompass.png";
import { ArrowRight } from 'lucide-react';


const projects = [
  {name: "Hoobank Landing Page" , link: "https://karam-kassam-alhinnawi.github.io/Hoobank/", img: HoobankImg},
  {name: "AudioPhile Ecommerce" , link: "https://career-compass-red.vercel.app/", img: AudioPhile},
  {name: "Career Compass" , link: "https://career-compass-red.vercel.app/", img: CareerCompass},
]

const Portfolio = () => {
  return (
    <div data-aos='zoom-up' data-aos-duration='1400' id='portfolio' className='dark:bg-black py-20 flex flex-col items-center justify-center text-black'>

       <h2 className='font-bold text-5xl dark:text-white'>My Portfolio</h2>
       <p className='mt-2 dark:text-white'>My latest Projects</p>

       <div className="projects flex items-center justify-center mt-20">

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">

          {projects.map((project) => 
          <div className='rounded-lg w-80 md:w-96 h-72 border-2 border-black dark:border-white shadow-2xl dark:shadow-lg dark:shadow-white flex flex-col items-start justify-start pt-5'>
            <img className='w-64 md:w-[320px] h-[170px] rounded-xl mb-4 ml-6' src={project.img} alt="" />
            <h4 className='ml-6 font-semibold text-lg dark:text-white'>{project.name}</h4>
            <a className='ml-6 mt-3 flex dark:text-white' href={project.link} target='_blank'>Live Demo <span className='ml-2'><ArrowRight/></span> </a>
          </div>

          )}
          </div>


       </div>

       <hr className='bg-white text-white h-1 w-[100%] mt-16' />

    </div>
  )
}

export default Portfolio