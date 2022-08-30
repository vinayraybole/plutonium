const jwt = require("jsonwebtoken")
const user = require('../models/userModel')


const createUser = async function (req, res){
    let data = req.body
    let userDetails = await user.create(data)
    res.send({status: true, msg: userDetails})
}

const loginUser = async function(req, res){
    let userName = req.body.emailId
    let password = req.body.password

    let userDetails = await user.findOne({ emailId: userName, password: password})
    if(!userDetails){
        return res.send({msg: "user and password is correct"})
    }
    let token = jwt.sign(
        {
            userId: user._id,
            assignment: jwt
        },
        "this is JWT assignment"
    )
    res.setHeader("x-auth-token", token)
    res.send({ status: true, tokenData: token })
}


const getUser = async function (req, res) {
    let token = req.headers["x-Auth-token"];
    if (!token){
        token = req.headers["x-auth-token"];
    }
    if (!token) {
        return res.send({msg: "token is present" });
    }
    console.log(token);
    let decoded = jwt.verify(token, "this is JWT assignment");
    if (!decoded)
    return res.send({msg: "token is valid" });

  let userId = req.params.userId;
  let userDetails = await user.findById(userId);
  if (!userDetails)
    return res.send({msg: " such user exists" });

  res.send({ status: true, data: userDetails });
}


const updateDetails = async function (req, res){
    let token = req.headers["x-Auth-token"];
    if (!token){
        token = req.headers["x-auth-token"];
    }
    if (!token) {
        return res.send({msg: "token must be present" });
    }
    console.log(token);
    let decoded = jwt.verify(token, "this is JWT assignment");
    if (!decoded)
    return res.send({msg: "token is valid" });

    let userId = req.params.userId;
    let data = req.body
    let findUser = await user.findById(userId)
    if (!findUser) {
        return res.send(" such user exists in database");
      }
    const update = await user.findOneAndUpdate({ _id: userId }, data)
    return res.send({status: true, data: update})
}

let deleteUser = async function (req, res){
    let token = req.headers["x-Auth-token"];
    if (!token){
        token = req.headers["x-auth-token"];
    }
    if (!token) {
        return res.send({msg: "token is present" });
    }
    console.log(token);
    let decoded = jwt.verify(token, "this is JWT assignment");
    if (!decoded)
    return res.send({msg: "token is invalid" });

    let userId = req.params.userId;
    let userDelete = await user.findById(userId)
    if (!userDelete) {
        return res.send("No such user exists in database");
      }
    let deleteUser = await user.findOneAndUpdate(
        {_id: userId},
        {isDeleted: true},
        {new:true}
        )
    return res.send({status: true, data: deleteUser})

}



module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.getUser = getUser
module.exports.updateDetails = updateDetails
module.exports.deleteUser = deleteUser
