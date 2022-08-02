const express = require("express");

const app = express();
const connect = require("./configs/db");

app.listen(2345, async() => {
    try{
        await connect()
        console.log("Connected to mongodb")
    }
    catch(err){
        console.log(err.message)
    }
})