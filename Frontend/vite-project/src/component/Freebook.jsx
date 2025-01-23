import React from 'react'
import list from "/public/list.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "/src/component/Card";

function Freebook() {
  const filterData = list.filter((data) => data.price === 0);
  // console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl mx-auto container md:px-10 px-3 '>
        <div>
          <h1 className='font-semibold text-2xl pb-2 text-gray-700 dark:text-gray-200'>Free Offered Courses</h1>
          <p className='text-gray-500 dark:text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laborum accusamus esse ipsum alias facilis ullam velit dignissimos quae aliquid!</p>
        </div>

        <div className='mt-5'>
          
            <Slider {...settings}>
             {filterData.map((item)=>(
              <Card key={item.id} item={item} />
             ))}
            </Slider>
          </div>

        
      </div>
    </>
  );
}

export default Freebook
