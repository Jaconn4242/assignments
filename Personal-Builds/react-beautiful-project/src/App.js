import React from "react";
import './App.css';

const math = require("./Math")

export default function App() {

console.log(math)
 const players = [
   {
     id: "1",
     name: "Addy",
     gender: "female"
   },
   {
    id: "1",
    name: "Abbi Conn",
    gender: "female"
  },
  {
    id: "1",
    name: "Michael",
    gender: "male"
  },
  {
    id: "1",
    name: "Andrew",
    gender: "male"
  }
   
 ]


  return (
    <div className="App">
      <header className="header">
        <ul className="listOfPlayers">
          {players.map(({id, name, gender }) => <li key={id} draggable={true} >{name} <br /> {gender}</li>)}
        </ul>
      </header>
    </div>
  );
}


