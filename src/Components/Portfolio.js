import React from 'react';

import HoobankImg from "../assets/hoobank.webp";
import crudImg from "../assets/crud.png";
import adminPage from "../assets/karam-admin.png";
import { ArrowRight } from 'lucide-react';


const projects = [
  {name: "Hoobank Landing Page" , link: "https://karam069.github.io/Hoobank/", img: HoobankImg},
  {name: "Management System" , link: "https://karam069.github.io/Crud/", img: crudImg},
  {name: "Admin Page" , link: "https://karam069.github.io/karam-admin/", img: adminPage},
]

const Portfolio = () => {
  return (
    <div data-aos='zoom-up' data-aos-duration='1400' id='portfolio' className='md:px-40 my-32 flex flex-col items-center justify-center text-black'>

       <h2 className='font-bold text-5xl'>My Portfolio</h2>
       <p className='mt-2'>My latest Projects</p>

       <div className="projects flex items-center justify-center mt-20">

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">

          {projects.map((project) => 
          <div className='rounded-lg w-96 h-72 border-2 border-black shadow-2xl flex flex-col items-start justify-start pt-5'>
            <img className='w-[320px] h-[170px] rounded-xl mb-4 ml-6' src={project.img} alt="" />
            <h4 className='ml-6 font-semibold text-lg'>{project.name}</h4>
            <a className='ml-6 mt-3 flex' href={project.link} target='_blank'>Live Demo <span className='ml-2'><ArrowRight/></span> </a>
          </div>

          )}
          </div>

       </div>

    </div>
  )
}

export default Portfolio