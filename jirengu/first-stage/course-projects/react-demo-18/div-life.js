let app = document.getElementById("app");

// create div
let div = document.createElement("div");
div.style.border = "1px solid red";

let state = 0;

// componentWillMount()

// render == update
div.innerHTML = `
  <p>${state}</p>
  <button>+1</button>
  <button>die</button>
`;
// mount div
app.appendChild(div);
// mount 之后

div.querySelector("button").onclick = () => {
  state += 1;
  // update div == render
  div.querySelector("p").innerText = state;
};

div.querySelectorAll("button")[1].onclick = () => {
  div.querySelector("button").onclick = null;
  div.querySelectorAll("button")[1].onclick = null;
  div.remove();
  div = null; // destroy div
};
