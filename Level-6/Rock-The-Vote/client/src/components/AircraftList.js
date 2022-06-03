import React from 'react'
import Aircraft from './Aircraft.js'

export default function AircraftList(props){
  const { aircraft, deleteUserAircraft } = props

 
  return (
    <div className="aircraft-list">
      { aircraft.map(airplane => <Aircraft {...airplane} deleteUserAircraft={deleteUserAircraft}key={airplane._id}/>) }
    </div>
  )
}