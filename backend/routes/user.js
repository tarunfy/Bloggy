const Router = require("express").Router();
const {
  login,
  signup,
  profileUpdate,
  logout,
  currentUser,
  findUser,
  cloudUpload,
} = require("../controllers/user");

//signup
Router.post("/signup", signup);

//login
Router.post("/login", login);

//logout
Router.get("/logout", logout);

//update profile:
Router.put("/:userId", profileUpdate);

//Get userCurrent:
Router.get("/currentUser", currentUser);

//Get user:
Router.get("/:userId", findUser);

module.exports = Router;
