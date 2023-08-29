import React from 'react'
import img from '../../assests/image 13.png'

const AboutCart = () => {
    return (
        <div>
            <div className=' bg-yellow-700 '>

                <div className='flex h-[25rem]'>
                    <img className='object-cover' src={img} />


                    <div className='bg-red-400 grow p-14'>
                        <p> the best selling food in mumbai </p>

                        <h2>fusion fest house</h2>
                        <h5>a culinary adventure with harmonious global flavors. creativity and warm ambiance.</h5>

                        <p>book table and look how to play with fire!</p>

                        <button>
                            <i class="ri-arrow-right-s-line"></i>
                            learn more about us
                        </button>

                    </div>

                </div>



            </div>
        </div>
    )
}

export default AboutCart
