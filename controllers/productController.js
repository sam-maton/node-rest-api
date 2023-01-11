const Product = require('../models/productModel')

async function getProducts(req, res) {
  const products = await Product.findAll()
  try {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(products))
  } catch (error) {
    console.log()
  }
}

async function getProduct(req, res, id) {
  const product = await Product.findById(id)

  try {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(product))
  } catch (error) {
    console.log()
  }
}

module.exports = {
  getProducts,
  getProduct
}