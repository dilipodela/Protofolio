'use client'

import React from 'react'
import { 
    siJavascript, 
    siNextdotjs, 
    siNodedotjs, 
    siReact, 
    siTailwindcss, 
    siTypescript 
} from 'simple-icons';

const skills = [
    {
        name: 'JavaScript',
        icon: siJavascript,
    },
    {
        name: 'React.js',
        icon: siReact,
    },
    {
        name: 'Next.js',
        icon: siNextdotjs,
    },
    {
        name: 'Node.js',
        icon: siNodedotjs,
    },
    {
        name: 'Tailwind CSS',
        icon: siTailwindcss,
    },
    {
        name: 'TypeScript',
        icon: siTypescript,
    },
]

const Skills = () => {
  return (
    <div id="skills" className="text-white pt-16 pb-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
            My <span className='text-cyan-300'>Skills</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {skills.map((skill, i) => {
             return (
                <div key={skill.name} data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={i * 100} className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
                    <div className="text-5xl mb-4 text-gray-300">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto" fill="currentColor">
                            <title>{skill.icon.title}</title>
                            <path d={skill.icon.path} />
                        </svg>
                    </div>
                    <p className="text-purple-400 mt-1">{skill.name}</p>
                </div>
             )
          })}
        </div>
    </div>
  )
}

export default Skills;