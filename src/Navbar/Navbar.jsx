import React from 'react' 
import Logo from '../assets/cup.png'

const Menu = [
    {
        id: 1,
        name:'About us',
        link:'#about',
    },
    {
        id: 2,
        name: 'Our Product',
        link: '#',
    },
    {
        id: 3,
        name: 'Delivery',
        link: '#delivery',
    },
   
]
const Navbar = () => {
  return (
      <div>
          <div className=' container bg-orange-50'>
              <div className='flex justify-between items-center ' data-aos="zoom-out" data-aos-duration="1000">
                  <div className=''>
                      <a href="#" className='flex items-center gap-2 text-xl sm:text-2xl '>
                          <img src={Logo} alt="" className='w-7 flex justify-start items-start ' />
                          <h3 className='text-orange-500'>Cafe</h3>  Street 
                      </a>
                  </div>
                  <div>
                      <ul className=' hidden sm:flex  gap-2'>
                          {Menu.map((menu) => (
                              <li key={menu.id}>
                                  <a href={menu.link} className='inline-block py-4 px-4 hover:text-amber-500 font-semibold  '>
                                    {menu.name}
                                  </a>
                              </li>
                          ))}
                         
                      </ul>
                  </div>
                  <div className='hidden sm:flex '>
                      <input type="Search" name="" id="" placeholder='Recherche' className='text-center rounded-full' />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Navbar