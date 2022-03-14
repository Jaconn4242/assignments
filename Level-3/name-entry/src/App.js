import React, {useState} from "react"
import Test from "./Test"




function App() {
  const [submitted, setSubmitted] = useState(false)
  const [entry, setEntry] = useState( [{InputOne: ""}] )
  console.log(entry)
  
function handleChange(e){
  e.preventDefault()
  const {name, value} = e.target
  setEntry(prevState => {
    return {
      ...prevState, [name]:value
    }
  })
 }

 function handleClick(e){
   e.preventDefault()
   setSubmitted(true)
}


  return (
    <form className="App" >
      <h1>{entry.InputOne}</h1>
      <input onChange={handleChange}name="InputOne" ></input>
      <button onClick={handleClick}>Add Name</button>
      {submitted && <Test data={entry.InputOne}/>}
    </form>
  );
}


export default App;
