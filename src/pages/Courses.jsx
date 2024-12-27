import React from 'react'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <div className='min-h-screen w-full  flex justify-center items-center bg-gray-400'>
        <div className='px-10   w-full h-80 flex items-center gap-10'>
            <div className='w-1/3 h-full  text-center rounded-md border-black'>
                <img 
                className='h-[80%] mx-auto w-full object-center rounded-md'
                src="https://ddi-dev.com/uploads/backend-is.png" alt="" />
                <Link 
                to={'/courses/backendcourse'}
                className='text-2xl mt-2 px-2 py-3 border-2 w-full mx-auto bg-gray-400 text-white rounded-md'>Backend Course</Link>

            </div>
            <div className='w-1/3 h-full  text-center  rounded-md'>
            <img 
                className='h-[80%] mx-auto w-full object-center rounded-md'
                src="https://3852769.fs1.hubspotusercontent-na1.net/hubfs/3852769/Emerging%20Frontend%20Technologies.png" alt="" />
                <Link 
                to={'/courses/frontendcourse'}
                className='text-2xl mt-2 px-2 py-3 border-2 w-full mx-auto bg-gray-400 text-white rounded-md'>Frontend Course</Link>

            </div>
            <div className='w-1/3 h-full  text-center rounded-md border-black'>
            <img 
                className='h-[80%] mx-auto w-full object-center rounded-md'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ZH3Mfo5Ufn9CZX4nYU1Qxs5xyUOcJUqOqQ&s" alt="" />
                <Link className='text-2xl mt-2 px-2 py-3 border-2 w-full mx-auto bg-gray-400 text-white rounded-md'
                to={'/courses/reactcourse'}
                >React Course</Link>

            </div>
        </div>

    </div>
  )
}

export default Courses