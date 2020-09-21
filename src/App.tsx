import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Alias from "@/components/Alias";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lear
        </a>
        <Alias />
      </header>
    </div>
  );
}

export default App;
