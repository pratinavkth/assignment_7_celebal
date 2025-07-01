const jwt = require("jsonwebtoken");
const dotenv =require("dotenv");
dotenv.config();
const authCheck = async(req,res,next)=>{
    try {
        const authHeader = req.headers['x-auth-token'];
        let token;
        if(authHeader.startsWith("Bearer ")){
            token = authHeader.split(" ")[1];
        }else{
            token = authHeader;
        }
        console.log(token);

        if(!token){
            return res.status(401).send("Enter a valid token");
        }
        const verified = jwt.verify(token,process.env.JWT_SECRET);
        if(!verified){
            return res.status(401).send("Token is not verified");
        }
        req.user = {
            id:verified.id,
        };
        req.token = token;
        next();




    } catch (error) {
        console.error(error);
        return res.status(500).json({msg:"There is the issue while Passing throught the middelware",error});
    }
}

module.exports =authCheck;