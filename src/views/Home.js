import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import WordTyper from '../components/Theme/WordTyper';
import ContentBasic from '../components/Content/ContentBasic';
import Footer from '../components/Footer/Footer';
import HeadingOne from '../components/Heading/HeadingOne';
import images from '../constants/images';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaSquareXTwitter } from 'react-icons/fa6';
import CardCarousel from '../components/Card/CardCarousel';


const Home = () => {
    
    const cardsData = [
        {
            year: '2020 - Present',
            title:'Full-stack Software Developer',
            description: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
            tools: ['React', 'Flask', 'Django', 'JavaScript', 'Python' ],
        },
        {
            year: '2021 - 2022',
            title:'Learning Facilitator • Synthesis',
            description: 'This is the card description',
            tools: ['Slack', 'Retool', 'GSuite' ],
        },
        {
            year: '2018 - 2020',
            title:'Co-Creator • VMR-Services',
            description: 'This is the card description',
            tools: ['items 1', 'items 2', 'items 3' ],
        },
        {
            year: '2017 - 2020',
            title:'Technology Design Teacher • Ruamrudee International School',
            description: 'This is the card description',
            tools: ['items 1', 'items 2', 'items 3' ],
        },
        {
            year: '2012 - 2017',
            title:'Learning Innovation Coach • Shekou International School',
            description: 'This is the card description',
            tools: ['items 1', 'items 2', 'items 3' ],
        },
    ]

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
                        tagTwo="I create web products and digital experiences that are inclusive and mission-oriented"
                        headingTwoTag="text-slate-500 mb-7"
                    />
                </div>
                <div className="flex flex-row items-center gap-8">
                    <a href="https://github.com/mruthai" target="_blank" rel="noreferrer" className="text-slate-500 dark:hover:text-slate-200 hover:text-gray-900"> <BsGithub size={24} /></a>
                    <a href="https://www.linkedin.com/in/martin-ruthaivilavan/" className="text-slate-500  dark:hover:text-slate-200 hover:text-gray-900"> <BsLinkedin size={24} /> </a>
                    <a href="https://twitter.com/mmruthai" className="text-slate-500  dark:hover:text-slate-200 hover:text-gray-900"> <FaSquareXTwitter size={28} /> </a>
                </div>
            </div>
            <div>
                <CardCarousel cardsData={cardsData} />
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
                        "In 2020, I transitioned from international technology education to digital problem-solving as a software developer. With a teaching background, I excelled in diverse team projects, collaboration, and empathy.",
                        "During this transformation, I led the creation of a K-12 self-directed program involving schools, parents, teachers, and administrators. It culminated in an interactive guidebook accessible via Apple Books. The book showcased my unwavering commitment to education and adaptability in tech and learning.",
                        "Simultaneously, I designed an innovative maker space to foster hands-on learning and creativity. It empowered students to explore and brought ideas to life. I also channeled my soccer coaching passion, emphasizing its skill-building potential.",
                        "Beyond the computer, I have guided fellow soccer coaches, emphasizing the sport's skill development aspect. My family and I explored new places and supported each other off the field. Balancing professional and personal passions embodied my holistic approach to life—always seeking growth, learning, and sharing meaningful experiences.",
                    ]}
                />
                <img className="object-contain md:h-80 md:w-80 h-40 w-40 md:transform md:scale-x-[-1] " src={images.headshotTwo} alt="headshot" />
            </div>
            <div className=" mx-10 my-10 ">
                <Footer />
            </div>
        </div>

    )
}

export default Home;