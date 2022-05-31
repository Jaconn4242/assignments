import React,{useContext, useEffect} from 'react'
// import AircraftList from './AircraftList.js'
// import Aircraft from './Aircraft.js'
import { UserContext } from '../context/UserProvider.js'
import "../styles/Public.css"

export default function Public(){
  const {getAllAircraft, allAircraft} = useContext(UserContext)

  useEffect(() => {
    getAllAircraft()
     //eslint-disable-next-line
  },[])
  

  
  return (
    <div className="public">
      {allAircraft.map(({year,make,model,imgUrl,user,_id,date,description,upVotes,downVotes}) =>  {
        return (
          <div key={_id} className="post-container">
            <h1 className='year-make-model'>{year} {make} {model}</h1>
            <p className='owner'>{`Owner ${user}`}</p>
            <p className='date-posted'>{`Posted on: ${date}`}</p>
            <p className='description'>{`Description: ${description}`}</p>
            <img src={imgUrl} className="post-image" alt=""/>
            <button>{`Likes: ${upVotes.length}`}</button>
            <button>{`Dislikes: ${downVotes.length}`}</button>
          </div>
        )
      })}
    </div>
  )
}