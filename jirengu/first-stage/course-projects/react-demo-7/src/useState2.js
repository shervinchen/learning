import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function App () {
//   const [user, setUser] = useState({ name: 'Frank', age: 18 })
  const [user, setUser] = useState(() => ({ name: 'Frank', age: 18 }))
  const onClick = () => {
    setUser({
      ...user,
      name: 'Jack'
    })
  }
  return (
    <div className='App'>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
