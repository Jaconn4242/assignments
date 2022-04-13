import React from 'react'
import "./Services.css"


function Services() {
  return (
    <div className='services-page'>
        <h3 className='services-title'>If you need a plumber in Pickens or the nearby area, you've come to the right place! From repairs and maintenance to installations and replacement, our experts can handle all of your residential plumbing needs, including:</h3>
        <ul className='services-list'>
            <li>24/7 Emergency Service</li>
            <li>Drain / Sewer Line Cleaning</li>
            <li>Leak Repair / Detection</li>
            <li>Water Heater Repair / Install</li>
            <li>Sink Repair / Install</li>
            <li>Shower / Bathtub Repair / Install</li>
            <li>Faucet Repair / Install</li>
            <li>Garbage Disposal Repair / Install</li>
            <li>Water Softener Repair / Install</li>
            <li>Gas Line Repair / Install</li>
            <li>Sump Pump Repair / Install</li>
        </ul>
        <br />
        <button className='call-button'>Call us now!</button>
    </div>
  )
}

export default Services 