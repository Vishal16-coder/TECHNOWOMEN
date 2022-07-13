const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const Idea = require("./models/ideas");
const Product = require("./models/products");
const Cmntproduct = require("./models/cmntProducts");
const Cmntidea = require("./models/cmntIdeas");
const User = require("./models/users");
const app = express();

dotenv.config({path:'./config.env'});

require('./db/conn.js');

app.use(express.json());

app.use(require('./router/auth.js'));

const PORT=process.env.PORT || 5000;

if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
    
}

app.listen(PORT,()=>{
    console.log(`RUNNING at port no  ${ PORT}`);
})