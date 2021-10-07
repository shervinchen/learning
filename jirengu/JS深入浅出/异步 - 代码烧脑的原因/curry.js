// 请写出一个柯里化其他函数的函数 curry，这个函数能够将接受多个参数的函数，变成多个接受一个参数的函数，具体见示例（这是 lodash.curry 的文档示例）：

// function curry(???){
//   ???
//   return ???
// }
// var abc = function(a, b, c) {
// return [a, b, c];
// };

// var curried = curry(abc);

// curried(1)(2)(3);
// // => [1, 2, 3]

// curried(1, 2)(3);
// // => [1, 2, 3]

// curried(1, 2, 3);
// // => [1, 2, 3]

function curry (func, fixedParams) {
  if (!Array.isArray(fixedParams)) {
    fixedParams = []
  }
  return function () {
    let newParams = Array.prototype.slice.call(arguments) // 新传的所有参数
    if (fixedParams.length + newParams.length < func.length) {
      return curry(func, fixedParams.concat(newParams))
    } else {
      return func.apply(undefined, fixedParams.concat(newParams))
    }
  }
}
