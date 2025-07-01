const mongnoose = require("mongoose");

const ProductSchema = mongnoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    details:{
        type:String,
        required:true,
    },
});


module.exports = mongnoose.model("Products",ProductSchema);