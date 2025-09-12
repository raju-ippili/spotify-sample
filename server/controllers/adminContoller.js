const {prisma} =require('../utils/ConnectDB');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const express = require('express');
require('dotenv').config()

exports.adminLogin = async (req, res) => {
  const { email, pass } = req.body;

  try {
    const validUser = await prisma.user.findFirst({
      where: { email:email, role: "ADMIN" },
    });

    if (!validUser) {
      return res.status(400).send({ message: "User doesn't exist" });
    }

    const validPass = await bcrypt.compare(pass, validUser.password);
    if (!validPass) {
      return res.status(400).send({ message: "Wrong password" });
    }

    const token = jwt.sign(
      { id: validUser.id, email: validUser.email, role: validUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "6h" }
    );

    res.status(200).send({ message: "Login successful", token });
  } catch (err) {
    res.status(500).send({ message: "Server error", error: err.message });
  }
};



exports.getUsers = async (req, res) => {
  const userId = req.params.id; 
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId }, 
    });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: "server error", error: err.message });
  }
};


exports.updateProfile=async(req,res)=>{
    const userId= req.params.id;
    const {name,email}=req.body;
    try {
        const userData=await prisma.user.update({where:{id:userId},data:{name,email}})
        res.status(200).send({status:true,message:userData})
    } catch (err) {
         res.status(400).send({status:false,message:err.message})
    }
}

exports.deleteUser=async(req,res)=>{
    const userId= req.params.id;
    try {
        const userData=await prisma.user.delete({where:{id:userId}})
        res.status(200).send({status:true,message:userData})
    } catch (err) {
         res.status(400).send({status:false,message:err.message})
    }
}


exports.addSongs=async(req,res)=>{
  const {title,artist,duration}=req.body;
      try {
        const songData=await prisma.song.create({data:{title,artist,duration}})
        res.status(200).send({status:true,message:songData})
    } catch (err) {
         res.status(400).send({status:false,message:err.message})
    }
}

exports.getSongs = async (req, res) => {
  const songId = req.params.id; 
  try {
    const user = await prisma.song.findUnique({
      where: { id: songId }, 
    });
    res.status(200).send({message:user});
  } catch (err) {
    res.status(500).send({ message: "server error", error: err.message });
  }
};

exports.updateSong=async(req,res)=>{
    const songId= req.params.id;
    const {title,artist,duration}=req.body;
    try {
        const songData=await prisma.song.update({where:{id:songId},data:{title,artist,duration}})
        res.status(200).send({status:true,message:songData})
    } catch (err) {
         res.status(400).send({status:false,message:err.message})
    }
}

exports.deleteSong=async(req,res)=>{
    const songId= req.params.id;
    try {
        const songData=await prisma.song.delete({where:{id:songId}})
        res.status(200).send({status:true,message:songData})
    } catch (err) {
         res.status(400).send({status:false,message:err.message})
    }
}