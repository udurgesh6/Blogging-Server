const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  fileUpload: String,
  upvote: {
    type: Number,
    default: 0,
  },
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var BlogPost = mongoose.model("BlogArticle", blogSchema);

module.exports = BlogPost;
