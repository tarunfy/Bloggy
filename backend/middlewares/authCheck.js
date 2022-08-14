const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");

const authCheck = async (req, res, next) => {
  const cookies = req.cookies();

  if (cookies.jwt) {
    console.log(cookies.jwt);
    next();
  } else {
    res.status(400).json({ error: "Token expired" });
  }
};

module.exports = authCheck;
