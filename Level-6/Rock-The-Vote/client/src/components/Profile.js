import React, { useContext, useEffect} from 'react'
import AircraftForm from './AircraftForm.js'
import AircraftList from './AircraftList.js'
import { UserContext } from '../context/UserProvider.js'
import "../styles/Profile.css"

export default function Profile(){

  const { 
    user: { 
      username,
    }, 
    addAircraft, 
    aircraft,
    getUserAircraft,
    deleteUserAircraft
  } = useContext(UserContext)

  useEffect(()=> {
    getUserAircraft()
  }, [])

  return (
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <AircraftForm addAircraft={addAircraft} />
      <h1 className='list-title'>Your Aircraft</h1>
      <div className='aircraft-list-container'>
      <AircraftList aircraft={aircraft} deleteUserAircraft={deleteUserAircraft} />
      </div>
    </div>
  )
}