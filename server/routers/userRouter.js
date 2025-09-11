const express=require('express');
const router=express.Router()

router.post("/register",(req,res)=>{})
router.post("/login",(req,res)=>{})
router.get("/profile/:id",(req,res)=>{})
router.put("/profile/:id",(req,res)=>{})
router.delete("/user/:id",(req,res)=>{})
router.get("/songs",(req,res)=>{})
router.get("/songs/:id",(req,res)=>{})
router.post("/playlist",(req,res)=>{})
router.put('/palylist/:id',(req,res)=>{})
router.delete('/palylist/:id',(req,res)=>{})

module.exports=router