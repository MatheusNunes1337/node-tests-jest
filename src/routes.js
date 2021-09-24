const routes = require('express').Router()

const SessionController = require('./controllers/sessionController')

//const { User } = require('./app/models')

/*
User.create({
    name: 'matheeus', 
    email: 'matheus1337@gmail.com',
    password_hash: '21872339283257'
})
*/

routes.post('/sessions', SessionController.store)



module.exports = routes