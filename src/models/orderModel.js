const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema ({

	user: {
        type: ObjectId,
        ref: "User Document"
    }, 
    
    product: {
        type: ObjectId,
        ref: "Product"
    },
    amount: Number,
	isFreeAppUser:Boolean , 
          
	date: String

} , { timestamps: true });

module.exports = mongoose.module('Order', orderSchema)
