import React from "react";
import ReactDOM from "react-dom";
import { Player } from "./Player.js";
import { Discog } from "./disco.js";
import { FullPage } from "./Fullpage.js";
import "./styles.css";

function App() {
  return (
    <div className="App">   
   <FullPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
