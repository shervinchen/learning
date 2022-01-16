//异步的 sleep
function sleep (seconds, fn) {
  setTimeout(fn, seconds * 1000)
}
console.log(1)
sleep(3, () => console.log('wake up'))
console.log(2)
