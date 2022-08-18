const Router = require("express").Router();
const authCheck = require("../middlewares/authCheck");

const {
  getBlog,
  getBlogs,
  createBlog,
  deleteBlog,
  getPersonalBlogs,
  updateBlog,
  getComments,
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
Router.put("/:blogId", authCheck, updateBlog);

//delete a blog:
Router.delete("/:blogId", authCheck, deleteBlog);

//get blog's comments:
Router.get("/comments/:blogId", getComments);

module.exports = Router;
