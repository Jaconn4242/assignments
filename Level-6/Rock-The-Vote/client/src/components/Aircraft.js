import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserProvider.js'
import ThumbDown from "../images/ThumbDown.png"
import ThumbUp from "../images/ThumbUp.png"
import "../styles/Aircraft.css"

export default function Aircraft(props){

  const { getUserAircraft, userAxios} = useContext(UserContext)
  const [showComments, setShowComments] = useState(false)
  const [displayAddition, setDisplayAddition] = useState(false)
  const [inputs, setInputs] = useState({comment: ""})
  const [aircraftComments, setAircraftComments]= useState([])

  const { 
    year,
    make,
    model,
    description,
    imgUrl,
    upVotes,
    downVotes,
    _id,
    deleteUserAircraft
  } = props

  function newGetComments(aircraftId){
     userAxios.get(`api/aircraft/comments/${aircraftId}/comments`)
  .then(res => setAircraftComments(res.data))
  .catch(err => console.log(err.response.data.errMsg))
  }

  function addAircraftComment(aircraftId, newComment){
    userAxios.post(`api/aircraft/comments/${aircraftId}/comments`, newComment)
    .then(res => setAircraftComments(prevState => [...prevState, res.data]))
    .catch(err => console.log(err.response.data.errMsg))
  }
 
  useEffect(()=> {
    newGetComments(_id)
    getUserAircraft(_id)
    // eslint-disable-next-line
  }, [])

  function onChange(e) {
    const {name, value} = e.target
    setInputs(prevState => ({...prevState, [name]: value}))
  }
  function commentSubmission(e) {
    e.preventDefault()
    addAircraftComment(_id, inputs)
  }
  function deleteAircraft(){
    deleteUserAircraft(_id)
    getUserAircraft(_id)
  }
// console.log(aircraftComments)
  return (
    <div className="airplane">
      <span className='delete-button' onClick={deleteAircraft}>Delete</span>
      <h1 className='aircraft-title'>{year} {make} {model}</h1>
      <img className='aircraft-image' src={imgUrl} alt={imgUrl}/>
      <h3>{ description }</h3>
        <div className='ratings-container'>
          <p><img src={ThumbUp} alt="" />{`Likes:${upVotes.length}`}</p>
          <p><img src={ThumbDown} alt="" />{`Dislikes:${downVotes.length}`}</p>
        </div>
      {!showComments ?<button onClick={() => setShowComments(!showComments)}>show comments</button>:
      <button onClick={() => setShowComments(!showComments)}>collapse comments</button>}
      {showComments ? <div>
      {aircraftComments.map(comment => {
        return <div key={comment._id} className="comment">{comment.comment}</div>
      })}

      <span  onClick={()=> setDisplayAddition(!displayAddition)} >Add Comment</span>
      {displayAddition ? 
        <form onSubmit={commentSubmission}>
          <input  
          type="text"
          name="comment"
          onChange={onChange}
          value={inputs.comment}
          placeholder="Enter Comment"
          />
          <button>Submit Comment</button>
        </form>: null}

      </div> : null}
    </div>
  )
}