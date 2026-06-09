const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")


//register Controller
const registerController = async(req,res)=>{
    const {username,email,name,bio,profilePicture,password} = req.body
    const user = await userModel.findOne({
        $or:[
            {
                username
            },
            {
                email
            }
        ]
    })
     if (user) {
        return res.status(409)
            .json({
                message: (user.email == email ? "Email already exists" : "Username already exists")
            })
    }

    const hash = await bcrypt.hash(password,10)
    const newUser = await userModel.create({
        username,
        email,
        password:hash,
        name,
        bio,
        profilePicture

    })
    const token = jwt.sign({
        id:newUser._id,
        username:newUser.username
    },process.env.JWT_SECRET_KEY,{expiresIn:"1d"})
    res.cookie("token",token,)

    return res.status(201).json({
        message:"user created successfully",
        user:{
            id:newUser._id,
            username:newUser.username,
            email:newUser.email,
            name:newUser.name,
            bio:newUser.bio,
            profilePicture:newUser.profilePicture
        },
        token
    })
}
//login controller
const loginController = async(req,res)=>{
    const {username,email,password} = req.body
    const user = await userModel.findOne({
        $or:[
            {
                username
            },
            {
                email
            }
        ]
    })
    if(!user){
        return res.status(404).json({
            message:"invalid credentials"
        })
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(401).json({
            message:"invalid credentials"
        })
    }
    const token = jwt.sign({
        id:user._id,
        username:user.username
    },process.env.JWT_SECRET_KEY,{expiresIn:"1d"})
    res.cookie("token",token,)

    return res.status(200).json({
        message:"user logged in successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            name:user.name,
            bio:user.bio,
            profilePicture:user.profilePicture
        },
        token
    })

}
//get me controller
const getmeController = async(req,res)=>{
    const username = req.user.username;
    const user = await userModel.findOne({ username });

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    return res.status(200).json({
        user
    });
}

module.exports = {
    registerController,
    loginController,
    getmeController
}