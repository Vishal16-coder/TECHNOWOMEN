//import  express  from 'express';
//import { getPosts,createPost  } from '../controllers/posts.js';
const jwt= require("jsonwebtoken");
const express =require('express');
const router =express.Router();
const bcrypt= require("bcryptjs");
const authenticate=require("../middleware/authenticate");
const cookieParser =require("cookie-parser");
router.use(cookieParser()) 
require('../db/conn');
const User=require('../models/users');
const { json } = require("express");

//posting data to db
router.post("/register",async (req,res)=>{

    const { username, email, password, cpassword,image }=req.body;
    if(!username ||!email ||!password || !cpassword){
        return res.status(422).json({error:"filled the data properly"});
    }
    try{
        const userExist=await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
         }
         else if(password!=cpassword){
            return res.status(422).json({ error: "password not match" });
         }
         const user= new User({ username, email, password, cpassword ,image});
         //here we will do hashing of password before storing to DB
        await user.save();
        res.status(201).json({ message: "user registered successfuly" });

    }catch(err){
        console.log(err);
    }

});

router.post('/login',async (req,res)=>{

    try{
        let token;
         const { email, password }=req.body;
         if(!email || !password){
              res.status(400).json({ error: "Filled the data" });
         }
         const userlogin=await User.findOne({email:email});

         if(userlogin){
            //console.log(userlogin);
            //verifying the password 
            const isMatch=await bcrypt.compare(password,userlogin.password);
            //token denge for seeing secret pages and particular info

            token=await userlogin.generateAuthToken();
            console.log(token);

            //storing token in cookies
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+3000000000000),
                httpOnly:true
            });
            if(!isMatch){
                res.status(400).json({error:"Invalid credentials "});
            }
            else {
                res.json({message:"user signed successfully"});
            }
         }
         else{
             res.status(400).json({error:"User not exist "});
         }
    }catch(err){
        console.log(err);
    }
});
//specific data 
router.get("/products",authenticate ,(req,res) => {
    //res.redirect("/product");
    res.send(req.rootUser);
 });

 router.get("/getdata",authenticate ,(req,res) => {
    //res.redirect("/product");
    res.send(req.rootUser);
 });

 router.post("/ideas",authenticate ,async (req,res) => {
      try{
        const {message}=req.body;
        if(!message){
            console.log("error in idea");
            return res.json({error:"please submit idea "});
        }
        const useridea=await User.findOne({_id:req.userId});
        if(useridea){
            const usermessage=await useridea.addMessage(message);
            await useridea.save();
            res.status(201).json({message:"user idea reached"});

        }

      }catch(error){
          console.log(error);
      }
 });
//logout page
 router.get("/logout",(req,res) => {
    //res.redirect("/product");
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send("user logout");
 });

module.exports=router;
