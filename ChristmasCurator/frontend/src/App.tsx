import { useState } from "react";
import "./App.css";
import "./ChristmasTree.css";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const sendDir = () => {
    var json_raw = {
      dir: "../",
    };
    var json_data = JSON.stringify(json_raw);
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var dirs = xhr.responseText;
      if (dirs.length > 0) alert(dirs);
    };
    xhr.onerror = function () {
      alert("error!");
    };
    xhr.open("POST", "dummy.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json_data);
  };

  return (
    <div id="App">
      <h1>"整理するファイルを選択するのだ！"</h1>
      <div className="snow"></div>

      <button className="btn" onClick={sendDir}>
        このファイルを読み取るのだ！
      </button>
      <Link to="/Curator" relative="path">
        <button className="btn">Go</button>
      </Link>
    </div>
  );
}

export default App;
