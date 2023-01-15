const Product = require('../models/productModel')

// Get all products
// GET /api/products
async function getProducts(req, res) {
  const products = await Product.findAll()
  try {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(products))
  } catch (error) {
    console.log()
  }
}

// Get a single product
// GET /api/products/:id
async function getProduct(req, res, id) {
  const product = await Product.findById(id)

  try {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(product))
  } catch (error) {
    console.log()
  }
}

async function createProduct(req, res) {
  try {
    const product = {
      title: 'Test Product',
      description: 'This is my product',
      price: 100
    }

    const newProduct = await Product.create(product)

    res.writeHead(201, {'Content-Type': 'application/json'})
    return res.end(JSON.stringify(newProduct))
  } catch (error) {
    console.log()
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct
}