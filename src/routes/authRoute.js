const express = require("express");
const authRoutes = express.Router();
const authController = require("../controllers/authcontroller")
authRoutes.post("/signup",authController.register);
authRoutes.get("/login",authController.login);

module.exports = authRoutes;