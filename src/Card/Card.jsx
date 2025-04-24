import React from 'react'

import pain from '../assets/pain.png'
function Card (){
const listcard = [
    {
        cars: pain,
        brand: "Jaguar XE L P250",
        stars: "4.8",
        review: "2.436",
        passagers: "4",
        vitesse: "Auto",
        doors: "4",
        conditioning: "Air Conditioning",
        price: "1.800",
    },
    {
        cars: pain,
        brand: "Jaguar XE L P250",
        stars: "4.8",
        review: "2.436",
        passagers: "4",
        vitesse: "Auto",
        doors: "4",
        conditioning: "Air Conditioning",
        price: "1.800",
    },
    {
        cars: pain,
        brand: "Jaguar XE L P250",
        stars: "4.8",
        review: "2.436",
        passagers: "4",
        vitesse: "Auto",
        doors: "4",
        conditioning: "Air Conditioning",
        price: "1.800",
    },
    {
        cars: pain,
        brand: "Jaguar XE L P250",
        stars: "4.8",
        review: "2.436",
        passagers: "4",
        vitesse: "Auto",
        doors: "4",
        conditioning: "Air Conditioning",
        price: "1.800",
    },
    {
        cars: pain,
        brand: "Jaguar XE L P250",
        stars: "4.8",
        review: "2.436",
        passagers: "4",
        vitesse: "Auto",
        doors: "4",
        conditioning: "Air Conditioning",
        price: "1.800",
    },
    {
        cars: pain,
        brand: "Jaguar XE L P250",
        stars: "4.8",
        review: "2.436",
        passagers: "4",
        vitesse: "Auto",
        doors: "4",
        conditioning: "Air Conditioning",
        price: "1.800",
    },
      
];

  return (
      <div className='container'> 
          <h1 className='font-bold '>Special menu for you</h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
              <img src={pain} alt="" className='gap-4  hover:scale-105 duration-300' />
              <img src={pain} alt="" className='gap-4  hover:scale-105 duration-300' />
              <img src={pain} alt="" className='gap-4  hover:scale-105 duration-300' />
              <img src={pain} alt="" className='gap-4  hover:scale-105 duration-300' />
              <img src={pain} alt="" className='gap-4  hover:scale-105 duration-300' />
              <img src={pain} alt="" className='gap-4  hover:scale-105 duration-300' />
           
          </div>
          
    </div>
  )
}

export default Card