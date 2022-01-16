import React, { createContext, useState, useContext } from 'react'
import ReactDOM from 'react-dom'

const Context = createContext(null)

function App () {
  const [n, setN] = useState(0)
  return (
    <Context.Provider value={{ n, setN }}>
      <Parent />
    </Context.Provider>
  )
}

function Parent () {
    const {n, setN} = useContext(Context)
  return (
    <div>
      I am parnet,
      n: {n}
      <Child />
    </div>
  )
}

function Child () {
  const { n, setN } = useContext(Context)
  const onClick = () => {
    setN(i => i + 1)
  }
  return (
    <div>
      I am child, n: {n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
