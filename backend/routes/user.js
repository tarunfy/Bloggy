const Router = require("express").Router();

//signup
Router.post("/signup", (req, res) => {
  res.json({ mssg: "signup" });
});

//login
Router.post("/login", (req, res) => {
  res.json({ mssg: "login" });
});

module.exports = Router;
