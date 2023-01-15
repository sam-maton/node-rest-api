const { findAll, findById, create } = require('../models/userModel')

// Get all users
// GET /api/users
async function getUsers(req, res) {
  const users = await findAll()
  try {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(users))
  } catch (error) {
    console.log()
  }
}

// Get a single user
// GET /api/users/:id
async function getUser(req, res, id) {
  const user = await findById(id)

  try {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(user))
  } catch (error) {
    console.log()
  }
}

// Create a new user
// GET /api/users/:id
async function createUser(req, res) {
  try {
    let body = ""

    req.on('data', chunk => {
      body = `${chunk}`
      console.log(body)
    })

    const newUser = await create(body)

    res.writeHead(201, {'Content-Type': 'application/json'})
    return res.end(newUser)
  } catch (error) {
    console.log()
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser
}