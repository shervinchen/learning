# 2020 前端押题

## 第一部分：HTML

1、必考：你是如何理解 HTML 语义化的？

- 举例法：HTML 语义化就是使用正确的标签（总结）段落就写 p 标签，标题就写 h1 标签，文章就写 article 标签，视频就写 video 标签，等等
- 阐述法：首先讲以前的后台开发人员使用 table 布局，然后讲美工人员使用 div+css 布局，最后讲专业的前端会使用正确的标签进行页面开发

参考答案：

> 语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化），便于开发者阅读和写出更优雅的代码的同时，让浏览器的爬虫和机器很好的解析。

2、meta viewport 是做什么用的，怎么写？

举例法，然后逐个解释每个单词的意思。淘宝 H5 的 meta 标签，仅供参考：

```html
<meta
  name="viewport"
  content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
/>
```

3、你用过哪些 HTML 5 标签？

举例法，平时如果只用 div 写页面你就完了，把你平时用到的 html5 标签列举出来即可，但是要注意如果这个标签的用法比较复杂，你要先看一下 MDN 的文档再说这个标签；如果你说出一个标签，却不知道它有哪些 API，那么你就会被扣分

参考答案：

```html
<header></header>
<article></article>
<section></section>
<footer></footer>

<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  您的浏览器不支持 video 标签。
</video>

<audio controls>
  <source src="horse.ogg" type="audio/ogg" />
  <source src="horse.mp3" type="audio/mpeg" />
  您的浏览器不支持 audio 元素。
</audio>

<canvas id="myCanvas" width="200" height="200"></canvas>
<script type="text/javascript">
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 80, 100);
</script>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
  <polygon
    points="100,10 40,180 190,60 10,60 160,180"
    style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;"
  />
</svg>
```

4、H5 是什么？

阐述法，搜一下知乎就知道了，H5 表示移动端页面，反正不是 HTML5

参考答案：

[https://www.zhihu.com/question/30363342](https://www.zhihu.com/question/30363342)

> 我们在谈论 H5 的时候，实际上是一个解决方案，一个看起来酷炫的移动端 onepage 网站的解决方案。而这个解决方案不仅包含了 HTML5 新增的 audio 标签，canvas，拖拽特性，本地存储，websocket 通信，同时也包括了盒模型、绝对定位，包括一切前端的基本知识

## 第二部分：CSS

1、必考：两种盒模型分别说一下

先说两种盒模型分别怎么写，具体到代码。然后说你平时喜欢用 border box，因为更好用

参考答案：

> box-sizing: conent-box; 将盒子设置为标准模型（盒子默认为标准模型）
> width = content

> box-sizing: border-box; 将盒子设置为 IE 模型（也叫做怪异盒子）
> width = content + padding + border

2、必考：如何垂直居中？

背代码

参考答案：

如果 .parent 的 height 不写，你只需要 padding: 10px 0; 就能将 .child 垂直居中；
如果 .parent 的 height 写死了，就很难把 .child 居中，以下是垂直居中的方法。
忠告：能不写 height 就千万别写 height

- flex 布局

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

- 绝对定位 + transform

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

- 绝对定位 + margin

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
```

3、必考：flex 怎么用，常用属性有哪些？

看 MDN，背代码

参考答案：

[https://blog.tmaize.net/posts/2016/04/18/flex%E5%B8%83%E5%B1%80%E7%AC%94%E8%AE%B0.html](https://blog.tmaize.net/posts/2016/04/18/flex%E5%B8%83%E5%B1%80%E7%AC%94%E8%AE%B0.html)

```css
.box {
  display: flex;
  /*Webkit 内核的浏览器，必须加上-webkit前缀*/
  display: -webkit-flex;
}
/*也可以设置为行内的flex属性*/
.box {
  display: inline-flex;
}
```

![flex](https://blog.tmaize.net/posts/2016/04/18/02.png)

4、必考：BFC 是什么？

背 BFC 触发条件，MDN 写了
但是不用全部背下来，面试官只知道其中几个：

- 浮动元素（元素的 float 不是 none）
- 绝对定位元素（元素的 position 为 absolute 或 fixed）
- 行内块元素
- overflow 值不为 visible 的块元素
- 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）

参考答案：

> 块格式化上下文（Block Formatting Context，BFC） 是 Web 页面的可视 CSS 渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

> 事实上，BFC 的目的是形成一个相对于外界完全独立的空间，让内部的子元素不会影响到外部的元素

5、CSS 选择器优先级

- 背人云亦云的答案（错答案、已过时）：[https://www.cnblogs.com/xugang/archive/2010/09/24/1833760.html](https://www.cnblogs.com/xugang/archive/2010/09/24/1833760.html)
- 看面试官脸色行事
- 方方给的三句话：
  - 越具体优先级越高
  - 同样优先级写在后面的覆盖写在前面的
  - !important 优先级最高，但是要少用

参考答案：

[https://juejin.im/post/5e97045b6fb9a03c31762a2f](https://juejin.im/post/5e97045b6fb9a03c31762a2f)

> 内联 > id 选择器 > 类、属性、伪类选择器 > 标签元素、伪元素

6、清除浮动说一下

背代码

参考答案：

```css
.clearfix:after {
  content: "";
  display: block; /*或者 table*/
  clear: both;
}
.clearfix {
  zoom: 1; /* IE 兼容*/
}
```

## 第二部分：原生JS

