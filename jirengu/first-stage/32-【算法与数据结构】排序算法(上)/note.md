# 排序算法

如果找到两个数中较小的那一个？

数据结构：
用数组[a, b]表示两个数字

```javascript
let minOf2 = (numbers) => {
    if (numbers[0] < numbers[1]) {
        return numbers[0]
    } else {
        return numbers[1]
    }
}

// 优化代码
let minOf2 = numbers => numbers[0] < numbers[1] ? numbers[0] : numbers[1]

// 析构赋值
let minOf2 = ([a, b]) => a < b ? a : b

// 调用
minOf2([1, 2])
minOf2.call(null, [1, 2])
```

