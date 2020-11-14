const express = require('express');
const routes = express.Router();
const multer = require('./config/multer');
const authController = require('./controllers/authController');
const companyController = require('./controllers/companyController');
const auth = require('./middlewares/auth');

//Rooutes User
routes.post('/user/store',authController.store);
routes.post('/user/login',authController.login);
routes.post('/user/image',auth, multer.single('image'), authController.uploadImage);

//Rooutes Company
routes.post('/company/store',companyController.store);
routes.post('/company/image', multer.single('image'), companyController.uploadImage);

module.exports = routes;