const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controller/userController")
const BookModel=require("../models/bookModel.js")
 const BookController=require("../controller/bookcontroller.js")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

 router.post("/createBook", BookController.createBook)

 router.get("/getBooksData",BookController.getBooksData)

module.exports = router;




