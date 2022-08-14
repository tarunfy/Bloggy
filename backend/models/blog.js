const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    markDown: {
      type: String,
      required: true,
    },

    comments: {
      type: [
        {
          user: String,
          comment: String,
        },
      ],
    },

    likes: {
      type: [String],
    },

    userId: {
      type: String,
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
