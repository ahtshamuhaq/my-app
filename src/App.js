import "./App.css";
import About from "./compnents/About";
import Navbar from "./compnents/Navbar";
import TextForm from "./compnents/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("dark"); // whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#636363";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      {/* <Navbar/> */}
      <Navbar title="TexUtils" mode={mode} toggleMode={toggleMode} />
      <Router>
      <div className="container">
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <TextForm heading="type your text here to get analyzed" />
          </Route>
        </Switch>
      </div>
      </Router>
      {/* <About /> */}
    </>
  );
}

export default App;
