const userModel = require("../models/user.model")
const express = require("express")
const authRouter = express.Router();
const authController = require("../controllers/authController")
const authMiddleware = require("../middleware/authMIddleware")

//register routes
// @api-localhost:3000/api/auth/register
authRouter.post("/register",authController.registerController)

//login routes
//@api - localhost:3000/api/auth/register
authRouter.post("/login",authController.loginController)

//get-me routes
//@api- localhost:300/api/auth/get-me
authRouter.get("/get-me",authMiddleware,authController.getmeController)

module.exports=authRouter