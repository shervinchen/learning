import React, { createContext, useState, useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'

function App () {
  const [n, setN] = useState(0)
  const onClick = () => {
    setN(i => i + 1)
  }
  // 对环境的改变就是副作用
  const afterRender = useEffect
  // mounted
  // [] 里面的变量变化时执行 => 不会执行
  afterRender(() => {
    console.log('第一次渲染之后执行这一句话')
  }, [])
  // n update
  afterRender(() => {
    if (n !== 0) {
      console.log('n 变化了')
    }
  }, [n])
  afterRender(() => {
    console.log('任何一个state变化时都执行')
  })
  afterRender(() => {
    const id = setInterval(() => {
      console.log('hi')
    }, 1000)
    return () => {
      window.clearInterval(id)
    }
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
