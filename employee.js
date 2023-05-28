const mongoose = require("mongoose");

const empSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    dob:Date,
    address:String,
    pin:Number
});

module.exports=mongoose.model("Employee",empSchema); 