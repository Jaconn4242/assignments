import React from 'react'
import {useNavigate } from 'react-router-dom'
import "../styles/NavBar.css"

function NavBar(props) {
    const {token, logout} = props
   
    const navigate = useNavigate()
  return (
    <>
     {token && <div className='navbar-container'>
        <li>Community</li>
        <li>MyBaby</li>
        <li onClick={()=>{
            logout()
            navigate("/")
        }
        }>Logout</li>
    </div>}
    </>
  )
}

export default NavBar