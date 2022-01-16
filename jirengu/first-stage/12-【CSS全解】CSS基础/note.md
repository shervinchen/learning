# 基本概念

## 文档流

### 流动方向

- inline元素从左到右，到达最右边才换行
- block元素从上到下，每一个都另起一行
- inline-block也是从左到右

### 宽度

- inline宽度为内部inline元素的和，不能用width指定
- block默认自动计算宽度，可用width指定
- inline-block结合前两者特点，可用width

### 高度

- inline高度由line-height间接确定，跟height无关
- block高度由内部文档流元素决定，可以设height
- inline-block跟block类似，可以设置height

## overflow溢出

### 当内容大于容器

- 当内容的宽度或高度大于容器，会溢出
- 可用overflow来设置是否显示滚动条
- auto是灵活设置
- scroll是永远显示
- hidden是直接隐藏溢出部分
- visible是直接显示溢出部分
- overflow可以分为overflow-x和overflow-y

## 脱离文档流

- float
- position: absolute / fixed

## 两种盒模型

- content-box 内容盒 - 内容就是盒子的边界
- border-box 边框盒 - 边框才是盒子的边界

### 公式

- content-box width = 内容宽度
- border-box width = 内容宽度 + padding + border
