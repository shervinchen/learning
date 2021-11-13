Array.prototype.join = function (char) {
  let result = this[0] || ''
  let length = this.length
  for (let i = 1; i < length; i++) {
    result += char + this[i]
  }
  return result
}
