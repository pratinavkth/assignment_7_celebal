const mongnoose = require("mongoose");

const Users = mongnoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:(value)=>{
                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return value.match(re);
            },
            message:"Please enter a valid Email",
        },
    },
    password:{
        type:String,
        required:true,
        validate:{
            validator:(value)=>{
                return value.length>7;
            },
            message:"Your passwors is less than 7",
        },
        },
});

module.exports = mongnoose.model("Users",Users);

