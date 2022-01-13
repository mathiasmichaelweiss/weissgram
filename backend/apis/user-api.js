const mongoose = require("mongoose");
const crypto = require("crypto");
const db = mongoose.connect(
  "mongodb://user:password@ds027409.mongolab.com:27409/coffeeplaces"
);
const User = require("./backend/models/user.js");

exports.createUser = userData => {
  const user = {
    name: userData.name,
    email: userData.email,
    password: hash(userData.password)
  };
  return new User(user).save();
};

exports.getUser = id => {
  return User.findOne(id);
};

exports.checkUser = userData => {
  return User.findOne({ email: userData.email }).then(doc => {
    if (doc.password == hash(userData.password)) {
      console.log("User password is ok");
      return Promise.resolve(doc);
    } else {
      return Promise.reject("Error wrong");
    }
  });
};

const hash = text => {
  return crypto
    .createHash("sha1")
    .update(text)
    .digest("base64");
};
