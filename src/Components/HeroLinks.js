import React from 'react';

const links = [
    {href: "https://www.instagram.com/karam_kassam_alhinnawi/", name:'instagram'},
    {href: "https://www.linkedin.com/in/karam-kassam-alhinnawi-6a2928286/", name:'linkedin'},
    {href: "https://www.facebook.com/profile.php?id=100069551584000", name:'facebook'}
]

const HeroLinks = ({darkMode}) => {
  return (
    <div className='flex lg:flex-col gap-6 mt-5 lg:mt-0 md:mr-4'>
        {links.map((link) => 
            <a href={link.href} target='_blank'>{darkMode ? <box-icon type='logo' name={link.name} color="#fff"></box-icon> : <box-icon type='logo' name={link.name}></box-icon>}</a>
        )}
    </div>
  )
}

export default HeroLinks