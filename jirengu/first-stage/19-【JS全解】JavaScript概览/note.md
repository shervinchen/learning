# JavaScript概览

JavaScript（通常缩写为JS）是一种高级的、解释型的编程语言。JavaScript是一门基于原型、函数先行的语言，是一门多范式的语言，它支持面向对象编程，命令式编程，以及函数式编程。它提供语法来操控文本、数组、日期以及正则表达式等，不支持I/O，比如网络、存储和图形等，但这些都可以由它的宿主环境提供支持。它已经由ECMA（欧洲电脑制造商协会）通过ECMAScript实现语言的标准化。它被世界上的绝大多数网站所使用，也被世界主流浏览器（Chrome、IE、Firefox、Safari、Opera）支持。

虽然JavaScript与Java这门语言不管是在名字上，或是在语法上都有很多相似性，但这两门编程语言从设计之初就有很大的不同，JavaScript的语言设计主要受到了Self（一种基于原型的编程语言）和Scheme（一门函数式编程语言）的影响。在语法结构上它又与C语言有很多相似（例如if条件语句、switch语句、while循环、do-while循环等）。

在客户端，JavaScript在传统意义上被实现为一种解释语言，但在最近，它已经可以被即时编译（JIT）执行。随着最新的HTML5和CSS3语言标准的推行它还可用于游戏、桌面和移动应用程序的开发和在服务器端网络环境运行，如Node.js。

## 历史与特点

### 肇始于网景

1995年，网景招募了布兰登·艾克，目标是把Scheme语言嵌入到Netscape Navigator浏览器当中。但更早之前，网景已经跟昇阳合作在Netscape Navigator中支持Java，这时网景内部产生激烈的争论。后来网景决定发明一种与Java搭配使用的辅助脚本语言并且语法上有些类似，这个决策导致排除了采用现有的语言，例如Perl、Python、Tcl或Scheme。为了在其他竞争提案中捍卫JavaScript这个想法，公司需要有一个可以运作的原型。艾克在1995年5月仅花了十天时间就把原型设计出来了

1995年9月在Netscape Navigator 2.0的Beta版中改名为LiveScript，同年12月，Netscape Navigator 2.0 Beta 3中部署时被重命名为JavaScript，当时网景公司与昇阳电脑公司组成的开发联盟为了让这门语言搭上Java这个编程语言“热词”，因此将其临时改名为JavaScript，日后这成为大众对这门语言有诸多误解的原因之一。

### 微软采纳

JavaScript推出后在浏览器上大获成功，微软公司在不久后就为Internet Explorer 3浏览器推出了JScript，以与处于市场领导地位的网景产品同台竞争。JScript也是一种JavaScript实现，这两个JavaScript语言版本在浏览器端共存意味着语言标准化的缺失，发展初期，JavaScript的标准并未确定，同期有网景的JavaScript，微软的JScript双峰并峙。除此之外，微软也在网页技术上加入了不少专属对象，使不少网页使用非微软平台及浏览器无法正常显示，导致在浏览器大战期间网页设计者通常会把“用Netscape可达到最佳效果”或“用IE可达到最佳效果”的标志放在主页。随着Internet Explorer 4的发布，微软引入了动态HTML的概念，但语言实现和不同专有化的文档对象模型的差异仍然存在，成为网络上普及使用JavaScript的阻碍。

### 标准化

1996年11月，网景正式向ECMA（欧洲计算机制造商协会）提交语言标准。1997年6月，ECMA以JavaScript语言为基础制定了ECMAScript标准规范ECMA-262。JavaScript成为了ECMAScript最著名的实现之一。除此之外，ActionScript和JScript也都是ECMAScript规范的实现语言。尽管JavaScript作为给非程序人员的脚本语言，而非作为给程序人员的脚本语言来推广和宣传，但是JavaScript具有非常丰富的特性。

### 概论

一般来说，完整的JavaScript包括以下几个部分：

- ECMAScript，描述了该语言的语法和基本对象
- 文档对象模型（DOM），描述处理网页内容的方法和接口
- 浏览器对象模型（BOM），描述与浏览器进行交互的方法和接口

JavaScript的基本特点如下：

- 是一种解释性脚本语言（代码不进行预编译）。
- 主要用来向HTML页面添加交互行为。
- 可以直接嵌入HTML页面，但写成单独的js文件有利于结构和行为的分离。

JavaScript常用来完成以下任务：

- 嵌入动态文本于HTML页面
- 对浏览器事件作出响应
- 读写HTML元素
- 在数据被提交到服务器之前验证数据
- 检测访客的浏览器信息
- 控制cookies，包括创建和修改等
