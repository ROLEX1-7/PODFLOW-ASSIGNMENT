const express = require("express");


const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Hello podflow!!");
})

app.get("/prajwal",(req,res)=>{
    res.send("Hello SHETTY!!");
    console.log("hi")
})

app.listen(PORT ,()=>{
    console.log("listening on port 3000");
})