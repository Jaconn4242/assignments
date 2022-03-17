import React, {useState, useEffect} from "react"
import Card from './components/Card';
const axios = require("axios")
function App() {
  const [count, setCount] = useState(0)
  const [colors, setColors] = useState([])







  useEffect(() => {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
    .then(res => setColors(res.data.new_color))
  }, [count])

 

    const colorChange = (e) => {
      e.preventDefault()
      setCount(prevState => !prevState)
    }

  return(
    <div className="App">
      <h1>Color Component<small> using an API</small></h1>
      <Card color={colors}/>
      <button onClick={colorChange}>Random Color change</button>
    </div>

  );
}

export default App;
