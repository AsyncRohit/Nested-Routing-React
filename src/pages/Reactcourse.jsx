import React from 'react'
import { Link } from 'react-router-dom'

const Reactcourse = () => {
  return (
   
    <div className='h-screen w-full  react'>
        <div className='h-full w-full'>
            <img className='h-full w-full' src="https://strapi.dhiwise.com/uploads/react_vs_react_native_OG_Image_e2e6732f5e.png" alt="" />
        </div>
        <div className='title text-center'>
        <h2 className='text-4xl mb-4'>Tap here to Join</h2>
        <div className='flex gap-10'>
        <Link 
        className='px-6 py-4 rounded-md bg-blue-400 text-2xl'>Enroll now </Link>
        <Link 
        to={'/courses/reactcourse/details'}
        className='px-6 py-4 rounded-md bg-blue-400 text-2xl'>Course Details </Link>
    
        </div>
        </div>
    </div>
  )
}

export default Reactcourse