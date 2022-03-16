import React from 'react'

function Preview(props) {
    console.log("preview data", props.data)
  return (
    <div className='Preview--container'>
        <div className='Preview--header'>
            <h1 className='Preview--year'>{props.data.year}</h1>
            <h1 className='Preview--make'>{props.data.make}</h1>
            <h1 className='Preview--model'>{props.data.model}</h1>
            <a href='www.google.com' className='Preview--contact-seller'>contact seller</a>
            <div className='Preview--contact-container'>
                <p className='Preview--contact-name'>{props.data.firstName} {props.data.lastName}</p>
                <p className='Preview--contact-email'>{props.data.email}</p>
            </div>
        </div>
        <div className='Preview--image-container'>
            <img className="Preview--image" alt=""src="./Airplane.jpg" /> 
        </div>
        <div className='Preview--aircraft-info-container'>
            <fieldset className='Preview--comments'>
                <legend>Comments</legend>
                <p>{props.data.comments}</p>
            </fieldset>
        </div>
    </div>
  )
}

export default Preview