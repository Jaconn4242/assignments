import React from "react"

export default function Header(){
    return (
        <header className="Header--wrapper">
            <img src="https://img.icons8.com/stickers/48/000000/trollface.png" className="Header--logo"/>
            <p className="Header--title">Meme Generator</p>
            <p className="Header--subtitle">React Course - Project 3</p>
        </header>
    )
}