import React from "react"
import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import vacationSpots from "./VacaData"

const VacationSpots =  vacationSpots.map(spot => {
  return (
    <Card  key={spot.id}spot={spot} />
  )
})

function App() {
  return (
    <div className="App">
      <Header />
      {VacationSpots}
      <Footer />
    </div>
  );
}

export default App;
