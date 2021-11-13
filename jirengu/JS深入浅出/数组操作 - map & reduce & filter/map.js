Array.prototype.map = function (fn) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = fn.call(undefined, this[i], i, this)
    }
  }
  return result
}
