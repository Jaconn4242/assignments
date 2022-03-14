import React, {useState} from "react"
import ListItems from "./components/ListItems"

export default function App(){

// declare state
const [entry, setEntry] = useState("")
const [list, setList] = useState([])

// OnChange and OnSubmit functions
const onChange = (e) => {
  setEntry(e.target.value)
}
const handleSubmit = (e) => {
  e.preventDefault()
  setList(prevList => [...prevList, entry])
  setEntry("")
}

// generating a unique key value for list items
const id = Math.floor(Math.random() * 10000)

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <h1>What's the plan for Today?</h1>
      <input type="text" 
           placeholder="type here..." 
           value={entry}
           onChange={onChange}
           className="Form-input"
           />
      <button className="Form-button">Add Item</button>
      <ListItems  
                 list={list} 
                 key={entry} 
                 />
    </form>
  )
}