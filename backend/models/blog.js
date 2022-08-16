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
          user: String,
          comment: String,
        },
      ],
    },

    likes: {
      type: [String],
    },

    userInfo: {
      type: {
        name: String,
        profileImage: String,
        userId: String,
      },
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
