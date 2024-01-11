const { Router } = require("express");
const multer = require("multer");

const uploadConfig = require("../configs/upload");
const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const userRoutes = Router();
const upload = multer(uploadConfig.MULTER);
const userController = new UsersController()

userRoutes.post("/", userController.create);
userRoutes.put("/", ensureAuthenticated, userController.update);
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (request, response) => {
  console.log(request.file.filename);
  return response.json();
});



module.exports = userRoutes;