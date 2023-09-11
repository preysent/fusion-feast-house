import React from 'react'

const Team = () => {
    return (
        <div className='text-white bg-[#2e2a2a] rounded-[3rem] lg:py-14 lg:px-20 p-5 border-4 border-[#817f7f] flex flex-wrap lg:flex-nowrap m-4 mb-10' >

            <div className='w-full h-full md:w-1/2  p-10'>
                <p className='opacity-50 text-lg mb-10 capitalize'> here they are </p>

                <h2 className='uppercase text-[2.5rem] mb-4 opacity-90 leading-10'>our team</h2>

                <h5 className='opacity-80 mb-9 capitalize'>fusion feast house's dream team of passinate chefs and warm-harted stuff unit to craft extraordinary culinary experiances. where globel flaver and createvity hamorize. leaving patrons enchanted.</h5>
               
                <button className='p-2 px-3 bg-slate-500/[.3] capitalize'>
                    <i className="ri-arrow-right-s-line"></i>
                    Know more about our team
                </button>
            </div>


            <div className='w-full h-full md:w-1/2 p-3 px-9 grid grid-cols-3 gap-6'>
                
                <div className='border-[3px] border-[#9e9e9e] rounded-3xl overflow-hidden'>
                    <img className='object-cover' src='https://i.pinimg.com/236x/e4/c5/9f/e4c59fdbb41ccd0f87dc0be871d91d98.jpg' alt='char'/>
                </div>



                
                <div className='border-[3px] border-[#9e9e9e] rounded-3xl overflow-hidden'>
                    <img className='object-cover' src='	https://i.pinimg.com/236x/23/67/99/23679975f9299de2b4c9123a6810e011.jpg' alt='char'/>
                </div>



                
                <div className='border-[3px] border-[#9e9e9e] rounded-3xl overflow-hidden'>
                    <img className='object-cover' src='	https://i.pinimg.com/236x/35/71/ec/3571ec9a266cad5280ce5aa9db9220af.jpg' alt='char'/>
                </div>



                
                <div className='border-[3px] border-[#9e9e9e] rounded-3xl overflow-hidden'>
                    <img className='object-cover' src='https://i.pinimg.com/236x/ac/f1/6c/acf16ccf385a1511807487e992496c6c.jpg' alt='char'/>
                </div>



                
                <div className='border-[3px] border-[#9e9e9e] rounded-3xl overflow-hidden'>
                    <img className='object-cover' src='https://i.pinimg.com/236x/4d/b0/cb/4db0cb4f12224485e0a98676c1ec75e2.jpg' alt='char'/>
                </div>



                
                <div className='border-[3px] border-[#9e9e9e] rounded-3xl overflow-hidden'>
                    <img className='object-cover' src='https://i.pinimg.com/236x/3e/ea/e9/3eeae985255f49cf0dc5827f1a118512.jpg' alt='char'/>
                </div>

            </div>
        </div>
    )
}

export default Team
