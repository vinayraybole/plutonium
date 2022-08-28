
    const mongoose = require('mongoose');

    const userSchema = new mongoose.Schema( {
        Name: String,
        balance: {
            type: Number,
            default:100,
        },
        address: String,
        age: Number,
        gender: {
            type: String,
            enum: ["male", "female", "other"] 
        },
        isFreeAppUser:{
            type:Boolean,
            default:false
        }
      
    
    }, { timestamps: true });
    
    module.exports = mongoose.model('User Document', userSchema)
    
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]


 //users



// String, Number
// Boolean, Object/json, array
