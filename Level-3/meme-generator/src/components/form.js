import React from "react"
import memesData from "../memesData"



export default function Form(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [AllMemeImages, setAllMemeImages] = React.useState(memesData)



    function getMemeImage(e){
        e.preventDefault()
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevState => {
            return {...prevState, randomImage: url}
        })
        
    }
    return (
        <main>
            <form className="Form">
                <input className="Form--input" type="text" placeholder="Top Text"></input>
                <input className="Form--input" type="text" placeholder="Bottom Text"></input>
                <button onClick={getMemeImage} className="Form--button">Get a new meme image</button>
            </form>
            <img src={meme.randomImage} className="Form--meme-image"></img>
        </main>
    )
}

