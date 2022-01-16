import React, { useReducer } from "react";
import ReactDOM from "react-dom";

const initFormData = {
  name: "",
  age: 18,
  nationality: "汉族"
};

function reducer(state, action) {
  switch (action.type) {
    case "patch":
      return { ...state, ...action.formData };
    case "reset":
      return initFormData;
    default:
      throw new Error();
  }
}

function App() {
  const [formData, dispatch] = useReducer(reducer, initFormData);
  // const patch = (key, value)=>{
  //   dispatch({ type: "patch", formData: { [key]: value } })
  // }
  const onSubmit = () => {};
  const onReset = () => {
    dispatch({ type: "reset" });
  };
  return (
    <form onSubmit={onSubmit} onReset={onReset}>
      <div>
        <label>
          姓名
          <input
            value={formData.name}
            onChange={e =>
              dispatch({ type: "patch", formData: { name: e.target.value } })
            }
          />
        </label>
      </div>
      <div>
        <label>
          年龄
          <input
            value={formData.age}
            onChange={e =>
              dispatch({ type: "patch", formData: { age: e.target.value } })
            }
          />
        </label>
      </div>
      <div>
        <label>
          民族
          <input
            value={formData.nationality}
            onChange={e =>
              dispatch({
                type: "patch",
                formData: { nationality: e.target.value }
              })
            }
          />
        </label>
      </div>
      <div>
        <button type="submit">提交</button>
        <button type="reset">重置</button>
      </div>
      <hr />
      {JSON.stringify(formData)}
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
