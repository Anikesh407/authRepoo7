import User from "../model/user.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        success: false,
        message: "fill correctly",
      })
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "user not found"
      })
    }
    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return res.json({
        success: false,
        message: "wrong password"
      })
    }
    req.user = user;
    const data = {
      name: user.name,
      role: user.role,
      email: user.email

    }
    const SECRET = process.env.JWT_SECRET;
    const token = jwt.sign(data, SECRET, { expiresIn: "1d" });
    res.cookie("token", token, {
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      httpOnly: true,

    }).status(200).json({
      success: true,
      message: "user true"
    });

    console.log("login success");

  } catch (error) {
    res.json({
      success: false,
      message: error.message
    })
  }
};