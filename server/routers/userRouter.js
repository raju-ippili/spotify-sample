const express=require('express');
const { registerUser,userLogin,getProfile,updateProfile,deleteUser,getSongs,searchSong,createPlaylist,updatePlaylist,deletePlaylist} = require('../controllers/authController');
const router=express.Router()

router.post("/register",registerUser)
router.post("/login",userLogin)
router.get("/profile/:id",getProfile)
router.put("/profile/:id",updateProfile)
router.delete("/:id",deleteUser)
router.get("/songs",getSongs)
router.get("/songs/:id",searchSong)
router.post("/playlist",createPlaylist)
router.post('/playlist/addSongs',updatePlaylist)
router.delete('/playlist/:id',deletePlaylist)

module.exports=router