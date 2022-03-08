import React from "react"
import NavBar from "./NavBar"

function Header() {
return(
    <div className="Header--main-container">
           <NavBar />
            <h1 className="Header--main-title">Clean Blog</h1>
            <h3 className="Header--subtitle">A Blog Theme by Start Bootstrap</h3>
    </div>
    )
}

export default Header;