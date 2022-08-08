const express = require('express');
const logger=require('../logger/logger');
const helper=require('../util/helper');
//const validator=require('../validator/formatter')
const lodash= require ('lodash')

const router = express.Router();

router.get('/question1', function (req, res) {
    console.log(logger.welcome())
    res.send('1st question is done!')
});

router.get('/question2', function (req, res) {
    console.log(helper.printDate())
    console.log(helper.printMonth()) 
     console.log(helper.getBatchInfo())
    res.send('1st question2 is done!')
})

router.get('/question3', function (req, res) {
    //console.log(validator.trim());
    //console.log(validator.toLowerCase());
    //console.log(validator.toUpperCase());
    //res.send('1st question is done!')
});
router.get;'/question4' ,function (req,res) {
console.log(express.router);

}
const months= ["jan","feb","mar","april","may","jun","july","aug","sep","oct","nov","dec"]
const vinay=lodash.chunk(months,[size=4])
console.log (vinay)

const arr=[1,3,5,7,9,11,13,15,17,19]
const raybole=lodash.tail(arr,[])
console.log (raybole)


const arr2=[1,1,2,2,3,3]
const me=lodash.union(arr2,[])
console.log (me)

const arr3= ["horror","The Shining"]; ["drama" ,"Titanic"]; ["thriller","Island"]; ["fantasy","Pans Labyrinth"]

const result=lodash.fromPairs(arr3,[])
console.log (result)

  
module.exports = router;
// adding this comment for no reason
