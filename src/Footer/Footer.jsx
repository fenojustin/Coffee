import React from 'react'
import image from '../assets/2.png'

const Img = {
  backgroundImage: `url(${image})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "300px",
  width: "100%",
  height:"20%",
};
const Footer = () => {
  return (
    <div className=' flex justify-center items-center rounded-lg w-[600px]' style={Img} data-aos="fade-down">
      <div>
        <span className='text-2xl text-white font-bold py-10 tracking-widest  '>Subscribe to get 50% discount price</span>
        <br />
       <input type="text" placeholder='Email address' className='bg-orange-1/2 px-3 flex justify-center itr w-[300px] h-[50px] rounded-full ' /> 
      </div>
      
    </div>
  )
} 

export default Footer