import React from 'react'

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
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      n: 1,
      width: undefined
    }
    this.divRef = React.createRef()
  }

  // onClick = () => {
  //   this.setState(state => ({
  //     n: state.n + 1
  //   }))
  //   this.setState(state => ({
  //     n: state.n - 1
  //   }))
  // }

  componentDidMount () {
    // const div = document.getElementById('xxx')
    // const { width } = div.getBoundingClientRect()
    // this.setState({ width })

    // const div = this.divRef.current
    // const { width } = div.getBoundingClientRect()
    // this.setState({ width })

    // 此处可以发起加载数据的AJAX请求
  }

  // shouldComponentUpdate (newProps, newState) {
  //   if (newState.n === this.state.n) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  render () {
    console.log('render了一次')
    return (
      <div id='xxx'>
        App
        <div>
          {/* {this.state.n} <button onClick={this.onClick}>+1</button> */}
        </div>
        <div>width: {this.state.width}px</div>
        <div ref={this.divRef}>xxxxxxxxxxxxxxxxxxxxx</div>
      </div>
    )
  }
}

export default App
