import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import ReactDOM from 'react-dom'

function App () {
  const [n, setN] = useState(0)
  const time = useRef(null)
  const onClick = () => {
    setN(i => i + 1)
    // before render
    time.current = performance.now()
  }
  useLayoutEffect(() => {
    // 改成 useEffect 试试
    // after render
    if (time.current) {
      console.log(performance.now() - time.current)
    }
  })

//   useEffect(() => {
//     if (time.current) {
//       console.log(performance.now() - time.current)
//     }
//   })

  return (
    <div className='App'>
      <h1>n: {n}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
