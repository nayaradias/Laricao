const express = require('express');
const routes = express.Router();
const multer = require('./config/multer');
const authController = require('./controllers/authController');
const auth = require('./middlewares/auth');

routes.post('/user/store',authController.store);
routes.post('/user/login',authController.login);


routes.post('/user/image',auth, multer.single('image'), authController.uploadImage);
module.exports = routes;