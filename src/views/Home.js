import React from 'react'
import images from '../constants/images'
import { Navbar } from '../components'

const Home = () => {
    return (
        <div className="app__container">
            <Navbar />
            <aside>
                <div className="app__content-snapshot">
                    < img className="headshot" src={images.headshot} alt="headshot" />
                    <p className="p__ubuntu p__content-snapshot">Thanks for stopping by and seeing how I break things.</p>
                </div>
            </aside>

        </div>
    )
}

export default Home