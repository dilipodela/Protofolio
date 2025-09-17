'use client'

import React from 'react'
// import { SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';

const skills=[
    {
        name:'JavaScript',
        icon:null,
        percentage:89,
    },
     {
        name:'React.js',
        icon:null,
        percentage:92,
    },
     {
        name:'Next.js',
        icon:null,
        percentage:90,
    },
     {
        name:'Node.js',
        icon:null,
        percentage:80,
    },
     {
        name:'Tailwind CSS',
        icon:null,
        percentage:90,
    },
     {
        name:'TypeScript',
        icon:null,
        percentage:80,
    },

]


const Skills = () => {
  return (
    <div id="skills" className="text-white pt-16 pb-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
            My <span className='text-cyan-300'>Skills</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {skills.map((skill,i)=>{
             return (
                <div key={skill.name} data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={i*100} className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
                    {/* <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div> */}
                    
                    <p className="text-purple-400 mt-1">{skill.name}</p>
                </div>
             )}
        )}
        </div>
    </div>
  )
}

export default Skills;