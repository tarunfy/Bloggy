const Router = require("express").Router();
const {
  getBlog,
  getBlogs,
  createBlog,
  deleteBlog,
} = require("../controllers/blogs");

//get a blog:
Router.get("/:blogId", getBlog);

//get blogs:
Router.get("/", getBlogs);

//create a new blog:
Router.post("/create", createBlog);

//update a blog:
Router.patch("/:blogId", (req, res) => {
  res.json({ mssg: `update the blog ${req.params.blogId}` });
});

//delete a blog:
Router.delete("/:blogId", deleteBlog);

module.exports = Router;
