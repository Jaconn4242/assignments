
import React, {useState} from 'react'
import Form from "./components/Form"

export default function App() {
    const [names, setNames] = useState("")
    const [listNames, setListNames] = useState([])

    const handleChange = (e) => {
        const {value} = e.target
        setNames(value)
    }
console.log(`Names: ${names}, List Name ${listNames}`)
    const handleSubmit = (e) => {
        e.preventDefault()
        setListNames(prevList => [...prevList, names])
        setNames("")
    }

    const nameEntries = listNames.map((name, i) => <Form key={i} name={name}/>)

    return(
        <form onSubmit={handleSubmit}>
            <input 
                name="firstName"
                type="text"
                placeholder="Name here"
                value={names}
                onChange={handleChange}
            />

            <h1>{names}</h1>
            <br />
            <button>Submit Entry</button>
            <ul>
                {nameEntries}
            </ul>
        </form>
        
    )
}
