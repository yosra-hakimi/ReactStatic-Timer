import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Time from "./Time";
function App() {
  return (
    <div className="App">
      <Time />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
