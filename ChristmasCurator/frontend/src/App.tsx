import { useState } from "react";
import logo from "./assets/images/logo-universal.png";
import "./App.css";
import "./ChristmasTree.css";
import { Greet } from "../wailsjs/go/main/App";
import { Route, Routes } from "react-router-dom";
import Curater from "./curator";
import Curator from "./curator";

function App() {
  const [resultText, setResultText] = useState(
    "Please enter your name below 👇"
  );
  const [name, setName] = useState("");
  const updateName = (e: any) => setName(e.target.value);
  const updateResultText = (result: string) => setResultText(result);

  function greet() {
    Greet(name).then(updateResultText);
  }
  return (
    <div id="App">
      <img src={logo} id="logo1" alt="logo" width="50%" />
      <div className="snow">●</div>
      <div className="snow snow2nd">●</div>
      <div id="result" className="result">
        {resultText}
      </div>
      <div id="input" className="input-box">
        <input
          id="name"
          className="input"
          onChange={updateName}
          autoComplete="off"
          name="input"
          type="text"
        />
        <link></link>
        <button className="btn" onClick={greet}>
          Greet
        </button>
      </div>
    </div>
  );
}

export default App;
