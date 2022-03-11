import React, {useState} from "react"
function App() {

  const [color, setColor] = useState(["grey","grey","grey","grey"])

  function djSmall(){
    setColor(prevState => {
      if(prevState[0] === "grey"){
        return ["black","grey","grey","grey"]
      } else if(prevState[0] !== "grey") {
        return ["grey","black","black","black"]
      }
    })
  }
  function partyDJ() {
    setColor(prevState => {
      return ["purple","purple",prevState[2],prevState[3]]
    })
  }
  function leftBlue(){
    setColor(prevState => {
      return [prevState[0],prevState[1],"blue",prevState[3]]
    })
  }
  function rightBlue(){
    setColor(prevState => {
      return [prevState[0],prevState[1],prevState[2], "blue"]
    })
  }
  function boxOne(){
    setColor(prevState => {
      return ["yellow",prevState[1],prevState[2],prevState[3]]
    })
  }
  function boxTwo(){
    setColor(prevState => {
      return [prevState[0],"orange",prevState[2],prevState[3]]
    })
  }
  function boxThree(){
    setColor(prevState => {
      return [prevState[0],prevState[1],"lime",prevState[4]]
    })
  }
  function boxFour(){
    setColor(prevState => {
      return [prevState[0],prevState[1],prevState[2],"red"]
    })
  }
  function refresh(){
    setColor(prevState => {
      return ["grey","grey","grey","grey"]
    })
  }
  
    let audio = new Audio("./elevator.mp3")
    console.log(audio)
  
    const start = () => {
      audio.play()
    }
    let bellsound = new Audio("./808cowbell.mp3")
    const bell = () => {
      bellsound.play()
    }
    let juggleSound = new Audio("./jugglingBeat.mp3")
    const juggle = () => {
      juggleSound.play()
    }
    let yoEffect = new Audio("./YoSound.mp3")
    const yo = () => {
      yoEffect.play()
    }
    let sirenEffect = new Audio("./Siren.mp3")
    const siren = () => {
      sirenEffect.play()
    }
    let airhornEffect = new Audio("./Airhorn.mp3") 
    const airhorn = () => {
      airhornEffect.play()
    }
  
 

  return (
    <>
      <div className="Squares-wrapper">
        <div className="Square-1" style={{background: color[0]}}></div>
        <div className="Square-2" style={{background: color[1]}}></div>
        <div className="Square-3" style={{background: color[2]}}></div>
        <div className="Square-4" style={{background: color[3]}}></div>
      </div>
      <div className="Button-wrapper">
        <button onClick={djSmall}>DJ Small</button>
        <button onClick={partyDJ}>Party DJ</button>
        <button onClick={boxOne}>Big DJ one</button>
        <button onClick={boxTwo}>Big DJ two</button>
        <button onClick={boxThree}>Big DJ three</button>
        <button onClick={boxFour}>Big DJ four</button>
        <button onClick={leftBlue}>Left Blue</button>
        <button onClick={rightBlue}>Right Blue</button>
        <div className="Refresh-wrapper">
          <button onClick={refresh}className="Refresh">Refresh</button>
        </div>
        <div className="noise-wrapper">
          <button onClick={start}className="noise">Smooth Effect</button>
          <button onClick={bell}>Bell</button>
          <button onClick={juggle}>Juggle</button>
          <button onClick={yo}>Yo Sound</button>
          <button onClick={siren}>Siren</button>
          <button onClick={airhorn}>Air Horn</button>
        </div>
      </div>
    </>
  );
}

export default App;
