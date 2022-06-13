import React from 'react'
import {useNavigate} from "react-router-dom"
// import { MainContext } from '../context/ContextProvider'
import BabyBottle from "../images/BabyBottle.png"
import Diaper from "../images/Diaper.png"
import Crib from "../images/Crib.png"
import "../styles/Tracker.css"



function Trackers(props) {
    const {baby} = props

    const navigate = useNavigate()
  
  return (
    <div className='tracker-container'>
        <div onClick={() => navigate(`/feedingform/${baby._id}`)}>
            <img src={BabyBottle} alt="" />
            <p>Feeding session</p> 
        </div>
        <div onClick={() => navigate(`/diaperform/${baby._id}`)}>
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