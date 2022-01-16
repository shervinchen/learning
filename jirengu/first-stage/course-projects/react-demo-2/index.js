const React = window.React
const ReactDOM = window.ReactDOM
const root = document.querySelector('#root')
let n = 0
const App = () => React.createElement(
  'div',
  {
    className: 'red'
  },
  [
    n,
    React.createElement(
      'button',
      {
        onClick: () => {
          n += 1
          ReactDOM.render(App(), root)
        }
      },
      '+1'
    )
  ]
)

ReactDOM.render(App(), root)
