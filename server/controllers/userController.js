const mongoose = require("mongoose");
const userModel = require("../models/userModels");
const {userVerify}=require('../dataVerifier/userData');

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const createPayload=req.body;
    const parsePayload=userVerify.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            message:"You have send the wrond inputs",
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

module.exports={
    createUser,
}