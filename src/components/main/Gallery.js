import React from 'react'
import img1 from '../../assests/Rectangle 25.png'
import img2 from '../../assests/Rectangle 26.png'
import img3 from '../../assests/Rectangle 27.png'
import img4 from '../../assests/Rectangle 28.png'
import img5 from '../../assests/Rectangle 29.png'

const Gallery = () => {
    return (
        <div className='text-white'>
            <h5 className='capitalize opacity-50 text-center my-8' >find yourself on the photo</h5>


            <h2 className='uppercase text-[4rem] mb-4 opacity-90 leading-10 text-center'>gallery</h2>


            <div className='flex lg:justify-between justify-center p-12 lg:mt-[-6rem] flex-wrap gap-4'>

                <div className=' border-[#9e9e9e] overflow-hidden'>
                    <img className='object-cover' src={img1} alt='char' />
                </div>

                <div className=' border-[#9e9e9e]  overflow-hidden'>
                    <img className='object-cover' src={img3} alt='char' />
                </div>

            </div>


            <div className='flex justify-center gap-3 p-12 lg:mt-[-12rem] flex-wrap'>

                <div className=' border-[#9e9e9e]  overflow-hidden'>
                    <img className='object-cover' src={img2} alt='char' />
                </div>
                <div className=' border-[#9e9e9e]  overflow-hidden'>
                    <img className='object-cover' src={img5} alt='char' />
                </div>

                <div className=' border-[#9e9e9e]  overflow-hidden'>
                    <img className='object-cover' src={img4} alt='char' />
                </div>

            </div>

            <div className='flex justify-center mb-10'>
                <button className='p-2 px-3 bg-slate-500/[.3] capitalize '>
                    <i className="ri-arrow-right-s-line"></i>
                    Know more about our team
                </button>
            </div>

        </div>
    )
}

export default Gallery
