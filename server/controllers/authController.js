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

exports.userLogin=async(req,res)=>{
    const {email,pass}=req.body;
    try {
        const validUser=await prisma.user.findFirst({where:{email:email}})
        if(!validUser){
            return res.status(404).send({status:false,message:"user not found"});
        }
        const isMatch=await bcrypt.compare(pass,validUser.pass);
        if(!isMatch){
             return res.status(404).send({status:false,message:"user not found"});
        }

        const token=jwt.sign(
            {id:validUser.id,role:validUser.role},
            process.env.JWT_SECRET,
            {expiresIn:"6h"}
        );
        console.log(token)
        res.status(200).send({status:true,message:token,role:validUser.role})
    } catch (error) {
        console.log(error);
        res.status(500).send({status:true,message:error.message})
    }
}