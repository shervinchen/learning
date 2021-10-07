// 同步的 sleep
function sleep (seconds) {
  var start = new Date()
  while (new Date() - start < seconds * 1000) {}
  return
}
console.log(1)
sleep(3)
console.log('wake up')
console.log(2)
