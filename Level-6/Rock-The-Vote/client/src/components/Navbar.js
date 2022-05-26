import React from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import "../styles/NavBar.css"

export default function Navbar(props){

  const navigate = useNavigate()
  const { logout,token } = props
  console.log("token",token)
  return (
    <>
    {token && <div className="navbar">
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/public">Public</NavLink>
      <button onClick={()=> {
        navigate(-1)
        logout()
      }}>Logout</button>
    </div>}
    </>
  )
}