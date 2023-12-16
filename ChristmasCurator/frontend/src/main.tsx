import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App";
import Curater from "./curator";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Curator from "./curator";

// const container = document.getElementById("root");

// const root = createRoot(container!);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/curator" element={<Curator />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
