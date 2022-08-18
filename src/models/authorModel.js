const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({

    author_id: {

     type: Number,
     require: true,
      unique: true,
        
        },   
    authorname: String,
    age : Number,
    adress : String,

    }, { timestamps: true });

    module.exports= mongoose.model("author",AuthorSchema)
