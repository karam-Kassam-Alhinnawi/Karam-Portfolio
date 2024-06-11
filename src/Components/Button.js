import React from 'react';

const Button = ({children}) => {
  return (
    <button className='hello-btn p-5 text-white rounded-lg flex gap-3 justify-center items-end mt-10'>{children}</button>
  )
}

export default Button