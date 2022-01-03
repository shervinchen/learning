import React, { useMemo, useCallback, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

function App () {
  console.log('App 执行了')
  const [n, setN] = React.useState(0)
  const onClick = () => {
    setN(n + 1)
  }

  const [_, set_] = React.useState(null)

  // 每次 render app都会重新生成一个n  如果想要一个不变的值  就用useRef
  const count = useRef(0)

  const onClick2 = () => {
    count.current += 1
    // count改变后，不会主动更新渲染UI，需要重新set
    set_(Math.random())
  }

  useEffect(() => {
    // count.current += 1
    console.log(count.current)
  })

  return (
    <div className='App'>
      <div>
        <button onClick={onClick}>update n {n}</button>
        <button onClick2={onClick2}>update count: {count.current}</button>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
