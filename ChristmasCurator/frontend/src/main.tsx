import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App";
import Curater from "./curator";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Curator from "./curator";
import Demo from "./demo";

// const container = document.getElementById("root");

// const root = createRoot(container!);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
console.log("aaa");
const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app" element={<App />} />
        <Route path="/curator" element={<Curator />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
