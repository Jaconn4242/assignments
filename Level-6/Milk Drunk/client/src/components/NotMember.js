import React from 'react'
import {useNavigate} from "react-router-dom"

function NotMember() {
    const navigate = useNavigate()
  return (
    <div>
        <h1>This page is reserved for members only</h1>
        <h3>Please sign-up by using the link below!</h3>
        <button onClick={navigate("/Auth")}>Sign-up</button>
    </div>
  )
}

export default NotMember