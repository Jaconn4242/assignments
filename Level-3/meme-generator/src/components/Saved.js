import React from 'react'

export default function Saved(props) {
    console.log("props",props)
    const { topText, bottomText, randomImage } = props
  return (
    <div className='saved-container'>
        <div className='individual-meme'>
            <img className="list-image" src={randomImage} alt="" />
            <h6 className="saved--text savedTop">{topText}</h6>
            <h6 className="saved--text savedBottom">{bottomText}</h6>  
        </div>
        <div className='saved-buttons'>
            <button className='delete-logo'>Delete
                <img src="./delete-logo.png" alt="" />
                </button>
            <button className='download-logo'>Download
            <img src="./download-logo.png" alt="" />
            </button>
        </div>
    </div>
  )
}
