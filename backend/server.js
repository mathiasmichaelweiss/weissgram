const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { v4: uuidv } = require("uuid");
const fs = require("fs");
const session = require("express-session");
const bodyParser = require("body-parser");
const varMiddleware = require("./middleware/variables");
const { graphqlHTTP, graphiql } = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require("graphql");
const PORT = 5200;

const users = {}; // all users

const app = express();

app.use(cors());
app.use(
  session({
    secret: "some secret value",
    resave: false,
    saveUninitialized: false
  })
);
app.use(bodyParser.json());
app.use(varMiddleware);

app.get("/user/login", async (req, res) => {
  return console.log("responce body: ", res.body);
  /* res.render("auth/login", {
        title: "Authentication",
        isLogin: true
      }); */
});

app.post("/user/register", async (req, res) => {
  const userData = req.body; // Data from Client

  const newId = uuidv();
  const newUser = {
    id: newId,
    ...userData
  };

  // Already registered
  const userFound = Object.keys(users).find(
    k => users[k].email === userData.email
  );

  if (userFound !== undefined) {
    res.send({ status: "already registered" });
    return;
  }

  users[newId] = newUser;

  console.log(users);

  res.send({ newUser, status: "success" });
});

async function start() {
  try {
    const password = "Ukmyjn888";
    const url = `mongodb+srv://mathiasmichaelweiss:${password}@weissgram.epgsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

    await mongoose.connect(url, { useNewUrlParser: true });

    app.listen(PORT, () => console.log("Server is running on port ", PORT));
  } catch (error) {
    console.log(error);
  }
}

start();
