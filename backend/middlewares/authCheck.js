const jwt = require("jsonwebtoken");

const authCheck = async (req, res, next) => {
  const cookies = req.cookies;
  let id;

  const token = req.headers?.authorization?.split(" ")[1];

  if (token) {
    const decodedData = jwt.decode(token, process.env.SECRET);
    id = decodedData?._id;
  }

  if (cookies.jwt || token) {
    req.userId = token ? id : null;
    next();
  } else {
    return res.status(400).json({ error: "Token expired" });
  }
};

module.exports = authCheck;
