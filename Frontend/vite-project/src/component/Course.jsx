import React, { useState ,useEffect } from 'react'
import Card from "/src/component/Card"
import {Link} from "react-router-dom"
import axios from "axios"

const Course = () => {
// data impoerted from db and in the book ther is data

const [book,setBook]=useState([])
useEffect(() => {
  const getBook=async()=>{
    try {

      const response = await axios.get("http://localhost:4001/book")
      setBook(response.data)
    } catch (error) {
      console.log(error);
      
    }
  }
  getBook();

  return () => {
  
  }
}, [])


  return (
    <>
    <div className='max-w-screen-2xl  mx-auto container md:px-20 px-3 '>
   <div className=' mt-28 md:mt-32 p-2 items-center align-center justify-center text-center  ' >
    <h1 className='text-4xl font-800 md:text-4xl text-gray-700 dark:text-gray-100 '>
        We are delighted to have you{""} <span className='text-pink-500'>here! :)</span>
    </h1>
    <p className='mt-12  text-lg text-gray-500 dark:text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi hic a vitae sit labore rerum dolorum? Impedit quod maiores eum, aspernatur odit nostrum, iusto recusandae blanditiis delectus rem debitis. Expedita! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore porro iure aspernatur temporibus delectus sequi, repudiandae quis voluptates ad praesentium.
    </p>

    <Link to ='/'>
    <div className='p-5 flex justify-center'>
   <div className=" btn btn-outline border-1 border-gray-200 text-gray-800 bg-gray-300 hover:bg-pink-500 hover:text-white duration-300  text-lg shadow-lg cursor-pointer ">Back</div>
   </div>
    </Link>

   
   </div>
{/* card section */}
<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
    {
        book.map((item) => <Card item={item} key={item.id}/>)
    }
</div>
   
    </div>
    </>
  )
}

export default Course
