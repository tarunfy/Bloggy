const mongoose = require("mongoose");
const BlogModel = require("../models/blog");
const cloudinary = require("../utils/cloudinary");

//get all blogs:
const getBlogs = async (req, res) => {
  try {
    if (req.query.filterBy == "Relevant" || !req.query.filterBy) {
      const blogs = await BlogModel.find({});
      res.status(200).json({ blogs });
    }
    if (req.query.filterBy == "Latest") {
      const blogs = await BlogModel.find({}).sort({ createdAt: -1 });
      res.status(200).json({ blogs });
    }

    if (req.query.filterBy == "Top") {
      const blogs = await BlogModel.find({}).sort({ likes: -1 });
      res.status(200).json({ blogs });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//get a single blog:
const getBlog = async (req, res) => {
  const blogId = req.params.blogId;

  if (!mongoose.Types.ObjectId.isValid(blogId)) {
    return res.status(404).json({ error: "Blog not found" });
  }

  try {
    const blog = await BlogModel.findById(blogId, {
      comments: 0,
    });

    if (!blog) {
      res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json({
      blog,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//create a blog:
const createBlog = async (req, res) => {
  const emptyFields = [];

  if (!req.body.markdown) {
    emptyFields.push("markdown");
  }

  if (!req.body.blogTitle) {
    emptyFields.push("blogTitle");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    let cloudinaryImgUrl;
    if (req.body.coverImage) {
      const uploadResponse = await cloudinary.uploader.upload(
        req.body.coverImage,
        {
          folder: `Bloggy/blogs/${req.body.userId}`,
        }
      );
      cloudinaryImgUrl = uploadResponse.secure_url;
    }
    const blog = await BlogModel.create({
      ...req.body,
      coverImage: cloudinaryImgUrl ? cloudinaryImgUrl : "",
    });
    res.status(201).json({ blog });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//delete a blog:
const deleteBlog = async (req, res) => {
  const blogId = req.params.blogId;

  if (!mongoose.Types.ObjectId.isValid(blogId)) {
    return res.status(404).json({ error: "Blog not found" });
  }

  try {
    const deletedBlog = await BlogModel.findOneAndDelete({ _id: blogId });

    if (!deletedBlog) {
      return res.status(404).json({ error: "No such blog" });
    }
    res.status(200).json({ blog: deletedBlog });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get user's blogs:
const getPersonalBlogs = async (req, res) => {
  const userId = req.userId;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "No user found with that id" });
  }

  try {
    const userBlogs = await BlogModel.find({
      userId,
    });

    res.status(200).json({ blogs: userBlogs });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update a blog:
const updateBlog = async (req, res) => {
  const blogId = req.params.blogId;

  if (!mongoose.Types.ObjectId.isValid(blogId)) {
    return res.status(400).json({ error: "Blog not found" });
  }

  try {
    let cloudinaryImgUrl;
    if (req.body.coverImage) {
      const uploadResponse = await cloudinary.uploader.upload(
        req.body.coverImage,
        {
          folder: `Bloggy/blogs/${req.body.userId}`,
          public_id: `${blogId}`,
        }
      );
      cloudinaryImgUrl = uploadResponse.secure_url;
    }
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      blogId,
      { ...req.body, coverImage: cloudinaryImgUrl ? cloudinaryImgUrl : "" },
      {
        new: true,
      }
    );

    res.status(200).json({ updatedBlog });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get blog's comments:
const getComments = async (req, res) => {
  const { blogId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(blogId)) {
    return res.status(400).json({ error: "Blog not found" });
  }

  try {
    const blog = await BlogModel.findById(blogId);

    res.status(200).json({ comments: blog.comments });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const blogLikes = async (req, res) => {
  const { userId } = req.body;
  const { blogId } = req.params;

  try {
    //check if userId is already present in that blog's likes:
    const blog = await BlogModel.findById(blogId);

    if (!blog.likes.includes(userId)) {
      const updatedBlog = await BlogModel.findByIdAndUpdate(
        blogId,
        {
          $push: {
            likes: [userId],
          },
        },
        { new: true }
      );

      res.status(200).json({ blog: updatedBlog });
    }

    if (blog.likes.includes(userId)) {
      const updatedBlog = await BlogModel.findByIdAndUpdate(
        blogId,
        {
          $pull: {
            likes: userId,
          },
        },
        { new: true }
      );
      res.status(200).json({ blog: updatedBlog });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//Add comment:
const addComment = async (req, res) => {
  const { userId, comment } = req.body;
  const { blogId } = req.params;

  try {
    const updatedBlog = await BlogModel.findByIdAndUpdate(blogId, {
      $push: {
        comments: {
          userId,
          comment,
        },
      },
    });
    res.status(200).json({ blog: updatedBlog });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getBlog,
  getBlogs,
  createBlog,
  deleteBlog,
  getPersonalBlogs,
  updateBlog,
  getComments,
  blogLikes,
  addComment,
};
