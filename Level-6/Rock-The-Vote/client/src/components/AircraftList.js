import React from 'react'
import Aircraft from './Aircraft.js'

export default function AircraftList(props){
  const { aircraft } = props

 
  return (
    <div className="aircraft-list">
      { aircraft.map(airplane => <Aircraft {...airplane} key={airplane._id}/>) }
    </div>
  )
}