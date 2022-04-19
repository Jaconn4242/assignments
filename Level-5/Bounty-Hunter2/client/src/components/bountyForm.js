import React, { useState } from 'react'
import "./styles/bountyForm.css"

function BountyForm(props) {
    const {addBounty} = props

    const initInput = {
                        firstName: "",
                        lastName: "",
                        isLiving: "",
                        bountyAmount: "",
                        type: ""
                    }

    const [input, setInput] = useState(initInput)

    function onChange(e) {
        const {name, value} = e.target
        setInput(prevInput => ({...prevInput, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addBounty(input)
        setInput(initInput)
    }

  return (
    <div className="form-container">
    <h1 className="form-title">Bounty Hunter</h1>
    <form className="form-wrapper"onSubmit={handleSubmit}>
        <input type="text" 
               name='firstName' 
               value={input.firstName} 
               onChange={onChange} 
               placeholder="First Name" 
               className='form-input'
        />
        <input type="text" 
               name='lastName' 
               value={input.lastName} 
               onChange={onChange} 
               placeholder="Last Name" 
               className='form-input'
        />
        <select name="isLiving" 
                className='form-select'
                onChange={onChange}>
            <option>Choose Living Status</option>
            <option value="true">Alive</option>
            <option value="false">Dead</option>
        </select>
        <input type="text" 
               name='bountyAmount' 
               value={input.bountyAmount} 
               onChange={onChange} 
               placeholder="Bounty Amount" 
               className='form-input'
        />
        <select name="type" 
                className='form-select'
                onChange={onChange}>
            <option>Choose Type</option>
            <option value="sith">Sith</option>
            <option value="jedi">Jedi</option>
        </select>
        <button className='add-btn'>Add Bounty</button>
    </form>
    </div>
  )
}

export default BountyForm