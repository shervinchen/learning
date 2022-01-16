Array.prototype.slice = function (begin, end) {
  let result = []
  begin = begin || 0
  end = end || this.length
  for (let i = begin; i < end; i++) {
    result.push(this[i])
  }
  return result
}
