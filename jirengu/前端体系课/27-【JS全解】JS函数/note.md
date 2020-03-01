# 函数

函数是对象

## 定义一个函数

### 具名函数

``` javascript
function 函数名（形式参数1，形式参数2） {
    语句
    return 返回值
}
```

### 匿名函数：（函数表达式）

``` javascript
let a = function(x, y) { return x + y }
```

### 箭头函数

``` javascript
let f1 = x => x*x

// 圆括号不能省
let f2 = (x, y) => x*y

let f3 = (x, y) => {
    console.log('hi')
    return x*y
}

// let f4 = x => { name: x } 直接返回对象会出错
let f4 = x => ({ name: x })
```

### 构造函数

```javascript
// 所有函数都是Function构造出来的
let fn = new Function('x', 'y', 'return x+y')
```

### 函数自身

```javascript
let fn = () => console.log('hi')
// 函数自身
fn
// 调用函数
fn()
```

## 函数的要素

每个函数都有这些东西：

- 调用时机
- 作用域
- 闭包
- 形式参数
- 返回值
- 调用栈
- 函数提升
- arguments（除了箭头函数）
- this（除了箭头函数）