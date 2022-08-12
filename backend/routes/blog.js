const Router = require("express").Router();

//get blogs:
Router.get("/", (req, res) => {
  res.json({ mssg: "get all blogs" });
});

//get a blog:
Router.get("/:blogId", (req, res) => {
  res.json({ mssg: `${req.params.blogId} is the blog you requested` });
});

//create a new blog:
Router.post("/create", (req, res) => {
  res.json({ mssg: "create a new blog" });
});

//update a blog:
Router.patch("/:blogId", (req, res) => {
  res.json({ mssg: `update the blog ${req.params.blogId}` });
});

//delete a blog:
Router.delete("/:blogId", (req, res) => {
  res.json({ mssg: `delete the blog ${req.params.blogId}` });
});

module.exports = Router;
