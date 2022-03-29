import React, {useState, useRef} from "react"

function App() {
  const [color1, setColor1] = useState("#FF0000")
  const [color2, setColor2] = useState("#FFFFFF")
  const [color3, setColor3] = useState("#0000FF")
  const [angle, setAngle] = useState(90)
  const [options, setOptions] = useState(false)

  console.log(`color#1 ${color1}, color#2 ${color2}, color#3 ${color3}`)

  const ColorPicker = () => {
    return (
             <>
            <label>Color 1:</label> 
            <input type="color" 
                  value={color1} 
                  onChange={e => setColor1(e.target.value)}
            />
            <label>Color 2:</label>
            <input type="color" 
                   value={color2} 
                   onChange={e => setColor2(e.target.value)}
            />
            <label>Color 3:</label>
            <input type="color" 
                   value={color3} 
                   onChange={e => setColor3(e.target.value)}>
            </input>
            <label>Angle:</label>
            <input type="number"
                   value={angle}
                   onChange={e => setAngle(e.target.value)} 
                   className="angle-value">
            </input> 
      </>
   )
  }

  const showOptions = () => {
    setOptions(prevState => !prevState)
  }

  const styles = {
    background: `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`,
    border: `2px solid black`
  }
  return (
    <>
    <h1 className="App-title">CSS Gradient Code Generator</h1>
    <div className="App">
      <div className="section-left">
        <div className="color-box" style={styles}></div>
        <textarea className="code-block" 
                  readOnly value={`color-box{${styles.background}}`}></textarea>
        </div>
      <div className="section-right">
          <h1 className="section-right-title">Options
          <img src="./Question-icon.png" 
               alt="" 
               onClick={showOptions}
               className="question-icon"/>
          </h1>
          {options && <p className="hidden-info-box"><b><u>Instruction:</u></b> This is a responsive application that allows you 
          to see the awesome display that the CSS property "linear-gradient" can have.
          Change the colors or the angle of the gradient by clicking on the input boxes and
          selecting a color from the color pallete. Watch the code block on the left as it 
          responds to the changes and feel free to copy and paste what you've created into
          your own code!</p>}
          {ColorPicker()}
      </div>
    </div>
    </>
  );
}

export default React.memo(App);
