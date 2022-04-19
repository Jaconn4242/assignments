import React, {useState} from 'react'
import "./styles/bountyCard.css"

function BountyCard(props) {

    const {firstName, lastName, isLiving, bountyAmount, type, _id, deleteBounty, updateBounty} = props
    const [editToggle, setEditToggle] =useState(false)
    const initInput = {isLiving:  "",
                       bountyAmount: "",
                       type:  ""
                        }
    const [newInput, setNewInput] =useState(initInput)

    function onChange(e){
        const {name,value} = e.target
        setNewInput(prevInput => ({...prevInput, [name]: value}))
    }
   

    function handleSubmit(e) {
        e.preventDefault()
        updateBounty(_id, newInput)
        setNewInput(initInput)
        setEditToggle(!editToggle)
    }
  return (
    <div className="bountycard">
        { !editToggle ? 
        <>
        <h1 className="title">{`${firstName} ${lastName}`}</h1>
        <p className='living-status'>{`Alive: ${isLiving}`}</p>
        <p className='bounty-amount'>{`Bounty Amount: $${bountyAmount}`}</p>
        <p className='type'>{`Type: ${type}`}</p>
        <button 
            className='delete-btn'
            onClick={() => deleteBounty(_id)}>
            Delete
        </button>
        <button
            className='edit-btn'
            onClick={() => setEditToggle(prevState => !prevState)}>
            Edit
        </button>
        </>
        :
        <>
        <form  onSubmit={handleSubmit}className='editing-container'>
        <label>Living:</label>
        <select name="isLiving" 
                className='edit-form-input'
                onChange={onChange}>
            <option>Choose Living Status</option>
            <option value="true">True</option>
            <option value="false">False</option>
        </select>
        {/* <input type="text" 
               name='isLiving' 
               value={newInput.isLiving} 
               onChange={onChange} 
               placeholder="Living" 
               className='edit-form-input'
               required
        /> */}
        <label>Bounty Amount:</label>
        <input type="text" 
               name='bountyAmount' 
               value={newInput.bountyAmount} 
               onChange={onChange} 
               placeholder="Bounty Amount" 
               className='edit-form-input'
               required
        />
        <label>Type:</label>
        <select name="type" 
                className='edit-form-input'
                onChange={onChange}>
            <option>Choose Type</option>
            <option value="sith">sith</option>
            <option value="jedi">jedi</option>
        </select>
        <button
            type="button"
            className='cancel-btn'
            onClick={() => setEditToggle(!editToggle) }>
            Cancel
        </button>
        <button
            className='submit-btn'>
            Submit
        </button>
        </form>
        </>
        }
       
    </div>
  )
}

export default BountyCard