import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import WordTyper from '../components/Theme/WordTyper'
import ContentBasic from '../components/Content/ContentBasic'
import Footer from '../components/Footer/Footer'
import HeadingOne from '../components/Heading/HeadingOne'
import images from '../constants/images'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Home = () => {

    return (
        <div className=" mx-auto min-h-screen max-w-screen-xl dark:text-slate-100 text-gray-900 bg-slate-100 dark:bg-gray-900">
            <Navbar />
            <div className=" my-20">
                <div className=""> {/* Add margin for spacing */}
                    <HeadingOne
                        headingOneTitle="text-6xl font-extrabold mb-3"
                        titleOne="Martin Ruthaivilavan"
                        tagOne="Collaboration-Focused Full Stack Developer"
                        headingOneTag="text-xl font-medium mb-3"
                        tagTwo="I create web products and digital experiences that prioritize accessibility and inclusivity"
                        headingTwoTag="text-slate-500 mb-10"
                    />
                </div>
                <div className="flex flex-row gap-8">
                    <a href="https://github.com/mruthai" className="text-slate-500"> <BsGithub size={24} /></a>
                    <a href="https://www.linkedin.com/in/martin-ruthaivilavan/" className="text-slate-500"> <BsLinkedin size={24} /> </a>
                </div>
            </div>


            <div id='about' className=" text-2xl flex md:flex-row flex-col gap-2 mb-7">
                <h1 className="">I'm a</h1>
                <WordTyper
                    classWordTyper="underline decoration-slate-500 font-bold text-2xl " />
            </div>
            <div className="flex gap-24 flex-col-reverse md:flex-row md:justify-evenly justify-center items-center" >
                <ContentBasic
                    classContentBasicCss=""
                    classHeadingContent='text-3xl my-10'
                    contentTitle='About'
                    classParagraphContent='leading-loose text-lg'
                    contentParagraph={[
                        "In 2020, I embarked on a significant shift, moving away from my role in international technology education towards a newfound focus on solving meaningful problems beyond the classroom.",
                        "As a software developer with a background in international technology education, I discovered a deep-seated passion for collaborative problem-solving. This led me to engage with diverse teams, each project presenting a unique challenge waiting to be conquered.",
                        "Beyond my software development pursuits, I have a second passion: coaching on the football (soccer) field. Here, I mentor young individuals, not only in the sport but also in the essential art of collaborative problem-solving. As a tech problem solver and a mentor, this dual role enables me to marry my love for connecting with people with my unwavering commitment to positively impacting the world.",
                        "My transition from teaching in 2020 has allowed me to redirect my energy and skills toward innovative problem-solving and creating a meaningful difference in the lives of those I interact with.",
                        "I spend time trying to explore the world with my family when I'm not at my computer or on the pitch."
                    ]}
                />
                <img className="object-contain md:h-80 md:w-80 h-40 w-40 rounded-md dark:bg-slate-100 text-slate-100 md:transform md:scale-x-[-1] " src={images.headshotTwo} alt="headshot" />
            </div>
            <div className=" mx-10 my-10 ">

                <Footer />
            </div>
        </div>
    )
}

export default Home