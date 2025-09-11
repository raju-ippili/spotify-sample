const express=require('express');
const router=express.Router()

router.get("/users",(req,res)=>{})
router.get("/users/:id",(req,res)=>{})
router.put("/users/:id",(req,res)=>{})
router.delete("/users/:id",(req,res)=>{})
router.post("/songs",(req,res)=>{})
router.put("/songs/:id",(req,res)=>{})
router.delete("/songs/:id",(req,res)=>{})
router.get("/songs/:id",(req,res)=>{})
router.get('/palylist',(req,res)=>{})
router.get('/palylist/:id',(req,res)=>{})

module.exports=router