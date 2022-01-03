import React, { useState, useEffect, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'

const BlinkyRender = () => {
  const [value, setValue] = useState(0)

  //   useEffect(() => {
  //     document.querySelector('#x').innerText = `value: 1000`
  //   }, [value]);

  useLayoutEffect(() => {
    document.querySelector('#x').innerText = `value: 1000`
  }, [value])

  return (
    <div id='x' onClick={() => setValue(0)}>
      value: {value}
    </div>
  )
}

ReactDOM.render(<BlinkyRender />, document.querySelector('#root'))
