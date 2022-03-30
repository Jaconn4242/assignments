import React, {useState} from "react"

const ThemeContext = React.createContext()


const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState("light")

    const changeValue = (color) => {
        setTheme(color)
    }
    
return(
    <ThemeContext.Provider value=
    {{theme, changeValue}}
    >
        {props.children}
    </ThemeContext.Provider>
)
}

export {ThemeContextProvider, ThemeContext}
 