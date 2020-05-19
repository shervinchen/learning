import React, { useState, useEffect } from 'react'
import useUpdate from './useUpdate'

// class App extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = { x: 1 }
//   }

//   onClick = () => {
//     // this.setState({
//     //   x: this.state.x + 1 // 2
//     // })
//     // this.setState({
//     //   x: this.state.x + 1 // 2
//     // })

//     this.setState({
//       x: this.state.x + 1 // 2
//     }, () => {
//       this.setState({
//         x: this.state.x + 1 // 3
//       })
//     })
//   }

//   onClick2 = () => {
//     this.setState((state) => ({
//       x: state.x + 1 // 2
//     }))
//     this.setState((state) => ({
//       x: state.x + 1 // 3
//     }))
//   }

//   render () {
//     return (
//       <div className='App'>
//         App
//         <button onClick={this.onClick}>+1</button>
//         <B name={this.state.x} />
//       </div>
//     )
//   }
// }

// class B extends React.Component {
//   componentWillReceiveProps (nextProps, nextContext) {
//     console.log('props变化了')
//   }

//   render () {
//     return <div>{this.props.name}</div>
//   }
// }

// class App extends React.PureComponent {
// class App extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       n: 1,
//       width: undefined
//     }
//     this.divRef = React.createRef()
//   }

//   // onClick = () => {
//   //   this.setState(state => ({
//   //     n: state.n + 1
//   //   }))
//   //   this.setState(state => ({
//   //     n: state.n - 1
//   //   }))
//   // }

//   componentDidMount () {
//     // const div = document.getElementById('xxx')
//     // const { width } = div.getBoundingClientRect()
//     // this.setState({ width })

//     // const div = this.divRef.current
//     // const { width } = div.getBoundingClientRect()
//     // this.setState({ width })

//     // 此处可以发起加载数据的AJAX请求
//   }

//   // shouldComponentUpdate (newProps, newState) {
//   //   if (newState.n === this.state.n) {
//   //     return false
//   //   } else {
//   //     return true
//   //   }
//   // }

//   render () {
//     console.log('render了一次')
//     return (
//       <div id='xxx'>
//         App
//         <div>
//           {/* {this.state.n} <button onClick={this.onClick}>+1</button> */}
//         </div>
//         <div>width: {this.state.width}px</div>
//         <div ref={this.divRef}>xxxxxxxxxxxxxxxxxxxxx</div>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       n: 1
//     }
//   }

//   onClick = () => {
//     this.setState(state => ({
//       n: state.n + 1
//     }))
//   }

//   render () {
//     return (
//       <div>
//         {this.state.n}
//         <button onClick={this.onClick}>+1</button>
//       </div>
//     )
//   }
// }

// const X = () => {
//   return <div>x</div>
// }

// const Y = () => {
//   return <div>y</div>
// }



const App = props => {
  const [n, setN] = useState(0)
  const [m, setM] = useState(0)
  const [childVisible, setChildVisible] = useState(true)

  const hide = () => {
    setChildVisible(false)
  }

  const show = () => {
    setChildVisible(true)
  }

  const onClickN = () => {
    setN(n + 1)
  }

  const onClickM = () => {
    setM(m + 1)
  }

  // 只在第一次渲染的时候调用 模拟componetDidMount
  useEffect(() => {
    console.log('use effect')
  }, [])

  useUpdate(() => {
    console.log('变了')
  }, n)

  useEffect(() => {
    console.log('n或者m变了')
  }, [n, m])

  // 任何一个state改变都执行
  useEffect(() => {
    console.log('state变了')
  })

  useEffect(() => {
    console.log('组件第一次加载')
    return () => {
      console.log('组件销毁了')
    }
  })

  // return <>
  //   <X></X><Y></Y>
  // </>

  return (
    <div>
      {n}
      <button onClick={onClickN}>n+1</button>
      <hr />
      {m}
      <button onClick={onClickM}>m+1</button>
      <hr />
      {childVisible ? (
        <button onClick={hide}>hide</button>
      ) : (
        <button onClick={show}>show</button>
      )}
      {childVisible ? <Child /> : null}
    </div>
  )
}

const Child = props => {
  useEffect(() => {
    console.log('渲染或者变化了')
    return () => {
      console.log('Child 销毁了')
    }
  })
  return <div>Child</div>
}

export default App
