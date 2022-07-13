const jwt =require("jsonwebtoken");
const User=require('../models/users');

const authenticate= async (req,res,next)=>{
      try{
         const token=req.cookies.jwtoken;//getting token from cookies
         const verifyToken=jwt.verify(token, process.env.SECRET_KEY);//verifying token

         const rootUser= await User.findOne({_id: verifyToken._id,"tokens.token":token});
         if(!rootUser){
            throw new Error('Users Not found')
         }
         req.token=token;
         req.rootUser=rootUser;
         req.userId= rootUser._id;
         next();
      }catch(err){
          res.status(401).send('unauthorised token provided');
          console.log(err);
      }
}
module.exports=authenticate;