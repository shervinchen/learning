import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

let div = document.createElement("div");
document.body.appendChild(div);
console.log = function(content) {
  div.innerHTML += `${content}<br>`;
};

class Baba extends React.Component {
  constructor() {
    super();
    this.state = {
      hasChild: true
    };
  }
  onClick() {
    this.setState({
      hasChild: false
    });
  }
  callSon() {
    this.setState({
      word: "你还好吧"
    });
  }
  render() {
    return (
      <div>
        我是你爸爸
        <button onClick={() => this.onClick()}>kill son</button>
        <button onClick={() => this.callSon()}>call son</button>
        {this.state.hasChild ? <App word={this.state.word} /> : null}
      </div>
    );
  }
}

class App extends React.Component {
  onClick() {
    console.log("用户点击了");
    this.setState({
      n: this.state.n + 1
    });
  }
  updateX() {
    this.setState({
      x: this.state.x + "!"
    });
  }
  constructor() {
    super();
    this.state = {
      n: 0,
      x: "不展示"
    };
  }
  componentWillMount() {
    console.log("将要 mount App");
  }
  render() {
    // update
    console.log("填充/更新 App 的内容");
    return (
      <div className="App">
        {this.state.n}
        <br />
        我爸说 {this.props.word}
        <br />
        <button onClick={() => this.onClick()}>+1</button>
        <button onClick={() => this.updateX()}>update x</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("mount App 完毕");
  }
  componentWillUpdate() {
    console.log("update App 之前");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("要不要更新呢？");
    if (this.state.n === nextState.n) {
      return false;
    } else {
      return true;
    }
  }
  //update is render
  componentDidUpdate() {
    console.log("update App 之后");
  }
  componentWillUnmount() {
    console.log("App 快要死了，记得喂狗");
  }
  componentWillReceiveProps() {
    console.log("我爸说话了");
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Baba />, rootElement);
