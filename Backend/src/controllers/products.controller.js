const express = require("express");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

require("dotenv").config()

const router = express.Router();

router.post("", async(req, res) => {
    try{

        if(!req.headers.token){
            return res.send("Please give the token")
        }
    
        const decode = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);
        console.log("decode", decode)
        res.send(decode)
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})