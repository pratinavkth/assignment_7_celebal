const users = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const emailExists =await users.findOne({email});
        if(emailExists){
            return res.status(401).json({msg:"Email is Already there please Register the "});
        }
        const hashedPassword =await bcrypt.hash(password,7);

        let user = new users({
            name,
            email,
            password:hashedPassword
        });

        await user.save();
        return res.status(200).json({msg:"User created Succesfully"})


    }catch(e){
        return res.status(500).json({msg:"there is issue while creating the user",e});

    }
}

exports.login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const emailExist = await users.findOne({email});

        if(!emailExist){
            return res.status(400).json({msg:"Email id is not registered"});
        }
        // const hashedPassword = await
        const comparePassword = await bcrypt.compare(password,emailExist.password);
        if(!comparePassword){
            return res.status(400).json({msg:"Password is not valid"});
        }
        const token = jwt.sign({id:emailExist._id},process.env.JWT_SECRET);
        console.log("Token :",token);
        res.json({token,user:{...emailExist.doc}});


    } catch (error) {
        return res.status(500).json({msg:"There is Issue while logging the Error"});
        
    }
}