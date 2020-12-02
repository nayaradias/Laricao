const express = require("express");
const routes = express.Router();
const multer = require("./config/multer");
const authController = require("./controllers/authController");
const companyController = require("./controllers/companyController");
const foodController = require("./controllers/foodController");
const auth = require("./middlewares/auth");

//Routes User
routes.post("/user/store", authController.store);
routes.post("/user/login", authController.login);
routes.post("/user/edit", authController.edit);
routes.get("/user/list", authController.list);
routes.get("/user/list/favorites", authController.listFavorites);
routes.post("/user/list/requests", authController.listRequests);

routes.post("/user/list/favorites/search", authController.search);
routes.put("/user/list/favorites/edit", auth, authController.editFavorites);

routes.post(
  "/user/image",
  auth,
  multer.any("image"),
  authController.uploadImage
);

//Routes Company
routes.post("/company/store", companyController.store);
routes.post("/company/login", companyController.login);
routes.get("/company/list", companyController.list);
routes.get("/company/listFavorites", companyController.listFavorites);
routes.post(
  "/company/image",
  auth,
  multer.any("image"),
  companyController.uploadImage
);

//Routes Food
routes.post("/food/store", auth, foodController.store);
routes.get("/food/list", foodController.list);
routes.post("/food/list/request", foodController.listById);
routes.get("/food/listByCategory", foodController.listByCategory);
routes.put(
  "/food/image",
  multer.any("image"),
  foodController.uploadImage
);

module.exports = routes;
