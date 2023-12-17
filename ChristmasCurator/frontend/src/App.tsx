import { useState } from "react";
import "./ChristmasTree.css";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";

type Dir = {
  full_path: string;
  path: string;
  depth: string;
};

function App() {
  const [receivedDirs, setReceivedDirs] = useState<Dir[]>([]);
  const sendDir = async () => {
    var json_raw = {
      dir: "../",
    };
    var json_data = JSON.stringify(json_raw);
    // send
    // var xhr = new XMLHttpRequest();
    // xhr.onload = function () {
    //   var dirs = xhr.responseText;
    //   if (dirs.length > 0) alert(dirs);
    // };
    // xhr.onerror = function () {
    //   alert("error!");
    // };
    // xhr.open("POST", "http://localhost:8080/", true);
    // xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.send(json_data);

    // const res = await axios.post("http://localhost:8080", {
    //   method: "POST",
    //   body: json_raw,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    const res = await axios.post("http://localhost:8080", json_raw, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    const data = res.data;
    //  const res = await fetch("http://localhost:8080", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: json_data,
    // });

    // const json = await res.json();

    setReceivedDirs(data);
    console.log(data);
  };

  return (
    <div id="App">
      <div style={{ marginTop: "20vw" }}>
        <h1>整理するファイルを選択するのだ！</h1>
      </div>
      <div className="snow">●</div>
      <div className="snow snow2nd">●</div>
      <div className="input-box">
        <button
          className="btn"
          onClick={sendDir}
          style={{ font: "bold", fontSize: "20px", marginTop: "4vw" }}
        >
          ローカルのファイルを読み取るのだ！
        </button>
      </div>
      {receivedDirs.length > 0 && (
        <div className="result">
          {receivedDirs.map((dir, index) => (
            <div key={index} className="a">
              <div className="styled-link">
                <p>
                  <a href="/curator">Full Path: {dir.full_path}</a>
                </p>
                <p>
                  <a href="/curator">Path: {dir.path}</a>
                </p>
                <p>
                  <a href="/curator">Depth: {dir.depth}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
