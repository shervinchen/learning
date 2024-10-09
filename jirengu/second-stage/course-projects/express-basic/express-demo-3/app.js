const express = require("express");
const logger = require("./logger");

const app = express();
const port = 3000;

app.use(logger("dev"));

app.use((request, response, next) => {
  response.write("1");
  next();
});

app.use((request, response, next) => {
  response.write("2");
  if (true) {
    next("not login");
  } else {
    next();
  }
});

app.use((request, response, next) => {
  response.write("3");
  next();
});

app.use((error, request, response, next) => {
  console.log(error)
  next(error)
})

app.use((error, request, response, next) => {
  if (response.headersSent) {
    return next(error);
  }
  response.status(500);
  response.send(error);
  // response.write(error)
  // response.end()
  // next()
});

// app.use((request, response, next) => {
//   if (request.path === '/' && request.method === 'get') {
//     response.send('root path')
//   }
//   next()
// })

// app.get('/xxx', (request, response, next) => {
//   response.send('xxx')
//   next()
// })

// app.route('/yyy').all(() => {}).get((request, response, next) => {
//   response.send('yyy')
//   next()
// }).post(() => {})

// app.use((request, response, next) => {
//   if (request.path === '/aaa') {
//     response.send('aaa path')
//   }
//   next()
// })

// app.use((request, response, next) => {
//   if (request.path === '/bbb') {
//     response.send('bbb path')
//   }
//   next()
// })

// app.use((request, response, next) => {
//   // console.log(request.url)
//   response.write('hi')
//   next()
// })

// app.use((request, response, next) => {
//   console.log(2)
//   response.write('hi')
//   next()
// })

// app.use((request, response, next) => {
//   response.end()
//   next()
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
