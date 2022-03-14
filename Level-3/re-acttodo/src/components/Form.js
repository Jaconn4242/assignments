import React, {useState} from 'react'

function Form() {

    const [input, setInput] = useState(
        {    
        newToDo: ""
       }
    ); 

    
    
    function handleChange(e) {
        e.preventDefault();
        const {name, value} = e.target
        setInput(prevInput => {
            return {...prevInput, [name]: value}
        })
    }   
    function handleSubmit(event){
        event.preventDefault();
        
    }
    
    return (
        <form className='Form'>
            <h1>Click add item to enter:{input.newToDo}</h1>
            <input 
                type="text"
                placeholder='enter to-do item'
                name="newToDo"
                value={input.newToDo}
                className="Form-input"
                onChange={handleChange}
            />
            <button onSubmit={handleSubmit} className="Form-button">Add Item</button>
            <h1>{ input.map(item =>{
            return <h1>{item.newToDo}</h1>
        })}</h1>
    </form>
  )
}

export default Form