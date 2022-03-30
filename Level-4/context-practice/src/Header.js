import React, {useContext} from 'react'
import { ThemeContext } from './themeContextProvider'

function Header(props) {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`Header${theme}`}>
        <nav className={`NavBar`}>
            <a href="./index.html" className={`NavLinks${theme}`}>Light </a>
            <a href="./index.html" className={`NavLinks${theme}`}>About</a>
            <a href="./index.html" className={`NavLinks${theme}`}>Contact</a>
        </nav>
    </div>
  )
}

export default Header