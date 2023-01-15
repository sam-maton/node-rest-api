const http = require('http')
const { getProducts, getProduct, createProduct } = require('./controllers/productController')
const { getUsers, getUser, createUser } = require('./controllers/userController')

const server = http.createServer((req, res) => {
  if (req.url.includes('/api/products')) {
    if (req.url === '/api/products' && req.method === 'GET') {
      getProducts(req, res)
    } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET') {
      const id = req.url.split('/')[3]
      getProduct(req, res, id)
    } else if (req.url === '/api/products' && req.method === 'POST') {
      createProduct(req, res)
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: 'route not found' }))
    }
  }

  if (req.url.includes('/api/users')) {
    if (req.url === '/api/users' && req.method === 'GET'){
      getUsers(req, res)
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
      const id = req.url.split('/')[3]
      getUser(req, res, id)
    } else if (req.url === '/api/users' && req.method === 'POST') {
      createUser(req, res)
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: 'route not found' }))
    }
  }

})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })