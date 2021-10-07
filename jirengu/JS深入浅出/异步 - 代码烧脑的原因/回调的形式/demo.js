// function buyFruit () {
//   setTimeout(() => {
//     window.apple = 'buy fruit'
//   }, Math.random() * 10 * 1000)
// }

// buyFruit()
// const id = setInterval(() => {
//   if (window.apple) {
//     console.log(window.apple)
//     window.clearInterval(id)
//   }
// }, 1000)

function buyFruit (fn) {
  setTimeout(() => {
    fn('buy fruit')
  }, Math.random() * 10 * 1000)
}
buyFruit(apple => {
  console.log(apple)
})

// Node.js 的 error-first 形式
fs.readFile('./1.txt', (error, content) => {
  if (error) {
    // 失败
  } else {
    // 成功
  }
})

// jQuery 的 success / error 形式
$.ajax({
  url: '/xxx',
  success: () => {},
  error: () => {}
})

// jQuery 的 done / fail / always 形式
$.ajax({
  url: '/xxx'
})
  .done(() => {})
  .fail(() => {})
  .always(() => {})

// Prosmise 的 then 形式
$.ajax({
  url: '/xxx'
})
  .then(
    () => {},
    () => {}
  )
  .then(() => {})
