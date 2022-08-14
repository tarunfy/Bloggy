const Router = require("express").Router();
const { login, signup, profileUpdate, logout } = require("../controllers/user");

//signup
Router.post("/signup", signup);

//login
Router.post("/login", login);

//logout
Router.get("/logout", logout);

//update profile:
Router.put("/:userId", profileUpdate);

module.exports = Router;
