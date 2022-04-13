import React from 'react'
import {useNavigate} from "react-router-dom"
import "./Home.css"

function Home() {
    let navigate = useNavigate()
  return (
    <div className='home'>
        <button className='company-number'>864-345-6789</button>
        <button className='company-directions'>Directions</button>
        <h1 className='welcome-title'>Welcome to Bob's Plumbing</h1>
        <div className='mission-container'>
            <div className='mission-statement'>
                <p><i>"Our mission at Bob's Plumbing is to build trusting relationships with our Customers and Suppliers allowing us to deliver the expertise and products the value."</i></p>
            </div>
            <img src="./mission-image.jpg" alt="" className='mission-img'></img>
        </div>
        <div className='button-container'>
            <button onClick={() => {navigate("/about")}}className='button-to-services'>Check out our Services</button>
        </div>
    </div>
  )
}

export default Home