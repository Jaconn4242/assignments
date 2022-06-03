import React,{useContext, useEffect} from 'react'
import { UserContext } from '../context/UserProvider.js'
import "../styles/Public.css"
import PublicAircraft from './PublicAircraft'

export default function Public(){

  const { getAllAircraft, allAircraft} = useContext(UserContext)

  const aircraftElements = allAircraft.map(aircraft => {
    return <PublicAircraft key={aircraft._id} {...aircraft}/>
    })

    useEffect(()=> {
     getAllAircraft()
     // eslint-disable-next-line
    }, [allAircraft.length])

  return (
    <div>
      {aircraftElements}
    </div>
  )
}
// export default function Public(){
//   const {getAllAircraft, allAircraft, userAxios} = useContext(UserContext)
//   const [inputs, setInputs] = useState({comment: ""})
//   const [aircraftComments, setAircraftComments]= useState([])
  
//   const [showComments, setShowComments] = useState(false)
//   const [displayAddition, setDisplayAddition] = useState(false)
  
//   const{_id} = allAircraft

//   function newGetComments(aircraftId){
//     userAxios.get(`api/aircraft/comments/${aircraftId}/comments`)
//  .then(res => console.log(res.data))
//  .catch(err => console.log(err.response.data.errMsg))
//  }


//   useEffect(()=> {
//     getAllAircraft()
//     // newGetComments(_id)
//     // eslint-disable-next-line
//   }, [])
  
//  function addAircraftComment(aircraftId, newComment){
//   userAxios.post(`api/aircraft/comments/${aircraftId}/comments`, newComment)
//   .then(res => setAircraftComments(prevState => [...prevState, res.data]))
//   .catch(err => console.log(err.response.data.errMsg))
// }
//  function commentSubmission(e) {
//   e.preventDefault()
//   addAircraftComment(_id, inputs)
// }
// function onChange(e) {
//   const {name, value} = e.target
//   setInputs(prevState => ({...prevState, [name]: value}))
// }

// function getComments(){
//   newGetComments(_id)
// }
// // add to set so user id doesnt exist twice
// //
// console.log(aircraftComments)

//   return (
//     <div className="public">
//       {allAircraft.map(({year,make,model,imgUrl,user,_id,date,description,upVotes,downVotes}) =>  {
//         return (
//           <div className="airplane" key={_id}>
//       <h1 className='aircraft-title'>{year} {make} {model}</h1>
//       <img className='aircraft-image' src={imgUrl} alt={imgUrl}/>
//       <h3>{ description }</h3>
//         <div className='ratings-container'>
//           <p><img src={ThumbUp} alt="" />{`Likes:${upVotes.length}`}</p>
//           <p><img src={ThumbDown} alt="" />{`Dislikes:${downVotes.length}`}</p>
//         </div>
//       {!showComments ?<button onClick={() => setShowComments(!showComments)}>show comments</button>:
//       <button onClick={() => setShowComments(!showComments)}>collapse comments</button>}
//       {showComments ? <div>
//       {aircraftComments.map(comment => {
//         return <div key={comment._id} className="comment">{comment.comment}</div>
//       })}

//       <span  onClick={()=> setDisplayAddition(!displayAddition)} >Add Comment</span>
//       {displayAddition ? 
//         <form onSubmit={commentSubmission}>
//           <input  
//           type="text"
//           name="comment"
//           onChange={onChange}
//           value={inputs.comment}
//           placeholder="Enter Comment"
//           />
//           <button>Submit Comment</button>
//         </form>: null}

//       </div> : null}
//     </div>
//         )
//       })}
//     </div>
//   )
// }