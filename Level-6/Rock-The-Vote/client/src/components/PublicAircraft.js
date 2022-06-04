import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../context/UserProvider.js'
import ThumbDown from "../images/ThumbDown.png"
import ThumbUp from "../images/ThumbUp.png"
import "../styles/PublicAircraft.css"

function PublicAircraft(props) {
    const {year, make, model, description, imgUrl, _id, user, upVotes, downVotes} = props
    const {userAxios,getUserAircraft} = useContext(UserContext)
    const [aircraftComments, setAircraftComments] = useState([])
    const [showComments, setShowComments] = useState(false)
    const initInputs = {comment: ""}
    const [inputs, setInputs] = useState({initInputs})

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
        setInputs(initInputs)
      }  

      function handleUpVote(e){
          e.preventDefault()
        const good = _id

        userAxios.put(`api/aircraft/${good}/upvote`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        console.log(good)
      }

    useEffect(()=> {
        newGetComments(_id)
        getUserAircraft(_id)
        // eslint-disable-next-line 
    }, [])
  return (
    <div className='public-aircraft-container'>
        <p>{}</p>
            <p className='public-aircraft-title'>{year} {make} {model}</p>
            <div className='img-desc-wrapper'>
                <img src={imgUrl} alt="" width={215} height={150} />
                <p>{description}</p>
            </div>
            <div className='ratings-container'>
                <p onClick={handleUpVote} ><img src={ThumbUp} alt="" />{`Likes:${upVotes.length}`}</p>
                <p><img src={ThumbDown} alt="" />{`Dislikes:${downVotes.length}`}</p>
            </div>
            {!showComments ?
            <h5 className='comment-title' onClick={() => setShowComments(!showComments)}>show comments</h5>:
            <h5 className='comment-title' onClick={() => setShowComments(!showComments)}>collapse comments</h5>}
            {showComments ? <div>
                {aircraftComments.map(comment => {
                return <div key={comment._id} className="public-comment">
                    <small className='public-comment-user'>{comment.user}</small>
                    <p>{comment.comment}</p><span onClick={()=> {
                        if(user._id === comment.user){
                                userAxios.delete(`api/aircraft/comments/${_id}/comments/${comment._id}`)
                                .then(res => {
                                    newGetComments(_id)
                                    alert(`Successfully deleted the comment`)
                                })
                                .catch(err => console.log(err))
                        } else {
                            alert("you can't delete this comment")
                        }
                    }}>Delete Comment</span>
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