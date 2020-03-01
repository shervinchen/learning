# 对象分类

一个小程序：
输出各种形状的面积和周长

1. 正方形

```javascript
let square = {
    width: 5,
    getArea() {
        return this.width * this.width
    },
    getLength() {
        return this.width * 4
    }
}
```

> 分析：正方形拥有三个属性：边长、面积、周长

