const mongoose = require("mongoose");
const userModel = require("../models/userModels");
const {userVerify,login}=require('../dataVerifier/userData');

const createUser = async (req, res, next) => {
  try {
    const createPayload=req.body;
    const parsePayload=userVerify.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            message:"You have send the wrong inputs",
        })
        return;
    }

    const setUser = await userModel.create({
      name,
      email,
      password,
    });

    return res.status(200).json({
        staus:true,
        data:setUser,
    })

    
  } catch (error) {
    res.status(401).json({
      status: false,
      error: error.message,
    });
  }
};

const loginUser=async (req,res,next)=>{
    const createPayload=req.body;
    console.log(createPayload);
    const parsePayload=login.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            message:"You have send the wrong inputs",
        })
        return;
    }
    const user= await userModel.findOne({email:createPayload.email});
    if(user){
        return res.status(200).json({
            status:true,
            user:user,
        })
    }else{
        return res.status(401).json({
            status:false,
            message:"user not found",
        })
    }

}

module.exports={
    createUser,
    loginUser,
}