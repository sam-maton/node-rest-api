const users = require('../data/users.json')
const { v4: uuidv4 } = require('uuid')
const { writeDataToFile} = require('../utils')

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(users)
  })
}

function findById(id) {
  const user = users.filter((u) => {
    if(u.id == id) return u
  })
  return new Promise((resolve, reject) => {
    resolve(user)
  })
}

function create(user){
  return new Promise((resolve, reject) => {
    const newUser = {id: uuidv4(), ...user}
    users.push(newUser)
    writeDataToFile('./data/users.json', users)
    resolve(newUser)
  })
}

module.exports = {
  findAll,
  findById,
  create
}