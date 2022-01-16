import React from 'react'
import ReactDOM from 'react-dom'

const rootElement = document.getElementById('root')

let _state = []
let index = 0

function myUseState (initialValue) {
  const currentIndex = index
  _state[currentIndex] =
    _state[currentIndex] === undefined ? initialValue : _state[currentIndex]
  const setState = newState => {
    _state[currentIndex] = newState
    render()
  }
  index += 1
  return [_state[currentIndex], setState]
}

const render = () => {
    index = 0
    ReactDOM.render(<App />, rootElement)
}

function App () {
  //   const [n, setN] = React.useState(0)
  const [n, setN] = myUseState(0)
  const [m, setM] = myUseState(0)
  return (
    <div className='App'>
      <p>{n}</p>
      <p>
        <button onClick={() => setN(n + 1)}>+1</button>
      </p>
      <p>{m}</p>
      <p>
        <button onClick={() => setM(m + 1)}>+1</button>
      </p>
    </div>
  )
}

ReactDOM.render(<App />, rootElement)
