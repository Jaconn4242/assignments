import React, {useContext} from 'react'
import {ThemeContext} from './themeContextProvider';

function Body() {
    const {theme, changeValue} = useContext(ThemeContext)

    function handleChange(e) {
      changeValue(e.target.value)
    }
    
  return (
    <div className={`Body${theme}`}>
        <select className="body-select-element" value={theme} onChange={handleChange}>
          <option  value="light">Select a Theme</option>
          <option  value="dark">Dark Mode</option>
          <option  value="light">Light Mode</option>
          <option  value="disco">Disco Mode</option>
        </select>
    </div>
  )
}

export default Body;