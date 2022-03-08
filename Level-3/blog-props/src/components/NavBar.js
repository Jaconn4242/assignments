import React from "react"
 
 function NavBar(){
    return(
        <nav className="NavBar--main-container">
            <h3 className="NavBar--title">Start Bootstrap</h3>
            <ul className="NavBar--list-container">
                <li>Home</li>
                <li>About</li>
                <li>Sample Post</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar;