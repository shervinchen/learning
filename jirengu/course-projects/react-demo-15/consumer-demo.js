import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Consumer(props) {
  let x = 100;
  let result = props.children(x);
  return <div>{result}</div>;
}

function App() {
  return <Consumer>{n => <div>{n}</div>}</Consumer>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
