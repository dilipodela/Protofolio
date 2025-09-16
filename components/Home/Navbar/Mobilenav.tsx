// import React from 'react'
// import { Navlinks } from '../../../constant/constant';
// import Link from 'next/link';
// import { CgClose } from 'react-icons/cg';


// type Props = {
//     shownav:boolean;
//     closenav:()=>void;
// };
// const Mobilenav = ({closenav,shownav}:Props) => {

//    const navoen=shownav ? "translate-x-0":"translate-x-[-100%]";



//   return (
//     <div>
//         {/* overlay */}
//         {/* <div className={`fixed inset-0 ${navoen}  right-0 duration-500 z-[100002] bg-black
//         opacity-70 w-full h-screen`}></div> */}
//         <div
//   className="fixed inset-0 bg-black opacity-70 z-[100002] transition-opacity duration-500"
//   onClick={closenav}
// />

//             {/* navlinks */}
//             {/* <div className={`text-white ${navoen} fixed  justify-center flex flex-col h-full transform transition-all  duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[100050] right-0`}> */}
//             <div className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-cyan-800 z-[100050] transform ${navoen} transition-transform duration-500 flex flex-col space-y-6 justify-center`}
// >

//                {Navlinks.map((link)=>{
//                 return(
//                     <Link key={link.id} href={link.url}>
//                         <p className="text-white w-fit text-xl ml-12 boeder-b-[1.5px] pb-1 border-white sm:text-[30px]">{link.label}</p>
//                     </Link>
//                 )
//                })}
//                {/* cross icon */}
            
//            <CgClose className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 " onClick={closenav} /> 
//             </div>
  
//         </div>
    
//   );
// };

// export default Mobilenav;


import React from 'react';
import { Navlinks } from '../../../constant/constant';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';

type Props = {
  shownav: boolean;
  closenav: () => void;
};

const Mobilenav = ({ closenav, shownav }: Props) => {
  const navopen = shownav ? 'translate-x-0' : 'translate-x-full';

  return (
    <div>
      {/* overlay */}
      {shownav && (
        <div
          className="fixed inset-0 bg-black opacity-70 z-[100002]"
          onClick={closenav}
        ></div>
      )}

      {/* nav panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-cyan-800 z-[100050] transform ${navopen} transition-transform duration-500 flex flex-col space-y-6 justify-center`}
      >
        {/* navlinks */}
        {Navlinks.map((link) => (
          <Link key={link.id} href={link.url} onClick={closenav}>
            <p className="text-white w-fit text-xl ml-12 border-b pb-1 border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}

        {/* close icon */}
        <CgClose
          className="absolute top-3 right-4 sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white"
          onClick={closenav}
        />
      </div>
    </div>
  );
};

export default Mobilenav;
