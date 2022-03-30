import React, { useContext } from 'react'
import {ThemeContext} from './themeContext'

function Body(props) {
    
    const {color, toggleTheme} = useContext(ThemeContext)
    console.log(color)
  return (
    <div className='Body'>
        <div className='button-wrapper'>
        <button onClick={toggleTheme} className='Body-buttons'>Light Theme</button>
        <button className='Body-buttons'>Dark Theme</button>
        <button className='Body-buttons'>Bright Theme</button>
        </div>
    </div>
  )
}

export default Body