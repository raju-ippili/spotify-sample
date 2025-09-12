const express=require('express');
const { registerUser,userLogin,getProfile,updateProfile,deleteUser} = require('../controllers/authController');
const router=express.Router()

router.post("/register",registerUser)
router.post("/login",userLogin)
router.get("/profile/:id",getProfile)
router.put("/profile/:id",updateProfile)
router.delete("/:id",deleteUser)
router.get("/songs",(req,res)=>{})
router.get("/songs/:id",(req,res)=>{})
router.post("/playlist",(req,res)=>{})
router.put('/palylist/:id',(req,res)=>{})
router.delete('/palylist/:id',(req,res)=>{})

module.exports=router