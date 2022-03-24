import React from "react"
import Saved from "./Saved"

export default function Form() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
         async function grabMemeData() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
         } 
         grabMemeData()
    }, [])
    
    function grabRandomUrl() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function onChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    const [savedList, setSavedList] = React.useState([])

    const addMemeToList = (e) => {
        e.preventDefault()
        setSavedList(prevState => ([...prevState, meme]))
        setMeme({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg" 
        })
    }
    function deleteMeme(id) {
        
        setSavedList(prevState => prevState.filter((meme, i) => (i !== id )))
    }
    function customize(id, newInput) {
        console.log(newInput, id)
        setSavedList(prevState => prevState.map((meme, i) => (i === id ? {...meme, topText: newInput.newTop, bottomText: newInput.newBottom }: meme)))
    }
    

    const savedElements = savedList.map((item, i) => {
        return (<Saved {...item} key={i} id={i} customize={customize} deleteMeme={deleteMeme} />)
    })
      
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={onChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={onChange}
                />
                <button 
                    className="form--button"
                    onClick={grabRandomUrl}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <div className="addButton-wrapper">
                    <button className="addButton" onClick={addMemeToList}>Add to your list</button>
            </div>
            {savedList.length >= 1 ? <div className="main-bottom">
                <section className="list-section">
                    {savedElements}
                </section>
            </div>: null}
        </main>
    )
}