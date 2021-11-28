var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

const session = {}

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

  if (path === '/') {
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    let cookie = request.headers['cookie'] // sessionid=????
    let login = false
    if (cookie) {
      let sessionId = cookie.split('=')[1]
      if (session[sessionId]?.login) {
        login = true
      }
    }
    let html = `
      <!DOCTYPE html>
      <html>
        <head>
          <link rel="stylesheet" href="/style">
        </head>
        <body>
          <h1>__hi__</h1>
          <form action="/login" method="get">
            <input type="password" name="password">
            <input type="submit">
          </form>
          <script src="/script"></script>
        </body>
      </html>
    `
    if (login) {
      html = html.replace('__hi__', '你好，登录用户')
    } else {
      html = html.replace('__hi__', '你好')
    }
    response.write(html)
    response.end()
  } else if (path === '/style?random=2') {
    // let ifNoneMatch = request.headers['if-none-match']
    // let css = 'h1{color: red;}'
    // let etag = md5(css)
    // if (ifNoneMatch === etag) {
    //   response.statusCode = 304
    //   response.end()
    // } else {
    //   response.setHeader('Content-Type', 'text/css; charset=utf-8')
    //   // response.setHeader('Cache-Control', 'max-age=10')
    //   response.setHeader('Etag', etag)
    //   response.write(css)
    //   response.end()
    // }
    response.setHeader('Content-Type', 'text/css; charset=utf-8')
    response.write('h1{color: red;}')
    response.end()
  } else if (path === '/script') {
    response.setHeader('Content-Type', 'application/javascript; charset=utf-8')
    response.write(`
      console.log('我是 JS')
    `)
    response.end()
  } else if (path === '/login') {
    response.setHeader('Content-Type', 'text/plain; charset=utf-8')
    if (query.password === 'frank') {
      let random = Math.random()
      response.setHeader('Set-Cookie', `sessionid=${random}`)
      session[random] = {
        login: true
      }
    }
    response.end()
  } else if (path === '/logout') {
    let d = new Date(0)
    response.setHeader('Set-Cookie', `login=true; Expires=${d.toGMTString()}`)
    response.end()
  } else {
    response.setHeader('Content-Type', 'text/plain; charset=utf-8')
    response.end('你请求的资源不存在')
  }

  // 可以不加后缀 因为已经通过content-type指定了响应类型
  // if (path === '/main.css') {
  //   response.setHeader('Content-Type', 'text/css; charset=utf-8')
  //   response.end('h1{color: red;}')
  // } else if (path === '/1.js') {
  //   response.setHeader('Content-Type', 'application/javascript; charset=utf-8')
  //   response.end('alert(1)')
  // } else if (path === '/2.html') {
  //   response.setHeader('Content-Type', 'text/html; charset=utf-8')
  //   response.end(`
  //     <!DOCTYPE html>
  //     <head>
  //       <link rel="stylesheet" href="/main.css">
  //     </head>
  //     <h1>你好</h1>
  //     <script src="/1.js"></script>
  //     <script>
  //       let request = new XMLHttpRequest()
  //       request.open('GET', '/3.json')
  //       request.onload = function() {
  //         console.log(request.responseText)
  //         console.log(JSON.parse(request.responseText))
  //       }
  //       request.send()
  //     </script>
  //   `)
  // } else if (path === '/3.json') {
  //   response.setHeader('Content-Type', 'application/json; charset=utf-8')
  //   response.end('{"name": "frank"}')
  // } else if (path === '/4.jsonp') {
  //   response.setHeader('Content-Type', 'application/javascript; charset=utf-8')
  //   response.end('alert({"name":"frank"})')
  // }

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

/*********** Content-Type 类型 ***************/
// CSS text/css
// JS text/javascript application/javascript
// HTML text/html
// XML text/xml application/xml text/xml+html
// JSON text/json application/json
// PNG image/png
// JPEG image/jpeg
// GIF image/gif
