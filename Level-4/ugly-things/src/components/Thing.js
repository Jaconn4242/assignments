import React from 'react'
import "./Thing.css"

function Thing(props) {
    const {title, imgUrl, description, handleDelete} = props
    console.log("props", props)
    const date = new Date()

    function deleteThing(e) {
      e.preventDefault()
      handleDelete(props._id)
    }

  return (
    <div className='thing-container'>
        <small className='thing-date'>Posted @{date.getHours()}:{date.getMinutes()}</small>
        <h1 className='thing-title'>{title}</h1>
        <p>{description}</p>
        <img className="thing-image" src={imgUrl} alt="" />
        <div className='thing-button-wrapper'>
          <button onClick={deleteThing}className='thing-delete-button'>Delete</button>
          <button className='thing-edit-button'>Edit</button>
        </div>
    </div>
  )
}

export default React.memo(Thing)

// Random image used for testing
// https://i2-prod.dailyrecord.co.uk/incoming/article25021142.ece/ALTERNATES/s1200c/0_JS245444663.jpg