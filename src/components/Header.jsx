import React from 'react'

const Header = ({ category, title }) => {
  return (
    <div className='mb-3'>
      <p className='"font-bold text-xl dark:text-gray-200'>
        {category}
      </p>
      <p className='text-2xl font-extrabold tracking-tight dark:text-gray-200 text-center'>{title}</p>
    </div>
  )
}

export default Header
