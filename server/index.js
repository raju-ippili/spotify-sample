const express=require('express')
const app=express();
app.use(express.json())
require('dotenv').config();
const {ConnectDB}=require('./utils/ConnectDB')

const adminRoute=require('./routers/adminRouter');
const userRoute=require('./routers/userRouter');

ConnectDB();
app.use('/api/admin',adminRoute);
app.use('/api/user',userRoute)

app.listen(process.env.PORT,()=>{
    console.log(`app is running at ${process.env.DEV_URL}:${process.env.PORT}`)
});