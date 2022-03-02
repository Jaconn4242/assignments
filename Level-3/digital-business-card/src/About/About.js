import React from "react"
import "./About.css"

function About(){
    return (
        <div className="About--container">
            <h1 className="About--about-title">About</h1>
            <p className="About--description">
                I am a Software Engineer with a particular interest
                in making things simple and automating daily tasks.
                I try to keep up with security and best practices,
                and am always looking for new things to learn.
            </p>

            <h1 className="About--interests-title">Interests</h1>
            <p className="About--description">
                Outdoor enthusiast. Fisherman. Reader. Hiking fanatic                
                .Italian food buff. Travel geek. Ping Pong player.
                Entrepreneur.
            </p>
            <a href="" className="About--see-back-link">Tap to see back</a>
        </div>
    )
}

export default About;