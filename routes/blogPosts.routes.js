const express = require("express");

const {
  getAllBlogPosts,
  addBlogPost,
  getSinglePost,
  updateSingleBlogPost,
  removeSingleBlogPost,
  likeBlogPost,
  commentsCheck1BlogPost,
  commentsCheck2BlogPost,
  commentsCheck3BlogPost,
  commentsCheck4BlogPost,
} = require("../controllers/blogPosts.controller.js");

const router = express.Router();

router.get("/", getAllBlogPosts);
router.post("/", addBlogPost);
router.get("/:id", getSinglePost);
router.patch("/:id", updateSingleBlogPost);
router.delete("/:id", removeSingleBlogPost);
router.patch("/:id/likeedBlogPost", likeBlogPost);
router.patch("/:id/commentsCheck1BlogPost", commentsCheck1BlogPost);
router.patch("/:id/commentsCheck2BlogPost", commentsCheck2BlogPost);
router.patch("/:id/commentsCheck3BlogPost", commentsCheck3BlogPost);
router.patch("/:id/commentsCheck4BlogPost", commentsCheck4BlogPost);

module.exports = router;
