const products = require('../data/products')
const { v4: uuidv4 } = require('uuid')
const { writeDataToFile} = require('../utils')

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

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = {id: uuidv4(), ...product}
    products.push(newProduct)
    writeDataToFile('./data/products.json', products)

    resolve(newProduct)

  })
}

module.exports = {
  findAll,
  findById,
  create
}