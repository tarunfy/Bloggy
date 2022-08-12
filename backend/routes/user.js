const Router = require("express").Router();
const { login, signup } = require("../controllers/user");

//signup
Router.post("/signup", signup);

//login
Router.post("/login", login);

module.exports = Router;
