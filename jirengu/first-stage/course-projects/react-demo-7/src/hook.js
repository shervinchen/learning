import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useList from "./hooks/useList";

function App() {
    // 自定义 hook
  const { list, setList } = useList();
  return (
    <div className="App">
      <h1>List</h1>
      {list ? (
        <ol>
          {list.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ol>
      ) : (
        "加载中..."
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
