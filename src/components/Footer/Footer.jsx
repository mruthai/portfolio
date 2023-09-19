import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <div >
            <div className="flex md:flex-row flex-col justify-center items-center gap-10 ">

                <div className="md:space-y-2 flex md:flex-col gap-2 justify-center">
                    <a href="https://github.com/mruthai" className="flex md:flex-row items-center "> <BsGithub size={24} /></a>
                    <a href="https://www.linkedin.com/in/martin-ruthaivilavan/" className="flex md:flex-row md:text:m text-sm items-center gap-1"> <BsLinkedin size={24} /> </a>
                </div>
                <div>
                    <p>something here</p>
                </div>
                <div>
                    <p>something here</p>
                </div>
            </div>
            <div className="my-10 mb-1">

            <p className="md:text-sm text-xs flex justify-center">© All rights reserved 2023. Martin Ruthaivilavan</p>
            </div>
        </div>
    )
}

export default Footer