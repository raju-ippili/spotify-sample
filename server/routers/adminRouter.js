const express=require('express');
const { adminLogin, getUsers,updateProfile,deleteUser } = require('../controllers/adminContoller');
const router=express.Router()

router.get("/users",adminLogin)
router.get("/users/:id",getUsers)
router.put("/users/:id",updateProfile)
router.delete("/users/:id",deleteUser)
router.post("/songs",(req,res)=>{})
router.put("/songs/:id",(req,res)=>{})
router.delete("/songs/:id",(req,res)=>{})
router.get("/songs/:id",(req,res)=>{})
router.get('/palylist',(req,res)=>{})
router.get('/palylist/:id',(req,res)=>{})

module.exports=router