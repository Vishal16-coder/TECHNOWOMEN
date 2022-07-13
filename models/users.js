const mongoose = require("mongoose");
const bcrypt= require("bcryptjs");
const jwt= require("jsonwebtoken");
//const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    username : { 
        type:String,
        required:true
    },

    email : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    cpassword : {
        type:String,
        required:true
    },
    image :{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    messages:[
        {
            message:{
                type:String,
                required:true
            }
        }

    ],
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
});
//userSchema.plugin(passportLocalMongoose);
//password hashing 

userSchema.pre('save', async function(next){
      if(this.isModified('password')){
         this.password=await bcrypt.hash(this.password, 12);
         this.cpassword=await bcrypt.hash(this.cpassword, 12);
      }
      next();
});


//we are generating token for user
userSchema.methods.generateAuthToken =async function() {
     try{
       let token=jwt.sign({_id: this._id }, process.env.SECRET_KEY);
       this.tokens=this.tokens.concat({token: token});
       await this.save();
       return token;
     }catch(err){
        console.log(err);
     }
};

//storing the idea
userSchema.methods.addMessage =async function(message) {
    try{
      this.messages=this.messages.concat({message});
      await this.save();
      return this.messages;
    }catch(err){
       console.log(err);
    }
};

const User = mongoose.model("User",userSchema); 
module.exports=User;
