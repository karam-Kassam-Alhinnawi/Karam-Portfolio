import React from 'react';
import { ArrowRight } from 'lucide-react';

const talkToMe = [
    {icon: "whatsapp", value: "+963 998 914 538", name: "WhatsApp", link: "tel:+963 998 914 538"},
    {icon: "gmail", value: "karamkassamalhinnawi@gmail.com", name: "Email", link: "mailto:karamkassamalhinnawi@gmail.com"},
    {icon: "instagram", value: "karam_alhinnawi", name: "Instagram", link: "https://www.instagram.com/karam_alhinnawi/"},
]

const Contact = ({darkMode}) => {
  return (
    <div id='contact'  className='dark:bg-black md:px-40 dark:pb-10 dark:mb-0 mb-12 flex flex-col items-center justify-center text-black'>
       <h2 className='font-bold text-5xl dark:text-white'>Contact Me</h2>
       <p className='mt-2 dark:text-white'>Let's work together</p>

       <div className="contact flex items-center justify-between gap-x-40 mt-20">
         
        <div className="flex flex-col md:flex-row gap-12">

         {talkToMe.map((talk) => 
          <div className='w-72 h-64 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-4 dark:border-2 dark:border-white'>
          {darkMode ? <box-icon type='logo' name={talk.icon} size="50px" color="#fff"></box-icon> : <box-icon type='logo' name={talk.icon} size="50px" color="#000"></box-icon>}
          <p className="font-semibold dark:text-white">{talk.name}</p>
          <p className='text-sm text-gray-600 dark:text-white'>{talk.value}</p>
          <a className='text-gray-600 flex dark:text-white' target='_blank' href={talk.link}>Write Me <span className="ml-2"><ArrowRight/></span> </a>
          </div>
        )}           
        
        </div>

       </div>

    </div>
  )
}

export default Contact