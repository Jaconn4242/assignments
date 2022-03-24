import React, {useState} from 'react'

export default function Saved(props) {
    console.log("props", props)
    const { id, deleteMeme, customize, topText, bottomText, randomImage } = props

// deletes meme using a boolean.
// const [deletedMeme, setDeletedMeme] = useState(false)
const handleDelete = (e) => {
    e.preventDefault()
    deleteMeme(id)
}
// toggles edit off and on
const [toggle, setToggle] = useState(false)
const handleEdit = () => {
    setToggle(prevState => !prevState)
}
// creation of state grabbing new Input
const [newInput, setNewInput] = useState({
    newTop: "",
    newBottom: ""
})

const handleSave = () => {
    console.log("saved")
    customize(id, newInput)
        setToggle(false)
}

// grabs the value of the new edited
function onChange(e) {
  const {value, name} = e.target
  setNewInput(prevInput => ({...prevInput, [name]:value}))
}

// const [justDoIt, setJustDoIt] = useState(true)


  return (
      <>
   <div className='saved-container'>
        <div className='individual-meme'>
            <img className="list-image" src={randomImage} alt="" />
            {toggle ? 
                <>
                    <input 
                        name="newTop"
                        type="text" 
                        value={newInput.newTop} 
                        onChange={onChange}
                        placeholder={topText}
                        />
                        <input 
                        name="newBottom"
                        type="text" 
                        value={newInput.newBottom} 
                        onChange={onChange}
                        placeholder={bottomText}
                        />
                </>
                : 
                <>
                        <h6 className="saved--text savedTop">{topText}</h6>
                        <h6 className="saved--text savedBottom">{bottomText}</h6>  
                </>
                }
        </div>

        <div className='saved-buttons'>
            <button onClick={handleDelete} className='delete-logo'>Delete
                <img src="./delete-logo.png" alt="" />
                </button>
            {toggle ? <>
                <button onClick={handleSave}>save</button>
            </>:
            <button  onClick={handleEdit}className='download-logo'>edit
            <img src="./download-logo.png" alt="" />
            </button>}
        </div>
    </div>
    </>
  )
}
