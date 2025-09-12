const prisma=require('../utils/ConnectDB')
require('dotenv').config();
exports.adminLogin=async(req,res)=>{
    try {
        const user= await prisma.user.findMany({
        select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true
      }
        })
    res.status(200).send({message:"found"})
    } catch (err) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}
exports.getUsers = async(req,res)=>{
    const {id}=req.params;
    try{
        const user = await prisma.user.findUnique({
            where:{id:id},
        });
        if(!user){
        res.status(400).send({message:"User not found"})
        }
        res.status(200).send(user);
    }catch(err){
        res.status(500).json({message:"server error",error:err.message});
    }
}