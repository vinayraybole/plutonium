const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const {default:mongoose} =require('mongoose');

const app =express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
 mongoose.connect("mongodb+srv://Vinu:aJDHJpgLzOCB3mMR@cluster0.k8rhbqk.mongodb.net/vinu-db?retryWrites=true&w=majority",

{    useNewUrlParser:true

}
) .then ( ()=> console.log("mongoDB is connect"))
    .catch(err =>console.log(err));


app.use('/', route);

app.listen(process.env.PORT || 4000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});