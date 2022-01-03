import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function App () {
    const [n, setN] = useState(0)
    const onClick = () => {
        // setN(n + 1)
        // setN(n + 1) // n 不能加2
        
        // 必须改成函数的写法
        setN(x => x + 1)
        setN(n => n + 1)
    }
    return (
        <div className='App'>
            <h1>n: {n}</h1>
            <button onClick={onClick}>+2</button>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
