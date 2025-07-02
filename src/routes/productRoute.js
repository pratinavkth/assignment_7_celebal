const express = require("express");
const authCheck = require("../middelwares/authMiddelware");
const productController = require("../controllers/productcontroller");
const productRouter = express.Router();

productRouter.post("/Register_product",authCheck,productController.createProduct);
productRouter.get("/get_product/:id",authCheck,productController.getProduct);
productRouter.get("/getAll_product",authCheck,productController.getallProduct);
productRouter.put("/update_product/:id",authCheck,productController.updateProduct);
productRouter.delete("/delete_product/:id",authCheck,productController.deleteProduct);

module.exports = productRouter;