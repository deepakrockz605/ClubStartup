const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/api/*', { target: 'https://portfolio-api-node.herokuapp.com/api-docs/api' }))
}   