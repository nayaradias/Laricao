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
routes.post('/user/image', auth, multer.any('image'), authController.uploadImage);

//Routes Company
routes.post('/company/store', companyController.store);
routes.post('/company/login', companyController.login);
routes.get('/company/list',companyController.list);
routes.post('/company/image', auth, multer.any('image'), companyController.uploadImage);

//Routes Food
routes.post('/food/store', auth, foodController.store);
routes.get('/food/list', foodController.list);
routes.get('/food/listByCategory', foodController.listByCategory);
routes.post('/food/image', auth, multer.any('image'), foodController.uploadImage);

module.exports = routes;