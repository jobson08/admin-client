import React from 'react'

const Header = ({ category, title }) => {
  return (
    <div className='mb-10'>
      <p className='"font-bold text-xl dark:text-gray-200'>
        {category}
      </p>
      <p className='text-3x1 font-extrabold tracking-tight dark:text-gray-200'>{title}</p>
    </div>
  )
}

export default Header
