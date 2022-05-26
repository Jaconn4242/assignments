import React, { useContext } from 'react'
import AircraftForm from './AircraftForm.js'
import AircraftList from './AircraftList.js'
// import Aircraft from './Aircraft.js'
import { UserContext } from '../context/UserProvider.js'

export default function Profile(){
  const { 
    user: { 
      username 
    }, 
    addAircraft, 
    aircraft 
  } = useContext(UserContext)
console.log(aircraft)
  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <AircraftForm addAircraft={addAircraft}/>
      <h3>Your Aircraft</h3>
      <AircraftList aircraft={aircraft}/>
    </div>
  )
}