import React from 'react'

function Thing(props) {
    const {title, imgUrl, description} = props
  return (
    <div>
        <h1>{title}</h1>
        <img src={imgUrl} alt="" />
        <p>{description}</p>
    </div>
  )
}

export default Thing