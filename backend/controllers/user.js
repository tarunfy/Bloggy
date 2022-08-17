const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

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

    res
      .cookie("jwt", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
      })
      .status(200)
      .json({ user });
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

    res
      .cookie("jwt", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
      })
      .status(200)
      .json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//logout
const logout = async (req, res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
  });
  res.end();
};

//update profile:
const profileUpdate = async (req, res) => {
  const id = req.params.userId;
  try {
    //check if the username is there taken in req:
    if (req.body.username) {
      //check if the username is taken or not:
      const taken = await UserModel.findOne({ username: req.body.username });

      if (taken) {
        return res
          .status(400)
          .json({ error: "Username already taken, try a different one" });
      }
    }

    //check if the email is there taken in req:
    if (req.body.email) {
      //check if the email is taken or not:
      const taken = await UserModel.findOne({ email: req.body.email });

      if (taken) {
        return res
          .status(400)
          .json({ error: "Email already taken, try a different one" });
      }
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    updatedUser.password = undefined;

    if (!updatedUser) {
      return res.status(404).json({ error: "No user found" });
    }

    res.status(200).json({ user: updatedUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get current user:
const currentUser = async (req, res) => {
  const { jwt: token } = req.cookies;

  if (!token) {
    return res.status(400).json({ error: "Token expired" });
  }

  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!decodedToken) {
    return res.status(400).json({ error: "Invalid token" });
  }

  const user = await UserModel.findById(decodedToken._id);

  res.status(200).json({ user });
};

//find user:
const findUser = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
    return res.status(400).json({ error: "User id not valid" });
  }

  try {
    const user = await UserModel.findById(req.params.userId);

    if (!user) {
      res.status(404).json({ error: "User does not exists with that id" });
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  login,
  signup,
  logout,
  profileUpdate,
  currentUser,
  findUser,
};
