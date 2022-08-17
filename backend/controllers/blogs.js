const { default: mongoose } = require("mongoose");
const BlogModel = require("../models/blog");

//get all blogs:
const getBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find({});
    res.status(200).json({ blogs });
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
    const blog = await BlogModel.findById(blogId);

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
    const blog = await BlogModel.create(req.body);
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
//export const updateBlog = async ( req, res ) =>
//{
//	const blogId = req.params.blogId;

//	if ( !mongoose.Types.ObjectId.isValid( blogId ) )
//	{
//		return res.status( 400 ).json( { error: 'Blog not found' } );
//	};

//	try
//	{
//		const updatedBlog =
//	} catch ( err )
//	{
//		res.status( 400 ).json( { error: err.message } );
//	}
//}

module.exports = {
  getBlog,
  getBlogs,
  createBlog,
  deleteBlog,
  getPersonalBlogs,
};
