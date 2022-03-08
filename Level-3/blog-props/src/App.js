import React from "react"
import './App.css';
import Header from "./components/Header"
import BlogPost from "./components/BlogPost"
import Footer from "./components/Footer"
import Data from "./data.js"

const DataElements = Data.map(item => {
  return (
    <BlogPost key={item.id} item ={item}/>
  )
})

function App() {
  return (
    <>
     <Header />
     {DataElements}
     <div className="App--button-container">
     <button className="App--button">OLDER POSTS</button>
     </div>
     <Footer />
    </>
  );
}

export default App;
