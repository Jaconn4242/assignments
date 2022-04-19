import React from "react"
import RoundedImg from "./RoundedImg"

function App() {    
  const width = "300px"
    return (
        <div>
            <RoundedImg src="https://picsum.photos/id/237/300/300" alt=""/>
            {/* adding borderRadius as a prop has to be a number or a string */}
        </div>
    )
}



export default App
