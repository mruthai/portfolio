import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import WordTyper from '../components/Theme/WordTyper'
import ContentBasic from '../components/Content/ContentBasic'
import Footer from '../components/Footer/Footer'
import images from '../constants/images'

const Home = () => {

    return (
        <div className="dark:text-slate-100 text-gray-900 bg-slate-100 dark:bg-gray-900">
            <Navbar />
            <div className="">
                <WordTyper
                classWordTyperContainer="relative flex md:flex-row flex-col justify-center items-center h-96"
                customClassName="absolut text-3xl"
                classWordTyper="underline text-cyan-500 md:pl-40 text-3xl" />
            </div>
            <div className="flex flex-col-reverse md:flex-row md:justify-evenly justify-center items-center" >
                <ContentBasic
                    classContentBasicCss="md:w-1/3 mx-5"
                    classHeadingContent='text-3xl'
                    contentTitle='About'
                    classParagraphContent='leading-loose'
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