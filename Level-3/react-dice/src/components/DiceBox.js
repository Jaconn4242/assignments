import React from "react"

export default function DiceBox() {

    const [numbers, setNumbers] = React.useState([""])

    function getNumbers(){
    let collector = new Array()
    collector.push(Math.floor(Math.random() * 6))
    collector.push(Math.floor(Math.random() * 6))
    collector.push(Math.floor(Math.random() * 6))
    collector.push(Math.floor(Math.random() * 6))
    collector.push(Math.floor(Math.random() * 6))
        setNumbers([...collector])
    }

       
    return(
        <>
        <h1 className="Greeting">Lets play!</h1>
        <div className="diceBox-wrapper">
          <div className="border">
            <h1>{numbers[0]}</h1>
          </div>  
          <div className="border">
            <h1>{numbers[1]}</h1>
          </div> 
          <div className="border">
            <h1>{numbers[2]}</h1>
          </div> 
          <div className="border">
            <h1>{numbers[3]}</h1>
          </div> 
          <div className="border">
            <h1>{numbers[4]}</h1>
          </div> 
        </div>
        <button onClick={getNumbers}>Roll</button>
        </>
    )
}