import React from 'react'
import {ThemeContext} from './themeContext'

function Header(props) {
  return (
    <div className='Header'>
        <nav className='NavBar'>
            <a href="" className='NavLinks'>Light </a>
            <a href="" className='NavLinks'>About</a>
            <a href="" className='NavLinks'>Contact</a>

        </nav>
    </div>
  )
}

export default Header