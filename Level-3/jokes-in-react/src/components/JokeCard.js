import React from "react"
import "./Joke.css"

function Joke(props){
    return (
        <div className="Joke--container">
            <h1>{props.setup}</h1>
            <h3>{props.punchline}</h3>
            <textarea className="newInput"placeholder="What did ya think?"></textarea>
        </div>
    )
}

export default Joke;