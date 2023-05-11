const express = require('express');

const router = express.Router();

const {signup, signin, forgotPassword,resetPassword} = require("../controllers/auth");

router.get("/",(req,res)=>{
    console.log("ASDASD");
    return res.json({
        data:"hello world from the api",
    });
});

 router.post("/signup",signup); 
 router.post("/signin",signin);
 router.post("/forgot-password",forgotPassword);
 router.post("/reset-password",resetPassword);

module.exports =  router;