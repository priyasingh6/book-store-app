import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Course from '../Course'

const Courses = () => {
 
  
  return (
    <>
    <Navbar/>
    <div className='min-h-screen bg-white dark:bg-slate-900 dark:text-white dark:overflow-x-hidden'>
      <Course/>
    </div>
    <Footer/>
    
    </>
  )
}

export default Courses
