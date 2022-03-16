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

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <main>
            <div className="Form">
                <input 
                    className="Form--input" 
                    type="text" 
                    placeholder="Top Text" 
                    name="topText" 
                    value={meme.topText}
                    onChange={handleChange}
                    />
                <input 
                    className="Form--input" 
                    type="text" 
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    />
                <button 
                    onClick={getMemeImage} 
                    className="Form--button"
                    >
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
            <img src={meme.randomImage} className="Form--meme-image"></img>
            <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

