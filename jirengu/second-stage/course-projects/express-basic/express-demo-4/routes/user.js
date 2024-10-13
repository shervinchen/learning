const express = require("express");

const router = express.Router()

// app.get('/users', () => {})
// app.get('/users/:id', () => {})
// app.get('/users/:id/edit', () => {})

router.get('/', (request, response, next) => {
  response.send('/users')
})
router.get('/:id', (request, response, next) => {
  response.send('/users/:id')
})
router.get('/:id/edit', (request, response, next) => {
  response.send('/users/:id/edit')
})

module.exports = router