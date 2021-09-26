const routes = require('express').Router()

const SessionController = require('./controllers/sessionController')

const authMiddleware = require('./middlewares/auth')

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.get("/dashboard", (req, res) => {
    return res.status(200).send();
  });

module.exports = routes