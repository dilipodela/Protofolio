'use client'
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';

// import Resume from './Resume/Resume';
// import Projects from './Projects/Projects';
// import Skills from './Skills/Skills';
// import Contact from './Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);


  return (
    
    <div className="overflow-hidden ">
        <Hero />
        
        {/* <Resume /> */}
        {/* <Projects /> */}
        {/* <Skills /> */}
        {/* <Contact /> */}
        
    </div>
  )
}

export default Home;

//Localhost:3000
//Localhost:3000/about
//Localhost:3000/about/team
//Localhost:3000/about/team/dilip