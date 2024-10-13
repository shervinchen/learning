const express = require("express");
const test = require("./test");
const app = express();
const user = require('./routes/user')

const port = 3000;

app.set('case sensitive routing', true)
app.set('views', 'src')
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.locals.title = 'My website'

app.use(express.json())
// app.use(express.static('public'))
// app.use(express.urlencoded())
app.use(test)

app.use('/users', user)

app.get('/users/:id', (request, response, next) => {
  // console.log(request.params)
  // console.log(request.param('name'))
  // console.log(request.query)
  // console.log(request.xhr)
  // console.log(request.acceptsLanguages('zh'))
  response.set('X-Frank', 'yes')
  response.append('X-Frank', 'yes')
  response.status(401)
  response.send('hi')
  next()
})

app.get('/style.css', (request, response, next) => {
  response.send('style.css')
})

// app.get('/test', (request, response, next) => {
//   response.render('test', {
//     pageTitle: app.locals.title
//   })
// })

app.post('/test', (request, response, next) => {
  response.send('post /test')
})

app.put('/test', (request, response, next) => {
  response.send('put /test')
})

app.delete('/test', (request, response, next) => {
  response.send('delete /test')
})

app.use((request, response, next) => {
  response.send("hi");
  console.log(request.body)
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});