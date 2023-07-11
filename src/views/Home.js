import React from 'react'
import images from '../constants/images'

const Home = () => {
    return (
        <div className="app__container">
            <div className="app__content">
                <div>
                    <header>

                <h1 className="app__h1-ubuntu"> The Ultimate Variable </h1>
                    </header>

                </div>

            </div>
            <div className="app__content">
            < img className="headshot" src={images.headshot} alt="headshot" />
            <p className="p__ubuntu">Things I break by Martin Ruthaivilavan</p>
            </div>

        </div>
    )
}

export default Home