const {prisma} =require('../utils/ConnectDB');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs')
exports.registerUser=async (req,res)=>{
    const{name,email,pass}=req.body;
    const hassPassword= await bcrypt.hash(pass,10)
    try {
        const userData=await prisma.user.create({data:{name,email,password:hassPassword}});
        res.status(200).send({status:true,message:userData});
    } catch (err) {
        console.log(err.message);
        res.status(500).send({status:false,message:err.message});
    }
}