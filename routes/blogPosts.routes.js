const express = require("express");

const {
  getAllBlogPosts,
  addBlogPost,
  getSinglePost,
  updateSingleBlogPost,
  removeSingleBlogPost,
  likeBlogPost,
} = require("../controllers/blogPosts.controller.js");

const router = express.Router();

router.get("/", getAllBlogPosts);
router.post("/", addBlogPost);
router.get("/:id", getSinglePost);
router.patch("/:id", updateSingleBlogPost);
router.delete("/:id", removeSingleBlogPost);
router.patch("/:id/likeedBlogPost", likeBlogPost);

module.exports = router;
