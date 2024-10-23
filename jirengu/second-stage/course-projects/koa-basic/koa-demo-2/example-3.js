const express = require('express')
const responseTime = require('response-time')

const app = express()
const port = 3000

app.use(responseTime())

// app.use((req, res, next) => {
//   const start = new Date()
//   res.locals.start = start
//   next()
// })

app.use((req, res, next) => {
  res.write('Hello World!')
  res.end()
  next()
})

// app.use((req, res, next) => {
//   const time = new Date().valueOf() - res.locals.start
//   console.log('time', time)
//   next()
// })

app.use((req, res, next) => {
  console.log(res.get('X-Response-Time'))
  next()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})