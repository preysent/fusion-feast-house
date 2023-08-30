import React from 'react'
import aboutImgSrc from '../../assests/image 13.png'
import mehuImgSrc from '../../assests/image 8.png'

const AboutCart = () => {
    return (
        <>
            <div className=' text-white mb-8'>

                {/* about cart  */}
                <div className='flex h-fit flex-wrap md:flex-nowrap justify-center'>

                    <img className='md:max-w-[50%] w-full  object-cover' src={aboutImgSrc} alt="food Img"/>

                    <div className='p-16 py-8 max-w-xl'>
                        <p className='opacity-50 text-xl mb-3'> first best selling food in mumbai </p>
                        <h2 className='uppercase text-[2.5rem] mb-4 opacity-90 leading-10'>fusion fest <br /> house</h2>
                        <h5 className='opacity-80 mb-2'>A culinary adventure with harmonious global flavors. creativity and warm ambiance.</h5>
                        <p className='opacity-80 capitalize mb-8'>book table and look how to play with fire!</p>
                        <button className='p-2 px-3 bg-slate-500/[.3] capitalize'>
                            <i class="ri-arrow-right-s-line"></i>
                            learn more about us
                        </button>

                    </div>

                </div>


                {/* menu cart  */}
                <div className='flex h-fit flex-wrap md:flex-nowrap justify-between md:flex-row-reverse'>

                    <img className='md:max-w-[50%]  w-full   object-cover' src={mehuImgSrc} alt="food Img"/>


                    <div className='p-16 py-8 max-w-xl opacity-90'>
                        <p className='opacity-50 text-xl mb-6'> blending globel flavors with creative twists </p>
                        <h2 className='uppercase text-4xl mb-4 opacity-90 leading-10'>our menu</h2>


                        <table className=' w-full capitalize mb-9'>
                            <tr>
                                <td className='p-2'>global fusion roll</td>
                                <td className='p-2 opacity-50'>4 Piece </td>
                                <td className='p-2'>100$</td>
                            </tr>
                            <tr>
                                <td className='p-2' >BBQ teriyaki sliders salad</td>
                                <td className='p-2 opacity-50'>1 plate </td>
                                <td className='p-2' >100$</td>
                            </tr>
                            <tr>
                                <td className='p-2'>france vietnamese grepes</td>
                                <td className='p-2 opacity-50'>1 plate </td>
                                <td className='p-2'>100$</td>
                            </tr>
                            <tr>
                                <td className='p-2'>chololate matcha mousee</td>
                                <td className='p-2 opacity-50'>1 bowl </td>
                                <td className='p-2'>100$</td>
                            </tr>
                        </table>


                        <button className='p-2 px-3 bg-slate-500/[.3] capitalize mx-2 pr-4'>
                            <i class="ri-arrow-right-s-line"></i>
                            check whole menu
                        </button>

                        <button className='p-2 px-3 bg-slate-500/[.3] capitalize mx-2 pr-4'>
                            <i class="ri-arrow-right-s-line"></i>
                            order food
                        </button>

                    </div>



                </div>






            </div>
        </>
    )
}

export default AboutCart
