import React, { createContext, useState, useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'

function App () {
  const [n, setN] = useState(0)
  const onClick = () => {
    setN(i => i + 1)
  }
  useEffect(() => {
    console.log(1)
  }, [])
  useEffect(() => {
    console.log(2)
  }, [])
  return (
    <div>
      n: {n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
