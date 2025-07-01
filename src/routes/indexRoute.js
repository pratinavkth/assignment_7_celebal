const express= require("express");
const authRoutes = require("./authRoute");
const productRoutes = require("./productRoute");
const indexRoute = express.Router();

indexRoute.use("/authRoute",authRoutes);
indexRoute.use("/productRoute",productRoutes);

module.exports = indexRoute;

