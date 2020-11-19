const express = require('express');
const routes = express.Router();
const multer = require('./config/multer');
const authController = require('./controllers/authController');
const companyController = require('./controllers/companyController');
const foodController = require('./controllers/foodController');
const auth = require('./middlewares/auth');

//Rooutes User
routes.post('/user/store', authController.store);
routes.post('/user/login', authController.login);
routes.post('/user/image', auth, multer.single('image'), authController.uploadImage);

//Rooutes Company
routes.post('/company/store', companyController.store);
routes.post('/company/login', companyController.login);
routes.post('/company/image', auth, multer.single('image'), companyController.uploadImage);

//Routes Food
routes.post('/food/store', auth, foodController.store);
routes.post('/food/image', auth, multer.single('image'), foodController.uploadImage);

module.exports = routes;