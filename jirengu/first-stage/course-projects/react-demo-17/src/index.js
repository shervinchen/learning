import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "./styles.css";

function Box1() {
  return <div class="box">注册</div>;
}

function Box2() {
  return <div class="box">登录</div>;
}

function Welcome() {
  return <div class="box">欢迎</div>;
}

function App() {
  return <div className="App">App</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <div>
      <div>
        <Link to="/">
          <button>首页</button>
        </Link>{" "}
        |<Link to="/login">登录</Link> |<Link to="/signup">注册</Link> |
        <Link to="/welcome">欢迎</Link>
      </div>
      <Route path="/" exact component={App} />
      <Route path="/login" component={Box2} />
      <Route path="/signup" component={Box1} />
      <Route path="/welcome" component={Welcome} />
    </div>
  </Router>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
