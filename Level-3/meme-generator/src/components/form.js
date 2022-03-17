import React from "react"
import memesData from "../memesData"



export default function Form(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage(e){
        e.preventDefault()
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevState => ({
             ...prevState, 
             randomImage: url
        }))
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

