const mongoose = require("mongoose");
let userSchema=   mongoose.Schema({
   
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['Admin','Student','Instructor'],
        default:'user'
       }

})

 let User=  mongoose.model('user',userSchema)
 module.exports=User
