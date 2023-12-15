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
            year: 'Oct. 2023 - Dec. 2023',
            title: 'Frontend Developer • Co.Lab',
            description: "During an 8-week AGILE program, I successfully provided technical specifications and actively engaged in the agile development process. I took the lead in spearheading frontend development, refining the product designer's iteration to elevate the user interface and experience. Additionally, I co-orchestrated the entire development life cycle, overseeing planning, execution, and testing to ensure the seamless delivery of high-quality software solutions, showcasing effective prioritization and adaptability in response to evolving project requirements.",
            tools: ['React', 'Typescript', 'Vite', 'Tailwindcss', 'Trello'],
        },

        {
            year: '2020 - Present',
            title: 'Full-stack Software Developer',
            description: 'I led website development for budget-constrained clients, launching real estate sites with 30% more engagement and 20% lower bounce rates. Collaborated on a CSS/HTML CRM demo, built a hub for 400+ users, and managed resources for timely delivery. Used DBeaver/PostgreSQL for data relationships and scripted a Python rental ROI calculator. Managed API queries with ElephantSQL for statistical insights, all while ensuring responsive, scalable websites for improved user experiences.',
            tools: ['React', 'Flask', 'Django', 'JavaScript', 'Python', 'Git', 'Github', 'Node.js', 'Wix', 'WordPress'],
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
    ];
    const projectData = [
        {
            title: 'AI-Personalized Cover Letter',
            description: 'As the sole frontend developer on an 8-week AGILE team, I successfully spearheaded the development of a streamlined MVP, empowering job applicants with a personalized cover letter solution.',
            imageUrl: `${images.yeonjii}`,
            projectTools: ['React', 'Typescript', 'Vite', 'Tailwindcss', 'Netlify'],
            projectUrl: 'https://yeonjii.netlify.app/'
        },
        {
            title: 'Football Club',
            description: 'Local soccer club needed a way to pass down the knowledge they have captured over the years. This web application showcases programs, competition dynamics, and scheduling. The site has over 400 views, allowing the club to be more transparent in its development process.',
            imageUrl: `${images.soccerClub}`,
            projectTools: ['React', 'JavaScript', 'Node.Js'],
            projectUrl: 'https://osusc.netlify.app/'
        },
        {
            title: 'Decision Harvest',
            description: 'Built a full-stack decision app for farmers using React, integrated real-time stock data, managed user info in Firestore, and deployed the application using Netlify.',
            imageUrl: `${images.decisionHarvest}`,
            projectTools: ['React', 'JavaScript', 'Firebase', 'Netlify'],
            projectUrl: 'https://decision-harvest.netlify.app/'
        },
    ];

    /* returning all the components  */

    return (

        <div className="dark:text-gray-900 dark:bg-slate-100 text-slate-100  bg-gray-900">
            <Navbar />
            <div className="flex md:flex-row flex-col md:h-[32rem] md:gap-20 ">
                <div className="flex md:justify-center md:pl-0 pl-5 items-center">
                    <img className="md:h-40 md:w-40 h-20 w-20 rounded-lg md:-rotate-6 rotate-0 grayscale" src={images.headshot} alt="headshot" />
                </div>
                <div className="md:ml-5 md:p-0 p-5  flex flex-col justify-center items-start">
                    <HeadingOne
                        headingOneTitle="md:text-6xl text-4xl font-extrabold mb-3"
                        titleOne="Martin Ruthaivilavan"
                        tagOne="Collaboration-Focused Full Stack Developer"
                        headingOneTag="text-xl font-medium mb-3"
                        tagTwo="I create web products and digital experiences that are inclusive and mission-oriented"
                        headingTwoTag="text-slate-500 md:mb-7"
                    />
                    <div className="flex flex-row md:mt-0 mt-5 items-start gap-8">
                        <a href="https://github.com/mruthai" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-200 dark:hover:text-gray-900"> <BsGithub size={24} /></a>
                        <a href="https://www.linkedin.com/in/martin-ruthaivilavan/" target="_blank" rel="noreferrer" className="text-slate-500  hover:text-slate-200 dark:hover:text-gray-900"> <BsLinkedin size={24} /> </a>
                        <a href="https://twitter.com/mmruthai" target="_blank" rel="noreferrer" className="text-slate-500  hover:text-slate-200 dark:hover:text-gray-900"> <FaSquareXTwitter size={28} /> </a>
                    </div>
                </div>
            </div>
            <div id="experience" className="h-auto">
                <CardCarousel cardsData={experienceData} />
            </div>
            <div id="projects" className="h-auto md:mx-0 mx-5 space-y-14">
                <h1 className="ml-5 text-2xl font-bold">Projects</h1>
                {projectData.map((card, index) => (
                    <ProjectCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                        projectContainer="md:h-44 md:ml-5 flex md:flex-row flex-col items-center md:gap-16 gap-12 "
                        projectMiniContainerOne="flex md:flex-row flex-col md:m-4"
                        projectMiniContainerTwo="p-3 transition-all ease-in duration-300 hover:bg-gray-800 dark:hover:bg-slate-50 shadow-xl rounded-lg"
                        projectImageCss=" md:order-none order-3  md:w-72 md:h-40 w-42 h-40 rounded-md border-2 dark:border-slate-300 border-slate-700"
                        projectTitle=" md:order-none order-1 text-lg font-bold"
                        projectDescription=" max-w-2xl md:order-none order-2 mb-3"
                        projectUl=" md:flex md:flex-row flex flex-wrap md:gap-4 gap-2 my-3"
                        projectToolCss="md:my-3 md:mt-0 mt-2 md:mb-0 mb-2 text-sm rounded-xl bg-gray-200 px-3 py-1 text-slate-500 hover:bg-gray-300 hover:text-slate-900"
                        projectTools={card.projectTools}
                        projectLink="text-slate-500 hover:text-purple-400"
                        projectUrl={card.projectUrl}

                    />
                ))}
            </div>
            <div className="h-auto py-32 ">
                <div id='about' className=" text-2xl flex md:mx-0 mx-5 md:flex-row gap-2 mb-7">
                    <h1 className="">I'm a</h1>
                    <WordTyper
                        classWordTyper="underline decoration-slate-500 font-bold text-2xl " />
                </div>
                <div className="flex md:gap-24 gap-10  flex-col-reverse md:flex-row md:justify-evenly justify-center items-center" >
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
                    <img className=" object-contain md:h-80 md:w-80 h-40 w-40 md:transform md:scale-x-[-1] invert dark:invert-0" src={images.headshotTwo} alt="headshot" />
                </div>
            </div>
            <div className="h-auto">
                <Footer />
            </div>
        </div>

    )
}

export default Home;