const authormodel=require ("../models/authorModel.js")
const bookmodel=require ("../models/bookModel.js")

const authordata= async function ( req,res){
 let x=req.body
 let y=await authormodel.create(x)
 res.send ({ y})
}
const bookdata=async function (req,res){
    let a=req.body
    let b=await bookmodel.create(a)
    res.send ({b})

}
module.exports.authordata=authordata