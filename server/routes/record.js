const express = require("express");
const recordRoutes = express.Router();
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")

const dbo = require("../db/conn");
const userSchema=mongoose.Schema({
  username:{
      type:String,
      required:true,
  },
  email:{
      type:String,
      required:true,
  },
  password:{
      type:String,
      required:true,
  },
}, {timestamps: true})
const User = mongoose.model("User", userSchema)

recordRoutes.post("/register", async(req, res)=>{
  const user = req.body;
  const takenUsername=await User.findOne({username:user.username})
  const takenEmail=await User.findOne({email:user.email})
  if(takenUsername || takenEmail){
      res.json({message: "Username or email has already been taken"})
  }
  else{
      user.password = awaitbcrypt.hash(req.body.password, 10)
      const dbUser = new User({
          username:user.username.toLowerCase(),
          email: user.email.toLowerCase(),
          password: user.password
      })
      dbUser.save()
      res.json({message: "Success"})
  }
})
recordRoutes.post("/login", (req, res) =>{
  const userLoggingLin = req.body;
  User.findOne({username:userLoggingLin.username})
  .then(dbUser=>{
      if (!dbUser){
          return res.json({
              message: "Invalid Username or Password"
          })
      }
      bcrypt.compare(userLoggingLin.password, dbUser.password)
      .then(isCorrect =>{
          if (isCorrect){
              const payload = {
                  id: dbUser._id,
                  username: dbUser.usernamem
              }
              jwt.sign(
                  payload,
                  process.env.JWT_SECRET,
                  {expiresIn:86400},
                  (err,token)=>{
                      if(err) return res.json({message: err})
                      return res.json({
                          message:"Success",
                          token: "Bearer " + token
                      })
                  }
              )
          }
          else{
              return res.json({
                  message: "Invalid Username or Password"
              })
          }
      })
  })
}

)
function verifyJWT(req, res, next){
  const token = req.header[x-access-token]?.split(' ')[1]
  if(token){
      jwt.verify(token, process.env.PASSPORTSECRET,(err,decoded)=>{
          if(err) return res.json({
              isLoggedIn: false,
              message: "Failed to Authenticate"

          })
          req.user={};
          req.user.id = decoded.id
          req.user.username = decoded.username
          next()
      })
  }
  else{
      res.json({message: "Incorrect Token Given", isLoggedIn:false})
  }
}
recordRoutes.get("/getUsername", verifyJWT, (req, res) => {
  res.json({isLoggedIn: true, username: req.user.username})
})
// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myquery = { id: req.body.id };
  db_connect
  .collection("records")
  .findOne(myquery, function (err, result) {

        if (err) throw err;
        res.json(result)
      
       
        
      });
});
recordRoutes.route("/record/random").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
db_connect
  .collection("records")
  .aggregate(
    { $sample: { size: 2 } }).toArray(function(err, docs) {
     if (err) {
       handleError(res, err.message, "Failed to get contacts.");
     } else {
       res.status(200).json(docs);     
     }
   });
      
});
recordRoutes.route("/record/random2").get(function (req, res) {
  db.records.aggregate(
    { $sample: { size: 1 } }).toArray(function(err, docs) {
     if (err) {
       handleError(res, err.message, "Failed to get contacts.");
     } else {
       res.status(200).json(docs);     
     }
   });
      
});
recordRoutes.route("/record/add").post(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myobj = {
    word: req.body.word,
    word_translation: req.body.word_translation,
  };
  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myquery = { id: req.body.id };
  let newvalues = {
    $set: {
      word: req.body.word,
      word_translation: req.body.word_translation,
      
    },
  };
  db_connect
    .collection("records")
    .update0ne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
});

// This section will help you delete a record
recordRoutes.route("/record/delete/:id").delete((req, res) => {
  let db_connect = dbo.getDb("employees");
  var myquery = { id: req.body.id };
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
});


module.exports = recordRoutes;