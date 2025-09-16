import React from 'react'
import ResumeCard from './ResumeCard'
import {  FaSchool, FaUniversity } from 'react-icons/fa'
import { FaCodepen } from 'react-icons/fa6'
import { SlBubbles } from 'react-icons/sl'

import { IoSchoolSharp } from 'react-icons/io5'

const Resume = () => {
  return (
    <div id="resume" className="pt-20 pb-16">
        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
            {/* WORK PART */}
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">My Work <span className="text-cyan-200">Experience</span></h1>
                <div className="mt-10" data-aos="zoom-in" data-aos-anchor-placement="top-center">
                    <ResumeCard Icon={FaCodepen} role="Full-Stack Developer"/>
                    <ResumeCard Icon={SlBubbles} role="Chat-Bot Developer"/>
                    
                </div>
            </div>
            {/*education part*/}
            <div className="text-3xl sm:text-4xl font-bold text-white">
               <h1 className="text-3xl sm:text-4xl font-bold text-white">My <span className="text-cyan-200">Education</span></h1>
               <div className="mt-10"  data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    <ResumeCard Icon={IoSchoolSharp} role="Bachelor in Computer Science" date="Aug 2021 - May 2025" />
                    <ResumeCard Icon={FaUniversity} role="Inter in MPC" date="June 2019 - May 2021"/>
                    <ResumeCard Icon={FaSchool} role="School" date="June 2007 - May 2019"/>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Resume