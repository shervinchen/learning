import React from 'react'
import ReactDOM from 'react-dom'

// userContext 不仅能贯穿始终，还能贯穿不同组件，相当于一个全局变量
const themeContext = React.createContext(null)

function App () {
  const [theme, setTheme] = React.useState('red')
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme}`}>
        <p>{theme}</p>
        <div>
          <ChildA />
        </div>
        <div>
          <ChildB />
        </div>
      </div>
    </themeContext.Provider>
  )
}

function ChildA () {
  const { setTheme } = React.useContext(themeContext)
  return (
    <div>
      <button onClick={() => setTheme('red')}>red</button>
    </div>
  )
}

function ChildB () {
  const { setTheme } = React.useContext(themeContext)
  return (
    <div>
      <button onClick={() => setTheme('blue')}>blue</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
