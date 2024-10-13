const test = (request, response, next) => {
  response.render('test', {
    pageTitle: request.app.locals.title
  })
}

module.exports = test;