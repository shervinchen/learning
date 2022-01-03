import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "csdoker",
    age: 18,
    hobbies: ["sport", "code", "game"],
  });
  const add = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    document.querySelector("#output").innerText = count;
  });
  const old = () => {
    setUser({
      ...user,
      age: user.age + 1,
    });
  };
  const addHobby = () => {
    // let newHobby = Math.random()
    let newHobby = Math.random();
    setUser({
      ...user,
      hobbies: [...user.hobbies, newHobby],
    });
  };
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={add}>+1</button>
        <button onClick={minus}>-1</button>
      </div>
      <div>
        {user.name}
        <br />
        {user.age}
        <br />
        {user.hobbies.join(",")}
      </div>
      <div>
        <button onClick={old}>+1</button>
        <button onClick={addHobby}>增加爱好</button>
      </div>
    </div>
  );
}

export default App;
