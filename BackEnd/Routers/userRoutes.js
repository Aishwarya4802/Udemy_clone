let express=     require('express')
let User=require('../Models/userModel')
let router =express.Router()
let bcrypt=  require('bcryptjs')
let jwt=   require('jsonwebtoken')

router.post('/signup', async(req,res)=>{
    let user=req.body
    console.log(user,"hello");
    let data=await  User.findOne({email:user.email})
    // console.log(data,"hehehe");
    if(data){
        res.send('user already exists')
    }
    else{
       let updatedPass= await bcrypt.hash(user.password,10)
    //  let dbUser=   new User(req.body)
    console.log(updatedPass,"password updated");
     let dbUser=  new User({
        userName:user.userName,
        email:user.email,
        role:user.role||'Student',
        password:updatedPass
    })
       await  dbUser.save()
       res.send('signup successfull')
    }

})
router.post('/login', async(req,res)=>{
    let loginData=req.body
     let data=    await User.findOne({email:loginData.email})
     console.log(data,"datata");
     
     if(data){
                 let validPass= await bcrypt.compare(loginData.password,data.password)
                 if(validPass){
                       let token=jwt.sign({email:data.email,role:data.role},'jdsbfiuwhfiuwhfwuif',{expiresIn:'1h'})
                       console.log(token);
                       
                   return res.status(200).send(token)
                 }
                 else{
                    res.send('InvalidPssssss')
                 }
     }
     else{
        res.send('kindly create your account first')
     }


}
)

module.exports=router

