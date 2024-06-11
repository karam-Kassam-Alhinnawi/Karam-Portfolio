import { X } from 'lucide-react'
import React, { useState } from 'react'

const Modal = ({children}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>
     <button onClick={toggleModal} className="py-3 block text-lg">
        Read More
     </button>
     
     {modal && 
     // The Main Modal DIV
     <div className=" w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed">
         
         {/* The Overlay Div */}
        <div className="overlay w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed" onClick={toggleModal}></div>

       
        <div className="modal-content rounded-2xl">
             {children}
            <button className='close-modal' onClick={toggleModal}><X/></button>
        </div>
     </div>}
     
    </>
  )
}

export default Modal