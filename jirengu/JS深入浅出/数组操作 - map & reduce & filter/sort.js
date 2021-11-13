Array.prototype.sort = function (fn) {
  fn = fn || ((a, b) => a - b)
  let roundCount = this.length - 1 // 比较的轮数
  for (let i = 0; i < roundCount; i++) {
    let minIndex = this[i]
    for (let k = i + 1; k < this.length; k++) {
      if (fn.call(null, this[k], this[i]) < 0) {
        ;[this[i], this[k]] = [this[k], this[i]]
      }
    }
  }
}
