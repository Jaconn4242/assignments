import "./App.css"
import React from 'react'
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom"
import Services from "./components/Services"
import About from "./components/About"
import Home from "./components/Home"
function App() {
  return (
    <Router>
        <header className='Header'>
            <nav className='NavBar'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="services">Services</Link>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Services />}/>
        </Routes>
        <footer className="Footer-container">
            <small className="Footer-description">Conn's Coding 2022, All Rights Reserved</small>
        </footer>
    </Router>
  )
}

export default App