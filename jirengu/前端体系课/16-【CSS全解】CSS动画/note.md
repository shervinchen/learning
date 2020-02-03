# CSS动画

## 动画

### 定义

- 由许多静止的画面（帧）
- 以一定的速度（如每秒30张）连续播放时
- 肉眼因视觉残象产生错觉
- 而误以为是活动的画面

### 概念

- 帧：每个静止的画面都叫做帧
- 播放速度：每秒24帧（影视）或者每秒30帧（游戏）

## 浏览器渲染过程

步骤：

1. 根据HTML构建HTML树（DOM）
2. 根据CSS构建CSS树（CSSOM）
3. 将两棵树合并成一颗渲染树（render tree）
4. Layout布局（文档流、盒模型、计算大小和位置）
5. Paint绘制（把边框颜色、文字颜色、阴影等画出来）
6. Compose合成（根据层叠关系展示画面）

## transform 变形

四个常用功能：

- 位移 translate
- 缩放 scale
- 旋转 rotate
- 倾斜 skew

## transition 过渡

### 作用

- 补充中间帧

### 语法

- transition: 属性名 时长 过渡方式 延迟
- transition: left 200ms linear
- 可以用逗号分隔两个不同属性
- transition: left 200ms, top 400ms
- 可以用 all 代表所有属性
- transition: all 200ms
- 过渡方式有：linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier | step-start | step-end | steps

## animation

animation：时长 | 过渡方式 | 延迟 | 次数 | 方向 | 填充模式 | 是否暂停 | 动画名

- 时长：1s 或者 1000ms
- 过渡方式：跟transition取值一样，如linear
- 次数：3或者2.4或者infinite
- 方向：reverse | alternate | alternate-reverse
- 填充模式：none | forwards | backwards | both
- 是否暂停：paused | running
- 以上所有属性都有对应的单独属性
