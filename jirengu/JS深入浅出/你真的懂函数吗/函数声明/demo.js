// 匿名函数
const fn = function () {}
const fn2 = fn
console.log(fn.name) // fn
console.log(fn2.name) // fn

// 具名函数
function fn3 () {}

const fn5 = function fn4 () {}

// 箭头函数
const fn6 = i => i + 1
