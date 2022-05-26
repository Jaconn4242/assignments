import React, { useState } from 'react'
import "../styles/AircraftForm.css"

const initInputs = {
  year: "",
  make: "",
  model: "",
  description: "",
  imgUrl: ""
}

export default function AircraftForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const { addAircraft } = props

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addAircraft(inputs)
    setInputs(initInputs)
  }

  const { year, make, model, description, imgUrl } = inputs
  return (
    <div className='aicraft-form-wrapper'>
    <form className='aircraft-form-container' onSubmit={handleSubmit}>
      <h3>Add An Aircraft</h3>
      <input 
        type="text" 
        name="year" 
        value={year} 
        onChange={handleChange} 
        placeholder="Year"/>
      <input 
        type="text" 
        name="make" 
        value={make} 
        onChange={handleChange} 
        placeholder="Make"/>
      <input 
        type="text" 
        name="model" 
        value={model} 
        onChange={handleChange} 
        placeholder="Model"/>
        <input 
        type="text" 
        name="description" 
        value={description} 
        onChange={handleChange} 
        placeholder="Description"/>
        <input 
        type="text" 
        name="imgUrl" 
        value={imgUrl} 
        onChange={handleChange} 
        placeholder="Image Url"/>
      <button>Add Aircraft</button>
    </form>
    </div>
  )
}