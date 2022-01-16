import React, { useRef } from "react";
import ReactDOM from "react-dom";

function App() {
  const buttonRef = useRef(null);
  return (
    <div className="App">
        {/* <Button2 ref={buttonRef}>按钮</Button2> */}
      <Button3 ref={buttonRef}>按钮</Button3>
    </div>
  );
}

// const Button2 = (props) => {
//     return <button className="red" {...props} />
// }

const Button3 = React.forwardRef((props, ref) => {
    console.log(props)
    console.log(ref)
  return <button className="red" ref={ref} {...props} />;
});

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
