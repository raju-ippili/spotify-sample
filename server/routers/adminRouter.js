const express=require('express');
const { adminLogin, getUsers,updateProfile,deleteUser,addSongs,getSongs,updateSong,deleteSong,getAllPlaylists,deletePlaylists} = require('../controllers/adminContoller');
const router=express.Router()

router.get("/users",adminLogin)
router.get("/users/:id",getUsers)
router.put("/users/:id",updateProfile)
router.delete("/users/:id",deleteUser)
router.post("/songs",addSongs)
router.put("/songs/:id",updateSong)
router.delete("/songs/:id",deleteSong)
router.get("/songs/:id",getSongs)
router.get('/playlist',getAllPlaylists)
router.delete('/playlist/:id',deletePlaylists)

module.exports=router