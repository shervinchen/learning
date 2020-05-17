import React from 'react'
import ReactDOM from 'react-dom'

// const App = () => {
//   return <div>App组件
//     <Component numbers={[['a', 'b', 'c']]} />
//   </div>
// }

// const n = 0
// const Component = () => {
//   return <div>{n % 2 === 0 ? <div>n是偶数</div> : <span>n是奇数</span>}</div>
// }

// const Component = (props) => {
//   return props.numbers.map((n, index) => {
//     return <div>下标{index}值为{n}</div>
//   })
// }

// const Component = (props) => {
//   return (
//     <div>
//       {
//         props.numbers.map((n, index) => {
//           return <div>下标{index}值为{n}</div>
//         })
//       }
//     </div>
//   )
// }

// const Component = (props) => {
//   const array = []
//   for (let index = 0; index < props.numbers.length; index++) {
//     array.push(<div>下标{index}值为{props.numbers[index]}</div>)
//   }
//   return <div>{array}</div>
// }

let n = 0
const App = () => (
  <div>
    {n}
    <button
      onClick={() => {
        n += 1
        render()
      }}
    >
      +1
    </button>
  </div>
)
const render = () => ReactDOM.render(<App />, document.querySelector('#root'))
render()

export default App
