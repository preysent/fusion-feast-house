import React from 'react'
import slider1 from '../../assests/slider1.png'
import slider2 from '../../assests/slider2.png'
import slider3 from '../../assests/slider3.png'
import slider4 from '../../assests/slider4.png'
import slider5 from '../../assests/slider5.png'
import slider6 from '../../assests/slider6.png'

const Party = () => {
    return (
        <div className='text-white p-12'>

            <h5 className='opacity-50'>crasy party</h5>

            <div className='flex w-[80%]  px-12 py-3 text-3xl uppercase items-center opacity-90 mb-12'>
                <h2 className='px-2'>our parties</h2>

                <div className='h-[2px] w-10 flex-grow bg-gradient-to-r from-white'></div>

                <div className='flex gap-10'>
                    <button className='flex justify-center items-center w-10 h-10 relative rotate-45 bg-gradient-to-bl from-white'>
                        <i class="ri-arrow-left-s-line rotate-[-45deg] "></i>
                    </button>
                    <button className=' flex justify-center items-center w-10 h-10 relative rotate-45 bg-gradient-to-tr from-white'>
                        <i class="ri-arrow-right-s-line rotate-[-45deg]"></i>
                    </button>


                </div>
            </div>



            <div className='scrollbar-d-none flex gap-3 overflow-x-auto mb-9'>


                <div className='uppercase relative  h-[15rem] min-w-[11rem]'>
                    <img className='absolute w-full h-full opacity-70' src={slider1} alt='slideImg' />
                    <div className='p-5'>
                        <h3 className='capitalize text-xl absolute z-[1]'>mystical mirage party</h3>
                    </div>
                </div>

                <div className='uppercase relative  h-[15rem] min-w-[11rem]'>
                    <img className='absolute w-full h-full opacity-70' src={slider2} alt='slideImg' />
                    <div className='p-5'>
                        <h3 className='capitalize text-xl absolute z-[1]'>neon nebula besh</h3>
                    </div>
                </div>

                <div className='uppercase relative  h-[15rem] min-w-[11rem]'>
                    <img className='absolute w-full h-full opacity-70' src={slider3} alt='slideImg' />
                    <div className='p-5'>
                        <h3 className='capitalize text-xl absolute z-[1]'>twilight enchantment</h3>
                    </div>
                </div>

                <div className='uppercase relative  h-[15rem] min-w-[11rem]'>
                    <img className='absolute w-full h-full opacity-70' src={slider4} alt='slideImg' />
                    <div className='p-5'>
                        <h3 className='capitalize text-xl absolute z-[1]'>cosmic carniavate</h3>
                    </div>
                </div>


                <div className='uppercase relative  h-[15rem] min-w-[11rem]'>
                    <img className='absolute w-full h-full opacity-70' src={slider5} alt='slideImg' />
                    <div className='p-5'>
                        <h3 className='capitalize text-xl absolute z-[1]'>setllar serenada besh</h3>
                    </div>
                </div>


                <div className='uppercase relative  h-[15rem] min-w-[11rem]'>
                    <img className='absolute w-full h-full opacity-70' src={slider6} alt='slideImg' />
                    <div className='p-5'>
                        <h3 className='capitalize text-xl absolute z-[1]'>enchanted soiree</h3>
                    </div>
                </div>

            </div>

            <button className='p-2 px-3 mx-6 bg-slate-500/[.3] capitalize'>
                <i class="ri-arrow-right-s-line"></i>
                check all partyes
            </button>
        </div>
    )
}

export default Party
