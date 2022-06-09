import React from 'react'
import {useNavigate } from 'react-router-dom'
import Community from "../images/Community.png"
import BabyIcon from "../images/BabyIcon.png"
import LogoutIcon from "../images/LogoutIcon.png"
import "../styles/NavBar.css"

function NavBar(props) {
    const {token, logout} = props
   
    const navigate = useNavigate()
  return (
    <div className='navbar-wrapper'>
     {token && <div className='navbar-container'>
       <div className='navbar-item'>
         <img src={Community} alt="" />
         <span>Community</span>
       </div>
       <div className='navbar-item'>
         <img src={BabyIcon} alt="" />
         <span>MyBaby</span>
       </div>
       <div className='navbar-item'>
         <img src={LogoutIcon} alt="" />
         <span onClick={()=>{
            logout()
            navigate("/")
        }
        }>Logout</span>
       </div>
    </div>}
    </div>
  )
}

export default NavBar