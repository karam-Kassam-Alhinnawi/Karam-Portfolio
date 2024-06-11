import React from 'react';

import whatsAppImg from "../assets/bxl-whatsapp.svg";
import GmailImg from "../assets/bxl-gmail.svg";
import instagramImg from "../assets/bxl-instagram.svg";

import { ArrowRight } from 'lucide-react';

const talkToMe = [
    {icon: whatsAppImg, value: "+963 998 914 538", name: "WhatsApp", link: "tel:+963 998 914 538"},
    {icon: GmailImg, value: "karamkassamalhinnawi@gmail.com", name: "Email", link: "mailto:karamkassamalhinnawi@gmail.com"},
    {icon: instagramImg, value: "karam_kassam_alhinnawi", name: "Instagram", link: "https://www.instagram.com/karam_kassam_alhinnawi/"},
]

const Contact = () => {
  return (
    <div id='contact'  className='md:px-40 mb-12 flex flex-col items-center justify-center text-black'>
       <h2 className='font-bold text-5xl'>Contact Me</h2>
       <p className='mt-2'>Let's work together</p>

       <div className="contact flex items-center justify-between gap-x-40 mt-20">
         
        <div className="flex flex-col md:flex-row gap-12">

         {talkToMe.map((talk) => 
          <div className='w-72 h-64 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-4'>
          <img className='w-12' src={talk.icon} alt="" />
          <p className="font-semibold">{talk.name}</p>
          <p className='text-sm text-gray-600'>{talk.value}</p>
          <a className='text-gray-600 flex' href={talk.link}>Write Me <span className="ml-2"><ArrowRight/></span> </a>
          </div>
        )}           
        
        </div>

       </div>

    </div>
  )
}

export default Contact