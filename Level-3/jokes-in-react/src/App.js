
import React from "react"
import './App.css';
import JokeCard from "./components/JokeCard"

function App() {
  return (
    <div className="App">
      <JokeCard
        setup="Most people are shocked when they find out how bad I am as an electrician."      
      />
      <JokeCard
        setup="What do you call a cow with no legs?"
        punchline="Ground beef"      
      />
      <JokeCard
        setup="What did one hat say to the other?"
        punchline="You stay here. I'll go on ahead"      
      />
      <JokeCard
        setup="I was wondering why the frisbee kept getting bigger and bigger, then it hit me?"      
      />
    </div>
  );
}

export default App;
