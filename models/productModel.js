const products = require('../data/products')

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

function findById(id) {
  const product = products.filter((p) => {
    if(p.id === id) return p
  })
  return new Promise((resolve, reject) => {
    resolve(product)
  })
}

module.exports = {
  findAll,
  findById
}