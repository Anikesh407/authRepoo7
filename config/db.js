import mongoose from "mongoose";

const  dbConnect= async ()=>{
  try {
    const URL=process.env.DB_URL;
    await mongoose.connect(URL,{dbName:"oAuth"});
    console.log("Db connected Successfully");

  } catch (error) {
    console.log(error);
  }
}

export default dbConnect;