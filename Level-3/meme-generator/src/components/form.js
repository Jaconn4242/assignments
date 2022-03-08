import React from "react"

export default function Form(){
    return (
        <main>
            <form className="Form">
                <input className="Form--input" type="text" placeholder="Top Text"></input>
                <input className="Form--input" type="text" placeholder="Bottom Text"></input>
                <button className="Form--button">Get a new meme image</button>
            </form>
        </main>
    )
}