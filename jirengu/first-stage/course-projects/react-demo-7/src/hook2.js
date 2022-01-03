import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useList from "./hooks/useList2";

function App() {
  const { list, deleteIndex } = useList();
  return (
    <div className="App">
      <h1>List</h1>
      {list ? (
        <ol>
          {list.map((item, index) => (
            <li key={item.id}>
              {item.name}
              <button
                onClick={() => {
                  deleteIndex(index);
                }}
              >
                x
              </button>
            </li>
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
