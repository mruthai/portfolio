import React from 'react'
import  Navbar  from '../components/Navbar/Navbar'
import HeadingOne from '../components/Heading/HeadingOne'
import WordTyper from '../components/Theme/WordTyper'

const Home = () => {

    return (
        <div className="dark:text-slate-200 text-gray-900 bg-slate-100 dark:bg-gray-900 ">
            <Navbar />
                <div className="">
                    <HeadingOne 
                    pOne={"Hi I'm"}
                    pTwo={"Martin"}
                 
                    />
                    <WordTyper />
                </div>
        </div>
    )
}

export default Home