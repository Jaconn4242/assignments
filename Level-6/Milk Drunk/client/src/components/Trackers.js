import React from 'react'
import {useNavigate} from "react-router-dom"
import BabyBottle from "../images/BabyBottle.png"
import Diaper from "../images/Diaper.png"
import Crib from "../images/Crib.png"
import "../styles/Tracker.css"



function Trackers() {

    const navigate = useNavigate()

  return (
    <div className='tracker-container'>
        <div onClick={() => navigate("/profile/diaperform")}>
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