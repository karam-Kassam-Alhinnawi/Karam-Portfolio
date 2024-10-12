import React from 'react';

import Modal from './Modal';

const services = [
    {name: "Web Development", description: "To this point I have been coding for years and i'm speclized in Web Development, and I can make sure that you get the perfect website", imgSrc: "code-alt"},
    {name: "Resume Writing", description: "I have been working in the field of resume writing for over two years and I design ATS friendly resumes", imgSrc: "book"},
    {name: "English Translating", description: "I have been working as an English translator with TED talks for about six months and I beleive that I have the essitnal skills in this field", imgSrc: "book-content"}
]

const Services = ({darkMode}) => {


    return(
        <div id='services'  className='py-10 dark:bg-black dark:text-white'>
            <div>
            
            <h2 className='font-bold text-5xl text-center dark:text-white'>My Services</h2>
            <p className='mt-2 mb-10 text-center dark:text-white'>What can I do for you</p>
 
              <div className='flex flex-col lg:flex-row items-center justify-center gap-12'>
                    {services.map((service) => 
                     <div className='w-80 h-72 lg:w-96 lg:h-96 dark:border-4 dark:border-white shadow-2xl dark:shadow-md flex flex-col items-start justify-end  rounded-2xl
                      pb-8 lg:pb-24 pl-12'>

                       {darkMode ? <box-icon name={service.imgSrc} color="#fff" size="60px"></box-icon> :<box-icon name={service.imgSrc} size="60px"></box-icon>}
                       
                       <h2 className='font-semibold text-2xl my-3 mt-4 dark:text-white'>{service.name}</h2>  
                       <Modal>
                        <h2>{service.name}</h2>
                        <p className='mt-4 dark:text-black'>{service.description}</p>
                    </Modal>  
                     </div>  
                    )}
              </div>
         </div>
         <hr className='bg-white text-white h-1 w-[100%] mt-24' />
        </div>
    )

}

export default Services