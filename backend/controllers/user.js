const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");

//generate JWT:
const genToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//login
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.login(username, password);
    user.password = undefined;

    //create token:
    const token = genToken(user._id);

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//signup
const signup = async (req, res) => {
  const { email, password, username, fullname } = req.body;
  try {
    const user = await UserModel.signup(email, password, username, fullname);
    user.password = undefined;

    //create token:
    const token = genToken(user._id);

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  login,
  signup,
};
