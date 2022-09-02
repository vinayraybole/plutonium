const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weather=require("../controllers/weatherController")
const Memes=require("../controllers/memesController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)

router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)

router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get("/cowin/getByDistrict",CowinController.getDistrictsessions)

router.get("/getSortedCities",weather.getSortedCities)

router.get ("/getMemes",Memes.getMemes)

router.post ("/myMeme", Memes.myMeme)

module.exports = router;
