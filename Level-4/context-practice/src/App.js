import React, {useState} from "react"
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import {ThemeContextProvider} from "./themeContext";

function App(props) {

    return (
    <>
    <ThemeContextProvider>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </ThemeContextProvider>
    </>
  );
}

export default App;
