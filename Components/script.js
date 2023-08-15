import React from "react";
import ReactDOM from "react-dom";
import Star from "./Star";
import Rating from "./Rating";

import "./styles.css";

// Insert your component definitions here (Star and Rating)

function App() {
  return (
    <div className="App">
      <Rating stars={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
