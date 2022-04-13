import React, {useState} from 'react'
import "./Thing.css"

function Thing(props) {
    const {title, imgUrl, description, handleDelete, handleEdit} = props
    console.log("props", props)
    const date = new Date()

    // LOCAL STATE FOR TOGGLING EDIT MARKUP
    const [editing, setEditing] = useState(false)
    const [newInput, saveNewInput] = useState({
      title: "",
      imgUrl: {imgUrl},
      description: ""

    })

    function handleChange(e){
      const {name, value} = e.target
      saveNewInput(prevState => ({...prevState, [name]:value}))
    }

    function toggle() {
      setEditing(true)
    }

    function deleteThing(e) {
      e.preventDefault()
      handleDelete(props._id)
    }

    function updateThing(e) {
      e.preventDefault()
      handleEdit(props._id, newInput.firstName)
      setEditing(false)
    }
    console.log(`New Input:`, newInput)
  return (
    <div className='thing-container'>
        <small className='thing-date'>Posted @{date.getHours()}:{date.getMinutes()}</small>
        {!editing ? <h1 className='thing-title'>{title}</h1> :
                    <input name="title" 
                           type="text"
                           className='thing-new-title-input'
                           onChange={handleChange}
                           value={newInput.title}
                           placeholder={title}
                           ></input>}
        {!editing ? <p>{description}</p> :
                    <input name="description" 
                           type="text"
                           className='thing-new-description-input'
                           onChange={handleChange}
                           value={newInput.description}
                           placeholder={description}
                           ></input>}
        <img className="thing-image" src={imgUrl} alt="" />
        <div className='thing-button-wrapper'>
          <button onClick={deleteThing}className='thing-delete-button'>Delete</button>
          {!editing ? <button onClick={toggle}className='thing-edit-button'>Edit</button> :
                      <button onClick={updateThing}className='thing-save-button'>Save</button>}
        </div>
    </div>
  )
}

export default React.memo(Thing)

// Random image used for testing
// https://i2-prod.dailyrecord.co.uk/incoming/article25021142.ece/ALTERNATES/s1200c/0_JS245444663.jpg