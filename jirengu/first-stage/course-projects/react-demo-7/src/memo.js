import React, { useMemo, useCallback } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

function App () {
  const [n, setN] = React.useState(0)
  const [m, setM] = React.useState(0)
  const onClick = () => {
    setN(n + 1)
  }
  const onClick2 = () => {
    setM(m => m + 1)
  }

  // 只有在m变化时，再重新生成这个函数，缓存函数
  const onClickChild = useMemo(() => {
    return () => {
      console.log(m)
    }
  }, [m])

  // useMemo的简化版
  const onClickChild = useCallback(() => {
    console.log(m)
  }, [m])

  return (
    <div className='App'>
      <div>
        <button onClick={onClick}>update n {n}</button>
        <button onClick={onClick2}>update m {m}</button>
      </div>
      <Child data={m} onClick={onClickChild} />
      {/* <Child2 data={m}/> */}
    </div>
  )
}
const Child = React.memo(props => {
  console.log('child 执行了')
  console.log('假设这里有大量代码')
  return <div onClick={props.onClick}>child: {props.data}</div>
})

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
