const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    profileImage: {
      type: String,
    },
    bio: {
      type: String,
    },
    websiteUrl: {
      type: String,
    },
    work: {
      type: String,
    },
    education: {
      type: String,
    },
    github: {
      type: String,
    },
    twitter: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (
  email,
  password,
  username,
  fullname
) {
  //checking if all fields are recieved:
  if (!email || !password || !username || !fullname) {
    throw Error("All fields must be required.");
  }

  //validating email & password:
  if (!validator.isEmail(email)) {
    throw Error("Please enter a valid email");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Please enter a strong password");
  }

  //check if the user already exists in our db with that email:
  const emailTaken = await this.findOne({ email });

  if (emailTaken) {
    throw Error("User already exists with that email address");
  }

  //check if the user already exists in our db with that username:
  const usernameTaken = await this.findOne({ username });

  if (usernameTaken) {
    throw Error("Username already taken");
  }

  const salt = await bcrypt.genSalt(10);

  const hasedPassword = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hasedPassword,
    username,
    fullname,
  });

  return user;
};
userSchema.statics.login = async function (username, password) {
  //checking if all fields are recieved:
  if (!username || !password) {
    throw Error("All fields must be required.");
  }

  //check if we have the user in our db with that username:
  const user = await this.findOne({ username });

  if (!user) {
    throw Error("User not found");
  }

  const matched = await bcrypt.compare(password, user.password);

  if (!matched) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
