import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserProvider.js'
import "../styles/Aircraft.css"

export default function Aircraft(props){

  const {getAircraftComments, aircraftComments} = useContext(UserContext)
  const [showComments, setShowComments] = useState(false)
  const [displayAddition, setDisplayAddition] = useState(false)
  const { year,
    make,
    model,
    description,
    imgUrl,
    _id
  } = props
  
  useEffect(()=> {
    getAircraftComments(_id)
  }, [])


console.log(aircraftComments)
  console.log(_id)
  return (
    <div className="airplane">
      <h1 className='aircraft-title'>{year}{make}{model}</h1>
      <img className='aircraft-image' src={imgUrl} alt={imgUrl}/>
      <h3>{ description }</h3>
      <div>
      <button onClick={() => setShowComments(!showComments)}>show comments</button>
      </div>
      {showComments ? <div>
      {aircraftComments.map(comment => {
        return <div key={comment._id} className="comment">{comment.comment}</div>
      })}
      <span  onClick={()=> setDisplayAddition(!displayAddition)} >Add Comment</span>
      {displayAddition ? <textarea  cols="30" rows="3"></textarea>: null}
      </div> : null}
    </div>
  )
}