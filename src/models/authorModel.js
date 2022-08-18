const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Author_id: {

     type: Number,
     require: true,
      unique: true
        
        },   
    authorname: String,
    age : String,
    adress : String 
    })

    module.exports= mongoose.model("Author",userSchema)