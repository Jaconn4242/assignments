import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import Community from "../images/Community.png"
import BabyIcon from "../images/BabyIcon.png"
import LogoutIcon from "../images/LogoutIcon.png"
import "../styles/NavBar.css"

function NavBar(props) {

  const navigate = useNavigate()

  const { token, logout } = props
  return (
    <div className='navbar-wrapper'>
      {token && <div className='navbar-container'>
        <div className='navbar-item'>
          <NavLink
            className="navlink"
            to="/community"
            activeclassname="selected">
            <img src={Community} alt="" />Community
          </NavLink>
        </div>
        <div className='navbar-item'>
          <NavLink
            className="navlink"
            to="/profile"
            activeclassname="selected">
            <img src={BabyIcon} alt="" />Baby
          </NavLink>
        </div>
        <div className='navbar-item'>
          <li
            className="navlink"
            onClick={
              ()=> {navigate("/profile")
              logout()}
            }
            activeclassname="selected"
            >
            <img src={LogoutIcon} 
                 alt=""/>Logout
          </li>
        </div>
      </div>}
    </div>
  )
}

export default NavBar