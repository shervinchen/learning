Arra.prototype.filter = function (fn) {
  let result = []
  let temp
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if ((temp = fn.call(undefined, this[i], i, this))) {
        result.push(this[i])
      }
    }
  }
  return result
}
