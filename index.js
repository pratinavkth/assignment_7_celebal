const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const indexRoute = require("./src/routes/indexRoute");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/index",indexRoute);

mongoose.connect(process.env.DATAVASE_URL,{
     useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(process.env.PORT,()=>{
    console.log("Server is running on prot 3000");
});


