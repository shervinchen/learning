var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url
  var queryString = ''
  if (pathWithQuery.indexOf('?') >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf('?'))
  }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('含查询字符串的路径\n' + pathWithQuery)
  console.log('不含查询字符串的路径\n' + path)

  // 可以不加后缀 因为已经通过content-type指定了响应类型
  if (path === '/main.css') {
    response.setHeader('Content-Type', 'text/css; charset=utf-8')
    response.end('h1{color: red;}')
  } else if (path === '/1.js') {
    response.setHeader('Content-Type', 'application/javascript; charset=utf-8')
    response.end('alert(1)')
  } else if (path === '/2.html') {
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.end(`
      <DOCTYPE! html>
      <head>
        <link rel="stylesheet" href="/main.css">
      </head>
      <h1>你好</h1>
      <script src="/1.js"></script>
    `)
  } else if (path === '/3.json') {
    response.setHeader('Content-Type', 'application/json; charset=utf-8')
    response.end('{"name": "frank"}')
  } else if (path === '/4.jsonp') {
    response.setHeader('Content-Type', 'application/javascript; charset=utf-8')
    response.end('alert({"name":"frank"})')
  }

  // if (path === '/') {
  //   response.statusCode = 200
  //   response.setHeader('Content-Type', 'text/html;charset=utf-8')
  //   response.write(`二哈`)
  //   response.end()
  // } else if (path === '/x') {
  //   response.statusCode = 200
  //   response.setHeader('Content-Type', 'text/css;charset=utf-8')
  //   response.write(`body{color: red;}`)
  //   response.end()
  // } else {
  //   response.statusCode = 404
  //   response.setHeader('Content-Type', 'text/html;charset=utf-8')
  //   response.write(`你输入的路径不存在对应的内容`)
  //   response.end()
  // }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log(
  '监听 ' +
    port +
    ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' +
    port
)

// node server.js 8888
// curl -v http://127.0.0.1:8888
