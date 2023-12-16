import { useState } from "react";
import logo from "./assets/images/logo-universal.png";
import "./App.css";
import "./ChristmasTree.css";
import { Greet } from "../wailsjs/go/main/App";
import { Link, Route, Routes } from "react-router-dom";
import Curater from "./curator";
import Curator from "./curator";

function App() {
  const [resultText, setResultText] =
    useState("整理するファイルを選択するのだ！");
  const [name, setName] = useState("");
  const updateName = (e: any) => setName(e.target.value);
  const updateResultText = (result: string) => setResultText(result);

  function greet() {
    Greet(name);
  }
  return (
    <div id="App">
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

        <button className="btn" onClick={greet}>
          このファイルを読み取るのだ！
        </button>
        <Link to="/Curator" relative="path">
          <button className="btn">Go</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
