import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Freebook from '../component/Freebook'
import Footer from '../component/Footer'


// import { useEffect, useRef } from "react";
// import locomotiveScroll from "locomotive-scroll";



// export default function () {
//     const containerRef = useRef(null);
    
    
    
    
//     useEffect(() => { 
//       const scroll = new locomotiveScroll({
//         el: containerRef.current,
//         smooth: true,
//       });
//       return () => scroll.destroy();
//     },[])
// }
const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Freebook/>

    <Footer/>
    </>
  )
}

export default Home
