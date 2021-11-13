Array.prototype.forEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      fn.call(undefined, this[i], i, this)
    }
  }
}
