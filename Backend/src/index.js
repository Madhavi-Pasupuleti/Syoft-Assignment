const express = require("express");
const app = express();
app.use(express.json())

const connect = require("./configs/db");
const {register, login} = require("./controllers/auth.controller")

app.post("/register", register)
app.post("/login", login)
app

app.listen(2345, async() => {
    try{
        await connect()
        console.log("Connected to mongodb")
    }
    catch(err){
        console.log(err.message)
    }
})