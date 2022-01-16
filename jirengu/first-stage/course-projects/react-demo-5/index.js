// codesandbox.io/s/wild-currying-y6t17

import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

function App () {
  const a = 10
  return (
    <div className='App'>
      爸爸
      <Son messageForSon='儿子你好' messageForSon2={a} />
    </div>
  )
}

class Son extends React.Component {
  render () {
    return (
      <div className='Son'>
        我是儿子，我爸对我说「{this.props.messageForSon}」
        <Grandson messageForGrandson='孙贼你好' />
      </div>
    )
  }
}

const Grandson = props => {
  return (
    <div className='Grandson'>
      我是孙子，我爸对我说「{props.messageForGrandson}」
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
