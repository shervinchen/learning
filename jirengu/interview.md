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

## 第三部分：原生 JS

1、必考：ES6 语法知道哪些，分别怎么用？

举例法，let const 箭头函数 Promise 展开操作符 默认参数 import export，见[方方整理的列表](https://fangyinghang.com/es-6-tutorials/)

参考答案：

[https://juejin.im/post/5e9d0ad1e51d4547144282cd](https://juejin.im/post/5e9d0ad1e51d4547144282cd)

2、必考 Promise、Promise.all、Promise.race 分别怎么用？

> Promise 对象用于表示一个异步操作的最终完成 (或失败), 及其结果值.

- 背代码 Promise 用法

```javascript
function fn() {
  return new Promise((resolve, reject) => {
    // 成功时调用 resolve(数据)
    // 失败时调用 reject(错误)
  });
}
fn().then(success, fail).then(success2, fail2);
```

- 背代码 Promise.all 用法

```javascript
// promise1和promise2都成功才会调用success1
Promise.all([promise1, promise2]).then(success1, fail1);
```

- 背代码 Promise.race 用法

```javascript
// promise1和promise2只要有一个成功就会调用success1；
// promise1和promise2只要有一个失败就会调用fail1；
// 总之，谁第一个成功或失败，就认为是race的成功或失败。
Promise.race([promise1, promise2]).then(success1, fail1);
```

3、必考：手写函数防抖和函数节流

背代码

- 节流

```javascript
// 节流（一段时间执行一次之后，就不执行第二次）
function throttle(fn, delay) {
  let canUse = true;
  return function () {
    if (canUse) {
      fn.apply(this, arguments);
      canUse = false;
      setTimeout(() => (canUse = true), delay);
    }
  };
}
const throttled = throttle(() => console.log("hi"));
throttled();
throttled();
```

注意，有些地方认为节流函数不是立刻执行的，而是在冷却时间末尾执行的（相当于施法有吟唱时间），那样说也是对的。

- 防抖

```javascript
// 防抖（一段时间会等，然后带着一起做了）
function debounce(fn, delay) {
  let timerId = null;
  return function () {
    const context = this;
    if (timerId) {
      window.clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn.apply(context, arguments);
      timerId = null;
    }, delay);
  };
}
const debounced = debounce(() => console.log("hi"));
debounced();
debounced();
```

4、必考：手写 AJAX

背代码

- 完整版

```javascript
var request = new XMLHttpRequest();
request.open("GET", "/a/b/c?name=ff", true);
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  }
};
request.send();
```

- 简化版

```javascript
var request = new XMLHttpRequest();
request.open("GET", "/a/b/c?name=ff", true);
request.onload = () => console.log(request.responseText);
request.send();
```

5、必考：这段代码里的 this 是什么？

- 背代码

```javascript
fn()：this => window/global

obj.fn()：this => obj

fn.call(xx)：this => xx

fn.apply(xx)：this => xx

fn.bind(xx)：this => xx

new Fn()：this => 新的对象

fn = ()=> {}：this => 外面的 this
```

- 看调用

[《this 的值到底是什么？一次说清楚》](https://zhuanlan.zhihu.com/p/23804247)

6、必考：闭包/立即执行函数是什么？

[https://zhuanlan.zhihu.com/p/22486908](https://zhuanlan.zhihu.com/p/22486908)

[https://zhuanlan.zhihu.com/p/22465092](https://zhuanlan.zhihu.com/p/22465092)

> 「函数」和「函数内部能访问到的变量」（也叫环境）的总和，就是一个闭包。

> 立即执行函数就是声明一个匿名函数，马上调用这个匿名函数

```javascript
(function () {
  alert("我是匿名函数");
})();
```

7、必考：什么是 JSONP，什么是 CORS，什么是跨域？

- JSONP：跨域请求数据解决方案中的一种，原理是 script 脚本加载不受同源策略的限制

  - JSONP 是通过 script 标签加载数据的方式去获取数据当做 JS 代码来执行
  - 提前在页面上声明一个函数，函数名通过接口传参的方式传给后台，后台解析到函数名后在原始数据上「包裹」这个函数名，发送给前端。换句话说，JSONP 需要对应接口的后端的配合才能实现。

- CORS：跨域资源共享(CORS) 是一种机制，它使用额外的 HTTP 头来告诉浏览器 让运行在一个 origin (domain) 上的 Web 应用被准许访问来自不同源服务器上的指定的资源。当一个资源从与该资源本身所在的服务器不同的域、协议或端口请求一个资源时，资源会发起一个跨域 HTTP 请求

  - CORS （Cross-Origin Resource Sharing，跨域资源共享）是一个系统，它由一系列传输的 HTTP 头组成，这些 HTTP 头决定浏览器是否阻止前端 JavaScript 代码获取跨域请求的响应。

  - 同源安全策略 默认阻止“跨域”获取资源。但是 CORS 给了 web 服务器这样的权限，即服务器可以选择，允许跨域请求访问到它们的资源。

- 跨域：当协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域。不同域之间相互请求资源，就算作“跨域”

8、常考：async/await 怎么用，如何捕获异常？

async 函数是 Generator 函数的语法糖。使用 关键字 async 来表示，在函数内部使用 await 来表示异步。
async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。当函数执行的时候，一旦遇到 await 就会先返回，等到异步操作完成，再接着执行函数体内后面的语句

使用 try/catch 捕获异常：

```javascript
async function run() {
  try {
    await Promise.reject(new Error("Oops!"));
  } catch (error) {
    error.message; // "Oops!"
  }
}
```

9、常考：如何实现深拷贝？

背代码，要点：

- 递归
- 判断类型
- 检查环（也叫循环引用）
- 需要忽略原型

参考答案：

[https://github.com/mqyqingfeng/Blog/issues/32](https://github.com/mqyqingfeng/Blog/issues/32)

```javascript
function deepCopy(obj) {
  if (typeof obj !== "object") return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}
```

10、常考：如何用正则实现 trim()？

```javascript
function trim(string) {
  return string.replace(/^\s+|\s+$/g, "");
}
```

11、常考：不用 class 如何实现继承？用 class 又如何实现？

- 不用 class

```javascript
function Animal(color) {
  this.color = color;
}
Animal.prototype.move = function () {}; // 动物可以动
function Dog(color, name) {
  Animal.call(this, color); // 或者 Animal.apply(this, arguments)
  this.name = name;
}
// 下面三行实现 Dog.prototype.__proto__ = Animal.prototype
function temp() {}
temp.prototype = Animal.prototype;
Dog.prototype = new temp();

Dog.prototype.constuctor = Dog; // 这行看不懂就算了，面试官也不问
Dog.prototype.say = function () {
  console.log("汪");
};

var dog = new Dog("黄色", "阿黄");
```

- 用 class

```javascript
class Animal {
  constructor(color) {
    this.color = color;
  }
  move() {}
}
class Dog extends Animal {
  constructor(color, name) {
    super(color);
    this.name = name;
  }
  say() {}
}
```

12、常考：如何实现数组去重？

[https://segmentfault.com/a/1190000016418021](https://segmentfault.com/a/1190000016418021)

```javascript
function uniqueArray(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (newArray.indexOf(arr[i]) < 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

function uniqueArray2(arr) {
  return arr.filter(function (item, index, arr) {
    return arr.indexOf(item) === index;
  });
}

[...new Set(arr)];
```

13、放弃：== 相关题目（反着答）

日常工作中只使用===，抛弃使用==，因为坑太多

14、送命题：手写一个 Promise

放弃，可以去看看别人的实现，然后说说 promise 的大概原理

## 第四部分：DOM

1、必考：事件委托

- 错误版（但是可能能过）

```javascript
ul.addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() === "li") {
    fn(); // 执行某个函数
  }
});
```

bug 在于，如果用户点击的是 li 里面的 span，就没法触发 fn，这显然不对

- 高级版

```javascript
function delegate(element, eventType, selector, fn) {
  element.addEventListener(eventType, (e) => {
    let el = e.target;
    while (!el.matches(selector)) {
      if (element === el) {
        el = null;
        break;
      }
      el = el.parentNode;
    }
    el && fn.call(el, e, el);
  });
  return element;
}
```

思路是点击 span 后，递归遍历 span 的祖先元素看其中有没有 ul 里面的 li

2、用 mouse 事件写一个可拖曳的 div

```html
<div id="element"></div>
```

```javascript
var dragging = false;
var position = null;

element.addEventListener("mousedown", function (e) {
  dragging = true;
  position = [e.clientX, e.clientY];
});

document.addEventListener("mousemove", function (e) {
  if (dragging) {
    var x = e.clientX;
    var y = e.clientY;
    var deltaX = x - position[0];
    var deltaY = y - position[1];
    var left = parseInt(element.style.left || 0);
    var top = parseInt(element.style.top || 0);
    element.style.left = left + deltaX + "px";
    element.style.top = top + deltaY + "px";
    position = [x, y];
  }
});
document.addEventListener("mouseup", function (e) {
  dragging = false;
});
```

## 第五部分：HTTP

1、必考：HTTP 状态码知道哪些？分别什么意思？

- 2xx 表示成功
- 3xx 表示需要进一步操作
- 4xx 表示浏览器方面出错
- 5xx 表示服务器方面出错

常见的HTTP状态码：

- 200 - 请求成功
- 301 - 资源（网页等）被永久转移到其它URL
- 404 - 请求的资源（网页等）不存在
- 500 - 内部服务器错误

2、大公司必考：HTTP 缓存有哪几种？

- 需要详细的了解 ETag、CacheControl、Expires 的异同
- 参考 https://imweb.io/topic/5795dcb6fb312541492eda8c
- 答题要点：
  - ETag 是通过对比浏览器和服务器资源的特征值（如MD5）来决定是否要发送文件内容，如果一样就只发送 304（not modified）
  - Expires 是设置过期时间（绝对时间），但是如果用户的本地时间错乱了，可能会有问题
  - CacheControl: max-age=3600 是设置过期时长（相对时间），跟本地时间无关。

3、必考：GET 和 POST 的区别

- 错解，但是能过面试
  - GET在浏览器回退时是无害的，而POST会再次提交请求。
  - GET产生的URL地址可以被加入收藏栏，而POST不可以。
  - GET请求会被浏览器主动cache，而POST不会，除非手动设置。
  - GET请求只能进行url编码，而POST支持多种编码方式。
  - GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
  - GET请求在URL中传送的参数是有长度限制的，而POST么有。
  - 对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
  - GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
  - GET参数通过URL传递，POST放在Request body中。

- 正解：就一个区别，语义——GET 用于获取资源，POST 用于提交资源

4、Cookie V.S. LocalStorage V.S. SessionStorage V.S. Session

- Cookie V.S. LocalStorage
  - 主要区别是 Cookie 会被发送到服务器，而 LocalStorage 不会
  - Cookie 一般最大 4k，LocalStorage 可以用 5Mb 甚至 10Mb（各浏览器不同）
- LocalStorage V.S. SessionStorage
  - LocalStorage 一般不会自动过期（除非用户手动清除），而 SessionStorage 在回话结束时过期（如关闭浏览器）
- Cookie V.S. Session
  - Cookie 存在浏览器的文件里，Session 存在服务器的文件里
  - Session 是基于 Cookie 实现的，具体做法就是把 SessionID 存在 Cookie 里

## 第六部分：Vue


