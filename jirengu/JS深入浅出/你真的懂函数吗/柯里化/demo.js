// 将 f(x,y) 变成 f(x=1)(y) 或 f(y=1)x
// z = f(x, y) = x + 2y
// g = f(x=1)(y) = 1 + 2y

//柯里化之前
function sum (x, y) {
  return x + y
}
//柯里化之后
function addOne (y) {
  return sum(1, y)
}
//柯里化之前
function Handlebar1 (template, data) {
  return template.replace('{{name}}', data.name)
}
//柯里化之后
function Handlebar2 (template) {
  return function (data) {
    return template.replace('{{name}}', data.name)
  }
}

Handlebar1('<h1>Hi, I am {{name}}</h1>', { name: 'csdoker' })
const t = Handlebar2('<h1>Hi, I am {{name}}</h1>')
t({ name: 'csdoker' })
