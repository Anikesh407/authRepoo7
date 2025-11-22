import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer"
  }
})

const User = mongoose.model("User", UserSchema);
export default User;