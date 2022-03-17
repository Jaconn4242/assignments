import React from 'react'

export default function Card(props) {

  return (
    <div className='container'>
        <div className="box" style={{backgroundColor: `#${props.color}`}}> Random Color</div>
    </div>
  )
}
