const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    blog: {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
