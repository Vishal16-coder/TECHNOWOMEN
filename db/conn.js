const mongoose = require("mongoose");

const DB=process.env.DATABASE;

const newLocal = mongoose.connect(DB)
.then(() => {
    console.log("Connected to DB!!");
}).catch((err) => console.log("error message"));