const Router = require("express").Router();
const {
  login,
  signup,
  profileUpdate,
  logout,
  currentUser,
} = require("../controllers/user");

//signup
Router.post("/signup", signup);

//login
Router.post("/login", login);

//logout
Router.get("/logout", logout);

//update profile:
Router.put("/:userId", profileUpdate);

//Get user:
Router.get("/currentUser", currentUser);

module.exports = Router;
