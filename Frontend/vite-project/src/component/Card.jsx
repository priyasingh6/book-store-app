import React from 'react'
import rb_4735 from "/src/assets/rb_4735.png"

const Card = ({item}) => {
    // console.log(item);
    
  return (
    <> <div className= "m-2 p-2">
      <div className="card bg-transparent card-compact hover:bg-gray-200  w-92 shadow-l border-1 border-gray-100 hover:scale-105 duration-300  shadow-2xl dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200">
  <figure>
    <img
      src={rb_4735}
      alt="books" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-gray-800 dark:text-gray-200  text-lg font-bold ">
     {item.name}
      {/* <div className="badge badge-secondary"> 
        
        free</div> */}
        {item.price === 0 ? (
            <span className="badge badge-secondary text-white px-2 py-1 rounded-md">
              Free
            </span>
          ) : (
            <span className="badge badge-secondary text-white px-2 py-1 rounded-md">
             Buy
            </span>
          )}
    </h2>
    <p className='text-gray-400 text-sm'>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge  badge-outline text-gray-500  hover:bg-pink-400 hover:text-white duration-300 p-2 shadow-lg ">${item.price}</div>
      <div className="btn btn-outline border-1 border-gray-200 text-gray-600 hover:bg-pink-500 hover:text-white duration-300  text-sm rounded-full shadow-lg cursor-pointer  ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    
    </>
  )
}

export default Card



// import React from 'react'
// import rb_4735 from "/src/assets/rb_4735.png"

// const Card = ({item}) => {
//     // console.log(item);
    
//   return (
//     <> <div className= "m-2 p-2">
//       <div className="card bg-transparent card-compact hover:bg-gray-200  w-92 shadow-l border-1 border-gray-100 hover:scale-110 duration-300  shadow-2xl dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200">
//   <figure>
//     <img
//       src={rb_4735}
//       alt="books" />
//   </figure>
//   <div className="card-body ">
//     <h2 className="card-title text-gray-800 dark:text-gray-200  text-lg font-bold ">
//      {item.name}
//       <div className="badge badge-secondary">free</div>
//     </h2>
//     <p className='text-gray-400 text-sm'>{item.title}</p>
//     <div className="card-actions justify-between">
//       <div className="badge  badge-outline text-gray-500  hover:bg-pink-400 hover:text-white duration-300 p-2 shadow-lg ">${item.price}</div>
//       <div className="btn btn-outline border-1 border-gray-200 text-gray-600 hover:bg-pink-500 hover:text-white duration-300  text-sm rounded-full shadow-lg cursor-pointer  ">Buy Now</div>
//     </div>
//   </div>
// </div>
//     </div>
    
//     </>
//   )
// }

// export default Card
