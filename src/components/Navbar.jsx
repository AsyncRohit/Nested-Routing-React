import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='px-6 py-4 flex justify-between items-center w-full bg-transparent  fixed top-0 left-0  text-white text-xl font-semibold '>
        <h2>CourseFinder</h2>
        <div className='flex gap-10'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/courses'}>Courses</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/Services'}>Serivces</Link>
                    </div>

    </div>
  )
}

export default Navbar