import { useState } from "react";
import "./App.css";
import "./ChristmasTree.css";
import { Greet } from "../wailsjs/go/main/App";
import Tree from "./components/tree";
import { Link } from "react-router-dom";

function Curator() {
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
      <div className="snow">●</div>
      <div className="snow snow2nd">●</div>
      <div className="night" >●</div>
      <div className="container">
        <div className="star">
          <div className="treeCanvas">
            <div className="moon"></div>
            <div className="tree top"></div>
            <div className="tree middle"></div>
            <div className="tree bottom"></div>
            <div className="miki"></div>
          </div>
          <div
            style={{
              position: "relative",
              right: "50%",
              top: "10vw",
              transform: "translateX(-50%) translateY(-50%)",
            }}
          >
            <div className="photoOverlay">
              <Tree />
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}

export default Curator;
