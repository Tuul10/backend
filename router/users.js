const express = require("express");

const { getUser } = require("../controller/users/getUser");
const { getUsers } = require("../controller/users/getUsers");
const { createUser } = require("../controller/users/createUser");
const { deleteUser } = require("../remove/deleteUser");
const { getComment } = require("../controller/comments/getComment");
const { createComment } = require("../controller/comments/createComment");
const { deleteComment } = require("../remove/deleteComment");
const { updateComment } = require("../controller/comments/ubpdateComment");

const Router = express.Router();

Router.get("/users", getUsers)
  .get("/user/:id", getUser)
  .post("/user/add", createUser)
  .delete("/user/:id", deleteUser)
  .get("/comment", getComment)
  .post("/comment/add", createComment)
  .delete("/comment/:id", deleteComment)
  .put("/comment/up/:id", updateComment);

module.exports = Router;
