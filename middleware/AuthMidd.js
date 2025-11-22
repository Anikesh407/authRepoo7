import User from "../model/user.js";
import jwt from "jsonwebtoken";
export const protect= async (req,res,next)=>{
const token=req.cookies.token;
if(!token){
  return res.json({
    success:false,
    message:"token not found"
  })
}
try {
  const payload=  jwt.verify(token,process.env.JWT_SECRET);
if(!payload){
  return res.json({
    success:false,
    message:"token expired"
  })
}
req.user=payload;


next();
} catch (error) {
  return res.json({
    success:false,
    message:error.message
  })
}
};
