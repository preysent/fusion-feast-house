import React from 'react'
import Navbar from './header/Navbar'
import AboutCart from './main/AboutCart'
import Party from './main/Party'
import Team from './main/Team'
import Gallery from './main/Gallery'

const Main = () => {
    return (
        <>
            <Navbar />
            <div className='container m-auto'>
                <AboutCart/>
                <Party/>
                <Team/>
                <Gallery/>
            </div>

        </>
    )
}

export default Main
