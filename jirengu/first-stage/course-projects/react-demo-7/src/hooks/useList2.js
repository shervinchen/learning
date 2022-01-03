import { useState, useEffect } from "react";

const useList = () => {
  const [list, setList] = useState(null);
  useEffect(() => {
    ajax("/list").then(list => {
      setList(list);
    });
  }, []); // [] 确保只在第一次运行
  return {
    list: list,
    addItem: name => {
      setList([...list, { id: Math.random(), name: name }]);
    },
    deleteIndex: index => {
      setList(list.slice(0, index).concat(list.slice(index + 1)));
    }
  };
};
export default useList;

function ajax() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: "1", name: "Frank" },
        { id: "2", name: "Jack" },
        { id: "3", name: "Alice" },
        { id: "4", name: "Bob" }
      ]);
    }, 2000);
  });
}
