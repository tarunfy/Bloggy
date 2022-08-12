const Router = require("express").Router();
const { login, signup, profileUpdate } = require("../controllers/user");

//signup
Router.post("/signup", signup);

//login
Router.post("/login", login);

//update profile:
Router.put("/:userId", profileUpdate);

module.exports = Router;
