'use client';
import React from 'react';
import Nav from './Nav';
import Mobilenav from './Mobilenav';



const Responsivenav = () => {


    const [shownav,setshownav] = React.useState(false); 

    const onavhandler=()=>setshownav(true);
    const cnavhandler=()=>setshownav(false);

  return (
    <div>
        <Nav onav={onavhandler} />
        <Mobilenav  shownav={shownav} closenav={cnavhandler}/>
    </div>
  )
}

export default Responsivenav