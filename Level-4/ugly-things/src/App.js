import React from "react"
import './App.css';
import Form from "./components/Form";
import UglyThingList from "./components/UglyThingList"
import { v4 as uuidv4 } from "uuid";

function App(props) {

  return (
    <div className="App">
      <Form />
      <UglyThingList key={uuidv4()}/>
    </div>
  );
}

export default App;
