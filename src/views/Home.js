import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import WordTyper from '../components/Theme/WordTyper';
import ContentBasic from '../components/Content/ContentBasic';
import Footer from '../components/Footer/Footer';
import HeadingOne from '../components/Heading/HeadingOne';
import images from '../constants/images';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaSquareXTwitter } from 'react-icons/fa6';
import CardCarousel from '../components/Experience/CardCarousel';
import ProjectCard from '../components/Projects/ProjectCard';


const Home = () => {

    const experienceData = [
        {
            year: '2020 - Present',
            title: 'Full-stack Software Developer',
            description: 'I led website development for budget-constrained clients, launching real estate sites with 30% more engagement and 20% lower bounce rates. Collaborated on a CSS/HTML CRM demo, built a hub for 400+ users, and managed resources for timely delivery. Used DBeaver/PostgreSQL for data relationships and scripted a Python rental ROI calculator. Managed API queries with ElephantSQL for statistical insights, all while ensuring responsive, scalable websites for improved user experiences.',
            tools: ['React', 'Flask', 'Django', 'JavaScript', 'Python', 'Git', 'Github', 'Node.js', 'Wix'],
        },
        {
            year: '2021 - 2023',
            title: 'Learning Facilitator • Synthesis',
            description: 'I assessed and guided 20 teachers, 200 students, and pioneered remote student internships. Developed a mental model curriculum, integrated innovative teaching methods, and facilitated collaborative problem-solving through computer game scenarios, enriching the educational experience.',
            tools: ['Slack', 'Retool', 'GSuite'],
        },
        {
            year: '2018 - 2020',
            title: 'Shareholder & Co-Creator • VMR-Services',
            description: "I launched a startup managing villas in Phuket, Thailand, listed on travel platforms. Unfortunately, COVID-19's impact forced our closure as travel halted, underscoring the pandemic's challenges in the industry.",
            tools: ['Kigo', 'WordPress', 'Microsoft Office Suite'],
        },
        {
            year: '2017 - 2020',
            title: 'Technology Design Teacher • Ruamrudee International School',
            description: 'I spearheaded, developed, and executed the establishment of a cutting-edge maker-space. My primary emphasis was on redesigning learning spaces, fostering creativity, innovation, and hands-on learning experiences for students and enthusiasts alike.',
            tools: ['XYZ 3D Printing', 'Design Thinking', 'Leadership'],
        },
        {
            year: '2012 - 2017',
            title: 'Learning Innovation Coach • Shekou International School',
            description: 'I took the lead in developing and implementing a transformative student-directed learning program spanning K-12, culminating in the creation of the "AMPed Guidebook." Furthermore, I fostered a culture of knowledge sharing among staff via Twitter, generating a remarkable 14 million impressions through #sisrocks, which directly contributed to a 200% surge in international teacher recruitment. Additionally, I co-authored a groundbreaking book, "Transform," that disseminates cutting-edge teaching and learning practices, further contributing to educational advancement and innovation.',
            tools: ['Apple Suite', 'WordPress', 'MakerBot 3D Printing'],
        },
    ];
    const projectData = [
        {
            title: 'Decision Harvest',
            description: 'This is the first card.',
            imageUrl: 'https://example.com/image1.jpg',
          },
          {
            title: 'Football Club',
            description: 'This is the second card.',
            imageUrl: 'https://example.com/image2.jpg',
          },
          {
            title: 'Portfolio ',
            description: 'This is the third card.',
            imageUrl: 'https://example.com/image3.jpg',
          },
    ];

    return (

        <div className=" mx-auto min-h-screen max-w-screen-xl dark:text-slate-100 text-gray-900 bg-slate-100 dark:bg-gray-900">
            <Navbar />

            <div className="md:p-0 p-5 md:h-[32rem] flex flex-col justify-center items-start"> {/* Add margin for spacing */}
                <HeadingOne
                    headingOneTitle="md:text-6xl text-4xl font-extrabold mb-3"
                    titleOne="Martin Ruthaivilavan"
                    tagOne="Collaboration-Focused Full Stack Developer"
                    headingOneTag="text-xl font-medium mb-3"
                    tagTwo="I create web products and digital experiences that are inclusive and mission-oriented"
                    headingTwoTag="text-slate-500 md:mb-7"
                />
                <div className="flex flex-row md:mt-0 mt-5 items-start gap-8">
                    <a href="https://github.com/mruthai" target="_blank" rel="noreferrer" className="text-slate-500 dark:hover:text-slate-200 hover:text-gray-900"> <BsGithub size={24} /></a>
                    <a href="https://www.linkedin.com/in/martin-ruthaivilavan/" className="text-slate-500  dark:hover:text-slate-200 hover:text-gray-900"> <BsLinkedin size={24} /> </a>
                    <a href="https://twitter.com/mmruthai" className="text-slate-500  dark:hover:text-slate-200 hover:text-gray-900"> <FaSquareXTwitter size={28} /> </a>
                </div>
            </div>

            <div className="h-auto">
                <CardCarousel cardsData={experienceData} />
            </div>
            <div className="h-96">
                {projectData.map((card, index) => (
                    <ProjectCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                        projectContainer="flex flex-row gap-5"
                        projectImageCss=""
                        projectTitle=""
                        projectDescription=""
                    />
                ))}
            </div>
            <div className="h-auto py-10 ">
                <div id='about' className=" text-2xl flex md:mx-0 mx-5 md:flex-row gap-2 mb-7">
                    <h1 className="">I'm a</h1>
                    <WordTyper
                        classWordTyper="underline decoration-slate-500 font-bold text-2xl " />
                </div>
                <div className="flex md:gap-24 gap-10 flex-col-reverse md:flex-row md:justify-evenly justify-center items-center" >
                    <ContentBasic
                        classContentBasicCss="md:mx-0 mx-5"
                        classHeadingContent='text-3xl md:my-10'
                        contentTitle='About'
                        classParagraphContent='leading-loose md:text-lg'
                        contentParagraph={[
                            "In 2020, I transitioned from international technology education to digital problem-solving as a software developer. With a teaching background, I excelled in diverse team projects, collaboration, and empathy.",
                            "During this transformation, I led the creation of a K-12 self-directed program involving schools, parents, teachers, and administrators. It culminated in an interactive guidebook accessible via Apple Books. The book showcased my unwavering commitment to education and adaptability in tech and learning.",
                            "Simultaneously, I designed an innovative maker space to foster hands-on learning and creativity. It empowered students to explore and brought ideas to life. I also channeled my soccer coaching passion, emphasizing its skill-building potential.",
                            "Beyond the computer, I have guided fellow soccer coaches, emphasizing the sport's skill development aspect. My family and I explored new places and supported each other off the field. Balancing professional and personal passions embodied my holistic approach to life—always seeking growth, learning, and sharing meaningful experiences.",
                        ]}
                    />
                    <img className=" object-contain md:h-80 md:w-80 h-40 w-40 md:transform md:scale-x-[-1] " src={images.headshotTwo} alt="headshot" />
                </div>
            </div>
            <div className=" mx-10 my-10 ">
                <Footer />
            </div>
        </div>

    )
}

export default Home;