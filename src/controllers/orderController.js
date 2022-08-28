
const { count } = require("console")
const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")

const createorder= async function (req, res) {
    let userid= req.body.userId
    let productid =req.body.productid
    let userValidation = await userModel.findById(userid)
    let productValidation = await userModel.findById(productid)
    if(userValidation){  //By check the user is present or not.

        if(productValidation){     //By check the product is present or not.

            let isfreeAppUser = userValidation.freeAppUser
            
            let userBalance = userValidation.userbalance

            if (isfreeAppUser == false){   //chcking user is freeAppUser or not
                let bookPrice = productValidation.bookPrice
                if (userBalance>=bookPrice){   //user has sufficient balance to make order or not

                    let orderDetails = req.body     //user is not freeAppUser
                    orderDetails.amount =bookPrice
                    orderDetails.freeAppUser = isfreeAppUser
                    orderDetails.date = new Date()
                    let updatedBalance = userBalance - bookPrice
                    
                    let savedData= await orderModel.create(orderDetails)     //create order
                    await userModel.findOneAndUpdate({"_id":userid},{"userbalance":updatedBalance})  //updating the balance
                    res.send({msg: savedData})

                }else{
                  res.send ({msg:"low Balance, load Balance first then purchase"})  
                }

            }

        }
        

    }



 
}

module.exports.createorder = createorder