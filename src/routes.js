const routes = require('express').Router()
const { User } = require('./app/models')

User.create({
    name: 'matheeus', 
    email: 'matheus1337@gmail.com',
    password_hash: '21872339283257'
})

module.exports = routes