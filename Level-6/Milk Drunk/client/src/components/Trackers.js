import React from 'react'
import "../styles/Tracker.css"
import BabyBottle from "../images/BabyBottle.png"
import Diaper from "../images/Diaper.png"
import Crib from "../images/Crib.png"



function Trackers() {
  return (
    <div className='tracker-container'>
        <div>
            <img src={BabyBottle} alt="" />
            <p>Feeding session</p> 
        </div>
        <div>
            <img src={Diaper} alt="" />
            <p>Diaper change</p> 
        </div>
        <div>
            <img src={Crib} alt="" />
            <p>Sleep time</p> 
        </div>
    </div>
  )
}

export default Trackers