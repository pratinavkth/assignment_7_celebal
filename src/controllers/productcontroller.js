const products = require("../models/products");

exports.createProduct= async(req,res)=>{
    try {
        const {name,details,price}= req.body;
        let product = new products({
            name,
            details,
            price
        });
        await product.save();
        return res.status(200).json({msg:"Product Registered Succesfully"});

    } catch (error) {
        console.error(error);
        return res.status(500).json({msg:"There issue while creating the product",error});
        
    }
}

exports.getProduct = async(req,res)=>{
    try {
        // const{product_id}= req.body;
        const product = await products.findById(req.params.id);
        if(!product){
            return res.status(400).json({msg:"There is no product with this product Id"});
        }
        // const particular_product = await products.findOne(product);
        return res.status(200).json(product);


    } catch (error) {
        res.status(500).json({msg:"There is issue while getting the single product",error});
        
    }
}

exports.getallProduct = async(req,res)=>{
    try {
        const Products = await products.find();
        res.status(200).json(Products);
        
    } catch (error) {
        return res.status(500).json({msg:"There is issue while fetching the all the products",error});
        
    }
}

exports.updateProduct = async(req,res)=>{
    try {
        const {name,price, details} = req.body;
        // const product_id = await products.findByIdAndUpdate(req.params.id);
        const updateProduct = await products.findByIdAndUpdate(
            req.params.id,
            {
                name,
            price,
            details},
            {new:true},
        );
        if(!updateProduct){
            return res.status(400).json({msg:"There is error in updating",products:updateProduct});

        }
        return res.status(200).json(updateProduct);
    } catch (error) {
        console.error(error);
        return res.status(500).json({msg:"There is issue while updating the Products",error});
    }
}

exports.deleteProduct = async(req,res)=>{
    try {
        const product = products.findById(req.params.id);
        // const productsfind = products.findOne({product_id});
        if(!product){
            return res.status(400).json({msg:"Product with this product id is not there"});
        }
        const deleteingtheProduct  = await products.findByIdAndDelete(req.params.id);
        return res.status(200).json({msg:"Product is sucessfully deleted",deleteingtheProduct}); 
    } catch (error) {
        return res.status(500).json({msg:"There is issue while deleting the product",error});
    }
}
