import React from "react"
import Card from "./components/Card"
import "./index.css"
import Header from "./components/Header"
import CardData from "./data"

const cardElements = CardData.map(item => {
  return (
        <Card 
            key={item.id}
            item={item}
        />
  )
})

function App() {
  return (
    <div className="App">
      <Header />
      {cardElements}
      
    </div>
  );
}

export default App;
