import React from 'react'
import Navbar from '../components/Navbar'


const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex flex-col items-center justfy-center w-full h-vh'>
        <Navbar/>
        {children}
    </div>
  )
}

export default layout