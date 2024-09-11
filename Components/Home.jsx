import React, { useState } from 'react'
import Smartcontainer from '../Components/Smartcontainer'
import { Link } from 'react-router-dom'



function Home({ locstate, setLocstate, regstate, setRoutersstate }) {
  
   
  return (
      <div>
          {/* <div>Home</div> */}

          <div id="innerbody">
        <div id="advertisement">
           <img src="https://www.bigbasket.com/media/uploads/banner_images/b2c081912730-24800_b2c_hp_dnc_cm_domex_460_250824_all.jpg?tr=w-1920,q=80"/>
        </div>

        <div id="innerbuttons">
            <div>EGGS,MEAT AND FISH</div>
            <div id="newpassbut" onClick={()=>{window.location.href="https://www.tatadigital.com/neupass?nc=b-cp-hp-sec3&b_t=cp_hp_sec3&b_camp=hp_topstrip_m_250923_02png&t_from_ban=7897268&t_pos=2&t_ch=desktop"}}>NEW<span>PASS</span></div>
            <div id="vedabut"><Link to="/ayurveda" style={{textDecoration:"none",color:'white'}}>AYURVEDA</Link>  </div>
            <div>BUY MORE SAVE MORE</div>
            <div>DEALS OF THE WEAK</div>
            <div>COMBO STORE</div>
        </div>
        <div id="smartbasket">
            <Smartcontainer/>
        </div>
      </div>
    </div>
  )
}

export default Home