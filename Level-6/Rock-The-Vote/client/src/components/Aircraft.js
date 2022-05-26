import React from 'react'

export default function Aircraft(props){
  const { year,
          make,
          model,
          description,
          imgUrl,
        } = props
  return (
    <div className="airplane">
      <h1>{year}{make}{model}</h1>
      <h3>{ description }</h3>
      <img src={imgUrl} alt={imgUrl} width={300}/>
    </div>
  )
}