export const except=(req,res)=>{
return res.json({
  success:true,
  message:"route protected"
})
}