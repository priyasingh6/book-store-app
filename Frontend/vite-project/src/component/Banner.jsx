import React from "react";
import Right from "/src/assets/right.png"







const Banner = () => {
  return (
   <>
   <div className='max-w-screen-2xl mx-auto container md:px-20 px-3 flex md:flex-row flex-col  '>
    <div className=' order-2 md:order-1 md:w-1/2 w-full md:mt-32 mt-10  '>
    <div className='space-y-5  ' > 
    <h1 className='text-4xl font-bold text-gray-700 dark:text-gray-200 '>Hello, welcomes here to learn something <span className=' text-pink-500'>new everyday!!!</span></h1>

    <p className='font-500 text-lg text-gray-500 dark:text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nisi asperiores labore quo provident optio, ducimus dolores omnis! Corrupti, aliquam?</p>
 {/*email section  */}
    <label className=" px-3 py-2 border rounded-md  flex flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow bg-transparent outline-none" placeholder="Enter your email to login" />
</label>
     <div><button className="btn btn-secondary">Submit</button></div>
      </div> 
      
     

      </div>



    <div className='order-1 md:order-2 md:w-1/2 w-full hover:scale-90 duration-300 ' ><img src={Right} className='h-90 p-16 bg-transparent w-90' alt="" /></div>
   </div>
   </>
  )
}

export default Banner
