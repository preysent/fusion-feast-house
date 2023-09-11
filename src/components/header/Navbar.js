import React from 'react'
import logo from '../../assests/logo.png'
import bg from '../../assests/Group 92.png'


const Navbar = () => {
  return (
    <div id="home" className='h-[100vh] w-full flex flex-col items-center'>
      <nav className='p-2 h-[30%] text-center w-full bg-opacity-50 flex items-center justify-evenly'>

        <img src={logo} alt='logo' />

        <div className='flex gap-5'>
          <button className='uppercase border-2 border-slate-100 p-4 text-3xl text-white bg-slate-500'>book table</button>

          <button className='uppercase border-2 border-slate-100 p-4 text-3xl text-white bg-slate-500'>order delivery</button>


          <button className='uppercase border-2 border-slate-100 p-1 font-bold text-5xl text-white bg-slate-500 w-[4rem] h-[4rem] rotate-45 mx-8'>
            <p className='rotate-[-45deg]'>=</p>
          </button>


        </div>

      </nav>

      <div className=' flex h-[70vh]'>
        <div className='text-white w-fit p-3 uppercase'>
          <h2 className=' text-6xl scale-y-150 pl-5 mt-28'>fusion of culinary</h2>
          <div className='text-4xl flex flex-col gap-6 m-6 ml-[50%]'>
            <h5>excellence</h5>
            <h5>flavours</h5>
            <h5>joy</h5>
          </div>

          <div className='flex gap-7 items-center absolute bottom-14 left-16'>
            <button className=' flex justify-center items-center w-10 h-10 relative rotate-[135deg] bg-gradient-to-tr from-white'>
              <i className="ri-arrow-right-s-line rotate-[-45deg]"></i>
            </button>
            <p className='opacity-60 text-sm'>scroll down</p>
          </div>
        </div>
        <img className='object-contain w-5/12 scale-125' src={bg} alt="bh-img" />

      </div>
    </div>
  )
}

export default Navbar
