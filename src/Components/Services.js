import React from 'react';

import codeImg from "../assets/bx-code-alt.svg";
import EnglishImg from "../assets/bx-book.png";
import resumeImg from "../assets/bxs-book-content.png";

import Modal from './Modal';

const services = [
    {name: "Front End Development", description: "To this point I have been coding for over a year and i'm speclized in Front End Development, and I can make sure that you get the perfect website", imgSrc: codeImg},
    {name: "Resume Writing", description: "I have been working in the field of resume writing for over a year and a half and I design ATS friendly resumes", imgSrc: resumeImg},
    {name: "English Translating", description: "I have been working as an English translator with TED talks for about three months", imgSrc: EnglishImg}
]

const Services = () => {


    return(
        <div id='services'  className='mt-40 mb-20'>
            <div>
            
            <h2 className='font-bold text-5xl text-center'>My Services</h2>
            <p className='mt-2 mb-10 text-center'>What can I do for you</p>
 
              <div className='flex flex-col lg:flex-row items-center justify-center gap-12'>
                    {services.map((service) => 
                     <div className='w-80 h-72 lg:w-96 lg:h-96 border-16 flex flex-col items-start justify-end border-white shadow-2xl rounded-2xl
                      pb-8 lg:pb-24 pl-12'>

                       <img className='w-12' src={service.imgSrc} alt="" />
                       <h2 className='font-semibold text-2xl my-3 mt-4'>{service.name}</h2>  
                       <Modal>
                        <h2>{service.name}</h2>
                        <p className='mt-4'>{service.description}</p>
                    </Modal>  
                     </div>  
                    )}
              </div>
         </div>
        </div>
    )

}

export default Services