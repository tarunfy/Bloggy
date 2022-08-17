const Router = require("express").Router();
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
Router.get("/user/personal", getPersonalBlogs);

//create a new blog:
Router.post("/create", createBlog);

//update a blog:
Router.patch("/:blogId", (req, res) => {
  res.json({ mssg: `update the blog ${req.params.blogId}` });
});

//delete a blog:
Router.delete("/:blogId", deleteBlog);

module.exports = Router;
