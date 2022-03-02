import React from 'react';
import "./Intro.css"

function Intro(){
    return (
// Intro **BEGIN**
        <div className="Intro--container">
{/* Self-image */}
            <img src="./headshot.jpg" className="Intro--headshot"></img>
{/* Name */}
            <h2 className="Intro--name">Jeffrey Conn</h2>
{/* Job-title */}
            <p className='Intro--job-title'>Javascript Web Developer</p>
{/* Button Container */}
            <section className="Intro--button-container">
{/* Email Button */}
                <button className="Intro--email-button">
                    <img src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/64/000000/external-email-communication-nawicon-detailed-outline-nawicon-2.png" className='Intro--email-logo'/>
                    <a href='www.gmail.com' className='Intro--email-link'>Email</a>
                </button>
{/* LinkedIn Button */}
                <button className="Intro--linkedIn-button">
                <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"className='Intro--linkedIn-logo'/> 
                <a href='www.gmail.com' className='Intro--linkedIn-link'>LinkedIn</a>
                </button>
            </section>

        </div>
// Intro **END**
    );
}

export default Intro;