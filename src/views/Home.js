import React from 'react'
import images from '../constants/images'
import { Navbar } from '../components'

const Home = () => {
    return (
        <div className="app__container">
            <Navbar />
                <div className="">
                    <p className="p__ubuntu p__content-snapshot">Thanks for stopping by and seeing how I break things.</p>
                </div>
        </div>
    )
}

export default Home