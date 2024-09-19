const express = require("express");

const { getUser } = require("../controller/users/getUser");
const { getUsers } = require("../controller/users/getUsers");
const { createUser } = require("../controller/users/createUser");
const { deleteUser } = require("../remove/deleteUser");

const UserRouter = express.Router();

UserRouter.get("/", getUsers)
  .get("/:id", getUser)
  .post("/add", createUser)
  .delete("/:id", deleteUser);

module.exports = UserRouter;
