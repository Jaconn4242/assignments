import React, {useState} from 'react'
import "./styles/bountyCard.css"

function BountyCard(props) {

    const {firstName, lastName, living, bountyAmount, type, _id, deleteBounty, updateBounty} = props
    const [editToggle, setEditToggle] =useState(false)
    const initInput = {living: living || "",
                       bountyAmount: bountyAmount || "",
                       type: type || ""
                        }
    const [newInput, setNewInput] =useState(initInput)

    function onChange(e){
        const {name,value} = e.target
        setNewInput(prevInput => ({...prevInput, [name]: value}))
    }
    function handleSubmit(e){
        e.prevent.Default()
        updateBounty(_id, newInput)
        console.log(newInput)
        setNewInput(initInput)
    }
  return (
    <div className="bountycard">
        { !editToggle && 
        <>
        <h1 className="title">{`${firstName} ${lastName}`}</h1>
        <p className='living-status'>{`Alive: ${living}`}</p>
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
        }
        { editToggle &&
        <form onSubmit={handleSubmit} className='editing-container'>
        <label>Living:</label>
        <input type="text" 
               name='living' 
               value={newInput.living} 
               onChange={onChange} 
               placeholder="Living" 
               className='edit-form-input'
        />
        <label>Bounty Amount:</label>
        <input type="text" 
               name='bountyAmount' 
               value={newInput.bountyAmount} 
               onChange={onChange} 
               placeholder="Bounty Amount" 
               className='edit-form-input'
        />
        <label>Type:</label>
        <input type="text" 
               name='type' 
               value={newInput.type} 
               onChange={onChange} 
               placeholder="type" 
               className='edit-form-input'
        />
        <button
            className='cancel-btn'
            onClick={() => setEditToggle(!editToggle) }>
            Cancel
        </button>
        <button
            type="submit"
            className='submit-btn'>
            Submit
        </button>
        </form>
        }
       
    </div>
  )
}

export default BountyCard