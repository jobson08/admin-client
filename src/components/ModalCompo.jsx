import React from 'react'

const ModalCompo
 = ({isVisible, onClose, children}) => {
  if( !isVisible ) return null
  const handleClose = (e) =>{
    if( e.target.id ==='wrapper' ) onClose();
  }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
    id="wrapper"
    onClick={handleClose}
    >
     <div className='w-[400px] flex flex-col'>
     
      <button className='text-white text-xl place-self-end' 
      onClick={() => onClose()}>X</button>

      <div className='dark:text-gray-300 bg-white  dark:bg-secondary-dark-bg p-2'>
        {children}
      </div>

     </div>
    </div>
  )
}

export default ModalCompo
