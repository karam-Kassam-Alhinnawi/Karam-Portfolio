import React from 'react';

import profilePicture from "../assets/412351473_394017396487168_7595375978997445629_n.webp";
import filesIcon from "../assets/files.svg";
import resume from "../assets/my-resume.docx"

import Button from './Button';

const about = [
    {icon:"award", name:"Experience", value: "1+ Year"},
    {icon:"briefcase-alt", name:"Completed", value: "10+ Projects"},
    {icon:"location-plus", name:"Based In", value: "Syria"},
]

const AboutMe = () => {
  return (
    <div id='about' data-aos="zoom-in" data-aos-duration="1000" className='md:px-40 mt-30 flex flex-col items-center justify-center text-black'>
       <h2 className='font-bold text-5xl'>About Me</h2>
       <p className='mt-2'>My Introduction</p>

      <div className='flex flex-col items-center md:flex-row md:justify-between my-20'>
        <img src={profilePicture} className='w-72 h-72  md:w-96 md:h-96 rounded-lg shadow-2xl' alt="" />

        <div className="flex flex-col ml-2 items-center md:items-start mt-4 lg:ml-24">
         
        <div className="flex items-center flex-row gap-3 md:gap-5">
          {about.map((info) => 
             <div className='flex flex-col items-center justify-center shadow-xl border p-3 w-[120px] h-32 md:w-32 rounded-lg'>
         
             <box-icon type='icon' name={info.icon}></box-icon>
             <p className='my-2 font-semibold'>{info.name}</p>
             <p>{info.value}</p>

             </div>
          )}
        </div>

        <p className='mt-6 max-w-[400px] text-center md:text-left'>I'm a highly motivated developer based in Syria, I always try to keep up with the latest technoliges and make the websites <span className='font-bold'>pexel perfect</span></p>
   
        <a href={resume} download><Button>Download CV <img src={filesIcon} alt="" /></Button></a>

        </div>

      </div>

    </div>
  )
}

export default AboutMe