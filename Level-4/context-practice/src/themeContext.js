import React, {useState} from "react"

const ThemeContext = React.createContext()


function ThemeContextProvider (props) {
    
    const [color, setColor] = useState("wheat")

    const toggleTheme = () => {
        setColor(prevColor => prevColor === "wheat" ? "blue": "wheat")
    }
    
    return(
        <ThemeContextProvider value={{
            color: color,
            toggleTheme: toggleTheme
        }}>
            <div className="App">
              {props.children}
            </div>
          </ThemeContextProvider>
    )
}
export {ThemeContext, ThemeContextProvider}