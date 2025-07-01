const express = require("express");
const authCheck = require("../middelwares/authMiddelware");
const productController = require("../controllers/productcontroller");
const productRouter = express.Router();

productRouter.post("/Register_product",authCheck,productController.createProduct);
productRouter.post("/get_product",authCheck,productController.getProduct);
productRouter.post("/getAll_product",authCheck,productController.getallProduct);
productRouter.post("/update_product",authCheck,productController.updateProduct);
productRouter.post("/delete_product",authCheck,productController.deleteProduct);

module.exports = productRouter;