import express from "express";
import dbConnect from "./config/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import routerAuth from "./routes/auth.js";
const app=express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
dbConnect();
const PORT=process.env.PORT || 3000;

app.use("/api/auth",routerAuth);

app.get("/",(req,res)=>{
  res.send("Server running ");
})

app.listen(PORT,()=>{
  console.log("server is running at port 3000");
})