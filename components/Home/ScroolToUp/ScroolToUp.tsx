'use client'
import React,{useState,useEffect} from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScroolToUp = () => {
    const[isvisible,setisvisible] = useState(false);
//scroll to top button based on scroll position
    useEffect(()=>{
        const tooglevisability = () => {
            if (window.scrollY > 300) setisvisible(true);
            else setisvisible(false);
        }
        window.addEventListener("scroll",tooglevisability);
        return()=> window.removeEventListener('scroll',tooglevisability);

    },[]);

    // scroll to top function

    const scrolltotop = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div className="fixed bottom-4 animat-pluse right-4">
        {isvisible && (
            <button className="bg-blue-950/60 cursor-pointer text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none" onClick={scrolltotop}>
                <FaArrowUp />
            </button>
        )}
    </div>
  )
}

export default ScroolToUp