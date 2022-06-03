import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../context/UserProvider.js'
import ThumbDown from "../images/ThumbDown.png"
import ThumbUp from "../images/ThumbUp.png"
import "../styles/PublicAircraft.css"

function PublicAircraft(props) {
    const {year, make, model, description, imgUrl, _id} = props
    const {userAxios,getUserAircraft} = useContext(UserContext)
    const [aircraftComments, setAircraftComments] = useState([])
    const [showComments, setShowComments] = useState(false)
    const [inputs, setInputs] = useState({comment: ""})

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

      function onChange(e) {
        const {name, value} = e.target
        setInputs(prevState => ({...prevState, [name]: value}))
      }
      
      function commentSubmission(e) {
        e.preventDefault()
        addAircraftComment(_id, inputs)
      }  

    useEffect(()=> {
        newGetComments(_id)
        getUserAircraft(_id)
    }, [])
  return (
    <div className='public-aircraft-container'>
            <p className='public-aircraft-title'>{year} {make} {model}</p>
            <div className='img-desc-wrapper'>
                <img src={imgUrl} alt="" width={200} height={150} />
                <p>{description}</p>
            </div>
            <h5 className='comment-title' onClick={() => setShowComments(!showComments)}>See Comments...</h5>
            {showComments ? <div>
                {aircraftComments.map(comment => {
                return <div key={comment._id} className="public-comment">
                    <small className='public-comment-user'>{comment.user}</small>
                    <p>{comment.comment}</p>
                    </div>
            })}
            <form onSubmit={commentSubmission}>
                <input  
                type="text"
                name="comment"
                onChange={onChange}
                value={inputs.comment}
                placeholder="Add a Comment"
                className='add-comment'
                />
                <button>Send</button>
            </form>
            </div>: null}
    </div>
  )
}

export default PublicAircraft