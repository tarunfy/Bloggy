const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    markdown: {
      type: String,
      required: true,
    },

    comments: {
      type: [
        {
          userId: String,
          comment: String,
        },
      ],
    },

    likes: {
      type: [String],
    },

    userId: {
      type: String,
      required: true,
    },

    coverImage: {
      type: String,
    },

    blogTitle: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
