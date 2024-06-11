import React from 'react';

import htmlImg from "../assets/pngwing.com (html).png";
import cssImg from "../assets/pngwing.com (1).png";
import javascriptImg from "../assets/pngwing.com (js).png";
import jqueryImg from "../assets/pngwing.com (2).png";
import typeScriptImg from "../assets/typescript.png"

import reactImg from "../assets/react.png";
import githubImg from "../assets/pngwing.com (github).png";
import tailwindImg from "../assets/pngwing.com (4).png";
import bootstrapImg from "../assets/pngwing.com (3).png";
import sassImg from "../assets/pngwing.com (5).png";


const skillsList = [
    {name: "Html", img: htmlImg, id: "small",},
    {name: "CSS", img: cssImg, id: "small"},
    {name: "JavaScript", img: javascriptImg},
    {name: "React", img: reactImg},
    {name: "TypeScript", img: typeScriptImg, id: "mid-small"},
    {name: "Jquery", img: jqueryImg},
    {name: "Tailwind", img: tailwindImg},
    {name: "Bootstrap", img: bootstrapImg, id: "mid-small"},
    {name: "SCSS", img: sassImg, id: "mid-small"},
    {name: "GitHub", img: githubImg},
]


const Skills = () => {
  return (
    <div id='skills' data-aos="zoom-up" data-aos-duration="1000" className='md:my-24 flex flex-col items-center justify-center text-black'>
       <h2 className='font-bold text-5xl'>Skills</h2>
       <p className='mt-2'>My Technical Skills</p>

      <div id='skills' className="mt-5 grid lg:grid-cols-5 grid-cols-2 grid-rows-2 gap-x-24 rounded-xl border-x-2 border-t-2 border-black shadow-md shadow-slate-300">
       
       {/* <div className='flex gap-x-10'> */}
        {skillsList.map((skill) => 
          <div className='text-center mt-6 flex flex-col items-center justify-center skill px-6 py-4 rounded-xl'>
            <img src={skill.img} id={skill.id} className='w-32 pb-4' alt="" />
            <p className='font-semibold text-xl'>{skill.name}</p>
          </div>
        )}
       {/* </div> */}


      </div>

    </div>
  )
}

export default Skills