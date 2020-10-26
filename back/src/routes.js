const express = require('express');
const routes = express.Router();
const authController = require('./controllers/authController');
const auth = require('./middlewares/auth');

routes.post('/user/store',authController.store);
routes.post('/user/login',authController.login);
module.exports = routes;