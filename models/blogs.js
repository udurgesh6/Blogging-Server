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
  CommentsCheck1: [String],
  CommentsCheck2: [{ name: String }],
  CommentsCheck3: [{ name: String, description: String, email: String }],
  CommentsCheck4: [{ name: String, description: String, email: String }],
});

var BlogPost = mongoose.model("BlogArticle", blogSchema);

module.exports = BlogPost;
