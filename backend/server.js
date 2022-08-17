const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const UserRouter = require("./routes/user");
const BlogRouter = require("./routes/blog");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

dotenv.config();

//creating express app:
const app = express();

// global middlewares
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

//Routes:
app.use("/api/user", UserRouter);
app.use("/api/blogs", BlogRouter);

//connecting to mongodb:
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to mongodb");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
