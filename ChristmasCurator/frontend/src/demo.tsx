import { useState } from "react";
import "./App.css";
import "./ChristmasTree.css";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import TreeView from "./components/TreeView";
import FileTree from "./Treetest";

type Dir = {
  full_path: string;
  path: string;
  depth: string;
};

function Demo() {
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

    const res = await axios.post("http://localhost:8080", {
      method: "POST",
      body: json_raw,
    });
    const data = res.data;
    //  const res = await fetch("http://localhost:8080", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: json_data,
    // });

    // const json = await res.json();

    setReceivedDirs(data.dir);
    console.log(data);
  };

  return (
    <div id="App">
      <h1>整理するファイルを選択するのだ！</h1>
      <div className="snow"></div>
      <div style={{fontSize: "40px"}}>
        <FileTree />
      </div>
      <Link to="/Curator" relative="path" className="input-box">
        <button className="btn" style={{ font: "bold", fontSize: "20px", marginTop:"20px"  }}>
          Go
        </button>
      </Link>
    </div>
  );
}

export default Demo;
