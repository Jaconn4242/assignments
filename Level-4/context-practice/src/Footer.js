import React, {useContext} from 'react'
import { ThemeContext } from './themeContextProvider'

function Footer(props) {

const {theme} = useContext(ThemeContext)

  return (
    <div className={`Footer${theme}`}>
        <small className='Footer-description'>Conn's Coding, Copyright 2022 @ All Rights Resereved</small>
    </div>
  )
}

export default Footer