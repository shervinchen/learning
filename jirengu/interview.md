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
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    您的浏览器不支持 video 标签。
</video>

<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  您的浏览器不支持 audio 元素。
</audio>

<canvas id="myCanvas" width="200" height="200"></canvas>
<script type="text/javascript">
    var canvas=document.getElementById('myCanvas');
    var ctx=canvas.getContext('2d');
    ctx.fillStyle='#FF0000';
    ctx.fillRect(0,0,80,100);
</script>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
   <polygon points="100,10 40,180 190,60 10,60 160,180"
   style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;"/>
</svg>
```

4、H5 是什么？

阐述法，搜一下知乎就知道了，H5表示移动端页面，反正不是HTML5

参考答案：

[https://www.zhihu.com/question/30363342](https://www.zhihu.com/question/30363342)

> 我们在谈论H5的时候，实际上是一个解决方案，一个看起来酷炫的移动端onepage网站的解决方案。而这个解决方案不仅包含了HTML5新增的audio标签，canvas，拖拽特性，本地存储，websocket通信，同时也包括了盒模型、绝对定位，包括一切前端的基本知识

## 第二部分：CSS
