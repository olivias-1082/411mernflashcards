const express = require("express");
const recordRoutes = express.Router();
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")

const dbo = require("../db/conn");


recordRoutes.route("/register").post(function (req, res) {
  let db_connect = dbo.getDb("employees");  
  let newPassword = bcrypt.hash(req.body.password, 10);
  let myobj = {
    name: req.body.name,
    email: req.body.email,
    password: newPassword
  };
  
  db_connect.collection("users").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});
recordRoutes.post("/login", (req, res)=> {
  const { email, password} = req.body
  db_connect.collection("users").findOne({email: email}, (err, user) => {
    if(user){
          if(password === user.password ) {
              res.send({message: "Login Successfull", user: user})
          } else {
              res.send({ message: "Password didn't match"})
          }
      } else {
          res.send({message: "User not registered"})
      }
  })
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