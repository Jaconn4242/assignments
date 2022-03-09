import React from "react"
import memesData from "../memesData"



export default function Form(){
    const [memeImage, setMemeImage] = React.useState("")
    



    function getMemeImage(e){
        e.preventDefault()
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        console.log(setMemeImage)
    }
    return (
        <main>
            <form className="Form">
                <input className="Form--input" type="text" placeholder="Top Text"></input>
                <input className="Form--input" type="text" placeholder="Bottom Text"></input>
                <button onClick={getMemeImage} className="Form--button">Get a new meme image</button>
            </form>
            <img src={memeImage} className="Form--meme-image"></img>
        </main>
    )
}

