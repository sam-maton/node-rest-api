const users = require('../data/users.json')

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

module.exports = {
  findAll,
  findById
}