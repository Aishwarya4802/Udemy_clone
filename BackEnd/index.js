let express = require('express')
let app=    express()
let signup=require('./Routers/userRoutes')
let bcrypt=  require('bcryptjs')
let jwt=   require('jsonwebtoken')
app.use(express.json())
let cors= require('cors')
app.use(cors())
const userModel = require('./Models/userModel');
let mongoose=  require('mongoose');
let env = require("dotenv");
env.config();

 mongoose.connect(process.env.DataBase).then(()=>{
   console.log('database connectedd');
 }).catch((err)=>{
    console.log("DB Error : ",err);
     
 })
 app.use('/api',signup)

 app.get('/Student',(req,res)=>{
   res.send('I am a student')
})

 app.listen(5000,()=>{
    console.log('server running on port no 5000');
})