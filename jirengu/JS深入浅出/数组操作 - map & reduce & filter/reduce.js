Arra.prototype.reduce = function (fn, init) {
  let result = init
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result = fn.call(undefined, result, this[i], i, this)
    }
  }
  return result
}
