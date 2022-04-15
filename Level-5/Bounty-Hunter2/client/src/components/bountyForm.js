import React, { useState } from 'react'
import "./styles/bountyForm.css"

function BountyForm(props) {
    const {addBounty} = props

    const initInput = {
                        firstName: "",
                        lastName: "",
                        living: "",
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
    <img src="./bounty-hunter-img.png" alt="" className='bounty-hunter-img' />
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
        <input type="text" 
               name='living' 
               value={input.living} 
               onChange={onChange} 
               placeholder="Living" 
               className='form-input'
        />
        <input type="text" 
               name='bountyAmount' 
               value={input.bountyAmount} 
               onChange={onChange} 
               placeholder="Bounty Amount" 
               className='form-input'
        />
        <input type="text" 
               name='type' 
               value={input.type} 
               onChange={onChange} 
               placeholder="type" 
               className='form-input'
        />
        <button className='add-btn'>Add Bounty</button>
    </form>
    </div>
  )
}

export default BountyForm