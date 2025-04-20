import React from 'react'

const Navbar = ({ pagename }) => {
  return (
    <div className='bg-[#081b29] xl:ml-60 ml-0 justify-center p-4 flex'>
      <h1 className='text-2xl text-white'>{pagename}</h1>
    </div>
  )
}

export default Navbar
