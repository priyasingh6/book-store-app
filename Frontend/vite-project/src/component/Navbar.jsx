// import React from 'react'
// import { useState,useEffect } from 'react'
// import Login from '../home/Login'
// import Logout from '../component/Logout'
// import { useAuth } from '../context/AuthProvider'
// const Navbar = () => {

  
//   const [authUser, setAuthUser] = useAuth ();
 

// const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
// const element = document.documentElement;
// useEffect(() => {
//   if (theme === 'dark') {
//     element.classList.add('dark');
//     localStorage.setItem('theme', 'dark');
//     document.body.classList.add('dark');
//   } else {
//     element.classList.remove('dark');
//     localStorage.setItem('theme', 'light');
//     document.body.classList.remove('dark');
//   }

  
// }, [theme])


// const [sticky,setSticky] = useState(false)
// useEffect(() => {
//   const handleScroll = () => {
//     if (window.scrollY > 0) {
//       setSticky(true)
//     } else {
//       setSticky(false)
//     }
//   }

//   window.addEventListener('scroll', handleScroll);

//   return () => {
//     window.removeEventListener('scroll', handleScroll)
//   }
// }, []);


// const navItems= (<>
// <li><a href="/">Home</a></li>
//       <li><a href="/course"> Course</a></li>
//       <li><a href="/contact">Contact</a></li>
//       <li><a>about</a></li>

// </>);

// const handleLogout = () => {
//   // Ensure that logging out updates the `authUser` state correctly
//   setAuthUser(null); // Clear the auth state after logout
// };

//   return (
//    <> <div className={`max-w-screen-2xl  container md:px-20 px-3 text-gray-700 fixed top-0 z-50 left-0 right-0
//    ${sticky
//        ? " shadow-lg shadow-md bg-transparent backdrop-blur-sm border-b border-gray-200 duration-300 transition-all ease-in-out" : "" }`}
//      >

//     <div className="navbar dark:text-gray-200  bg-white-100">
//   <div className="navbar-start ">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16" />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-white-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
        
//        {navItems}
     
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-2xl text-gray-700 font-bold cursor-pointer dark:text-gray-200 dark:hover:bg-gray-700 ">BookStore</a>
//   </div>
//   <div className="navbar-end space-x-3">
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1"> {navItems}</ul>
//   </div>
//   {/* search bar */}
//   <div className='hidden md:block'>
//   <label className="px-3 py-2 border rounded-md  flex items-center gap-2">
//   <input  type="text" className="grow bg-transparent outline-none" placeholder="Search" />
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 16 16"
//     fill="currentColor"
//     className="h-4 w-4 opacity-70">
//     <path
//       fillRule="evenodd"
//       d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//       clipRule="evenodd" />
//   </svg>
// </label>
//   </div>
//   {/* toggle theme */}

//   <label className="swap swap-rotate">
//   {/* this hidden checkbox controls the state */}
//   <input type="checkbox" className="theme-controller" value="synthwave" />

//   {/* sun icon */}
//   <svg
//     className="swap-off h-7 w-7 fill-current"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
//     <path
//       d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//   </svg>

//   {/* moon icon */}
//   <svg
//     className="swap-on h-7 w-7 fill-current"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
//     <path
//       d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,8.14,8.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,8.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//   </svg>
// </label>



//  { authUser?(<Logout/> ):(
//       <div className=''>
 
//    <a tabIndex={0} role="button" className=" bg-black text-white px-4 py-3 rounded hover:bg-slate-800 btn btn-ghost duration-300" onClick={() => document.getElementById('login_id').showModal()} >Login</a>
   
//         <Login/>
       
// </div>
// )}


// </div>
// </div>

//    </div>
   
//    </>
//   )
// }

// export default Navbar


import React, { useState, useEffect } from 'react';
import Login from '../home/Login';
import Logout from '../component/Logout';
import { useAuth } from '../context/AuthProvider';

const Navbar = () => {
  const [authUser, setAuthUser] = useAuth(); // Get authUser state
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [sticky, setSticky] = useState(false);

  const element = document.documentElement;

  // Theme Toggling
  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Sticky Navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
    </>
  );

  const handleLogout = () => {
    // Ensure that logging out updates the `authUser` state correctly
    setAuthUser(null); // Clear the auth state after logout
  };

  return (
    <div className={`max-w-screen-2xl container md:px-20 px-3 text-gray-700 fixed top-0 z-50 left-0 right-0
      ${sticky ? "shadow-lg shadow-md bg-transparent backdrop-blur-sm border-b border-gray-200 transition-all" : ""}`}>
      <div className="navbar dark:text-gray-200 bg-white-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl text-gray-700 font-bold cursor-pointer dark:text-gray-200 dark:hover:bg-gray-700">BookStore</a>
        </div>

        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block">
            <label className="px-3 py-2 border rounded-md flex items-center gap-2">
              <input type="text" className="grow bg-transparent outline-none" placeholder="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
              </svg>
            </label>
          </div>

          {/* Theme Toggle */}
          <label className="swap swap-rotate">
            <input type="checkbox" checked={theme === 'dark'} onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
            <svg className="swap-off h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg className="swap-on h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,8.14,8.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,8.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* Auth Links */}
          {authUser ? (
            // <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-3 rounded hover:bg-red-700">
            //   Logout
            // </button>
            <Logout />
          ) : (
            <div>
              <a tabIndex={0} role="button" className="bg-black text-white px-4 py-3 rounded hover:bg-slate-800 btn btn-ghost duration-300" onClick={() => document.getElementById('login_id').showModal()}>
                Login
              </a>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
