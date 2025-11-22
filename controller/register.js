import User from "../model/user.js";

import bcrypt from "bcrypt";
export const UserCreate = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;
    const hasPass =await bcrypt.hash(password, 10);
    await User.create({ name, email, role, password: hasPass });
    res.json({
      success: true,
      message: "user created Successfully"
    })
  } catch (error) {
    res.json({
      success:false,
      message:error.message
    })
    console.log(error.message);
  }
};

