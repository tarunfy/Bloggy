const Router = require("express").Router();
const authCheck = require("../middlewares/authCheck");

const {
  getBlog,
  getBlogs,
  createBlog,
  deleteBlog,
  getPersonalBlogs,
} = require("../controllers/blogs");

//get a blog:
Router.get("/:blogId", getBlog);

//get all blogs:
Router.get("/", getBlogs);

//get user's blogs:
Router.get("/user/personal", authCheck, getPersonalBlogs);

//create a new blog:
Router.post("/create", authCheck, createBlog);

//update a blog:
Router.put("/:blogId", authCheck, (req, res) => {
  res.json({ mssg: `update the blog ${req.params.blogId}` });
});

//delete a blog:
Router.delete("/:blogId", authCheck, deleteBlog);

module.exports = Router;
