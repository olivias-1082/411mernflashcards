const express = require("express");
const recordRoutes = express.Router();
const jwt = require('jsonwebtoken')
require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const bcrypt = require('bcrypt')
const { OAuth2Client } = require('google-auth-library');

const mongoose = require("mongoose")
mongoose.set("useCreateIndex", true);
login = async (req, res) => {
  try {
    const code = req.body.code;
    const profile = await googleOAuth.getProfileInfo(code);

    const user = {
      googleId: profile.sub,
      name: profile.name,
      firstName: profile.given_name,
      lastName: profile.family_name,
      email: profile.email,
      profilePic: profile.picture,
    };

    res.send({ user });
  } catch (e) {
    console.log(e);
    res.status(401).send();
  }
};
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
router.post('/google', login);

const client = new OAuth2Client(
  config.env.GOOGLE_CLIENT_ID,
  config.env.GOOGLE_CLIENT_SECRET,
  /**
   * To get access_token and refresh_token in server side,
   * the data for redirect_uri should be postmessage.
   * postmessage is magic value for redirect_uri to get credentials without actual redirect uri.
   */
  'postmessage'
);

getProfileInfo = async (code) => {
  const r = await client.getToken(code);
  const idToken = r.tokens.id_token;

  const ticket = await client.verifyIdToken({
    idToken,
    audience: config.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  return payload;
};
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
    if (err) throw err .catch();
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