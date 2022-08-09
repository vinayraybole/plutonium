const express = require('express');
const _ = require('underscore')

const abc = require('../introduction/intro')
const loggerModule = require('../logger/logger.js')
const formatterModule = require('../validator/formatter') 
const helperModule = require('../util/helper')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    loggerModule.printInfo()
    formatterModule.trimMyString()
    formatterModule.getUpperCaseString()
    formatterModule.changetoLowerCase()
    helperModule.getTodaysDate()
    helperModule.getCurrentMonth()
    helperModule.printBatchDetails()
    let weekdend = ['Saturday','Sunday','Monday']
    let result = _.first(weekdend, 2)
    console.log('Unserscore example resultr is ',result)
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})
 //First Problem

router.get('/movies',function(req,res){
    let myMovies = ["KGF-chapter 2","Major","Uri","Border"]
    console.log(myMovies)
    res.send(myMovies)
})


//Program No 2

router.get('/movies/:indexNumber',function(req,res){
    let myMovies = ["KGF-chapter 2","Major","Uri-The Surgical Strike","Border"]
    let requestParams = req.params
    let index = requestParams.indexNumber
    if(index < myMovies.length){
       res.send(myMovies[index])
    }
    else{
        res.send("Enter Valid Number")
    }
   
    res.send("this is code")
})


//Program No 3

router.get('/films',function(req,res){
    const film=[{'id':1,'name':'KGF-Chapter 2'},{'id':2,'name':'Major'},{'id':3,'name':'Uri-The Surgical Strike'},{'id':4,'name':'Border'}]
    res.send(film)
})


router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason