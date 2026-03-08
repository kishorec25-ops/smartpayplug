const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

let powerStatus = false;

app.get("/", (req,res)=>{
  res.send("SmartPay Plug API running");
});

app.get("/pay",(req,res)=>{
  powerStatus = true;
  res.json({message:"Payment successful. Power enabled"});
});

app.get("/status",(req,res)=>{
  res.json({power:powerStatus});
});

app.listen(PORT,()=>{
  console.log("Server running");
});

