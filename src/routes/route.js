const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('vinu bhai')
    

    res.send('My second ever api!')
});

// first assingnment 

router.post ('/Vinay',function(req, res){

    let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {

            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]
   
        let newname = req.body.name;
        let num=0;
        for(i=0;i<players.length;i++){
        let hum = players[i];
        if(hum.name ==newname){
            let num=1;
             res.send("This player exist in the list of array")
        }
    }
    
    if(num==0){
players.push(req.body)
    }
    res.send(player)


});

   //second assignment 
   
let persons = [
    {
      name : "PK",
      age : 10,
      votingStatus : false
    },
    {
      name : "SK",
      age : 20,
      votingStatus : false
    },
    {
      name : "AA",
      age : 70,
      votingStatus : false
    },
    {
      name : "SC",
      age : 5,
      votingStatus : false
    },
    {
      name : "HO",
      age : 40,
      votingStatus : false
    },
    {
        name : "vinay",
        age : 800,
        votingStatus : false

    },
  ]
  router.post('/eligibleVoter/:age', function(req,res){
    let eligibleAge = req.params.age;
    let eligiblePersons = persons.filter(index => index.age >= eligibleAge)
    eligiblePersons.forEach(index => index.votingStatus = true);
  
    res.send(eligiblePersons);
  })
  
  


module.exports = router;