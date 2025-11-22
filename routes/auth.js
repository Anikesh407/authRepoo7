import express from "express";
import { UserCreate } from "../controller/register.js";
import { userLogin } from "../controller/login.js";
import { protect } from "../middleware/AuthMidd.js";
import { except } from "../controller/except.js";

const routerAuth = express.Router();

routerAuth.post("/register", UserCreate);
routerAuth.post("/login", userLogin);
routerAuth.get("/except", protect, except);

export default routerAuth;