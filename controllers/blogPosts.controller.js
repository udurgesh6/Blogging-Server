const express = require("express");
const mongoose = require("mongoose");
const BlogPost = require("../models/blogs");

const getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addBlogPost = async (req, res) => {
  const { title, description, fileUpload, creator, tags } = req.body;

  const createNewPost = new BlogPost({
    title,
    description,
    fileUpload,
    creator,
    tags,
  });

  try {
    await createNewPost.save();
    res.status(201).json(createNewPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getSinglePost = async (req, res) => {
  const { id } = req.params;

  try {
    const singlepost = await BlogPost.findById(id);

    res.status(200).json(singlepost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateSingleBlogPost = async (req, res) => {
  const { id } = req.params;
  const { title, description, creator, fileUpload, tags, comment } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`post ${id} not found`);

  const updatedBlogPost = {
    creator,
    title,
    description,
    tags,
    fileUpload,
    _id: id,
  };
  await BlogPost.findByIdAndUpdate(id, updatedBlogPost, { new: true });
  res.json(updatedBlogPost);
};

const removeSingleBlogPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`post ${id} not found`);

  await BlogPost.findByIdAndRemove(id);

  res.json({ message: "Successfully deleted" });
};

const likeBlogPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await BlogPost.findById(id);

  const updatedBlogPost = await BlogPost.findByIdAndUpdate(
    id,
    { upvote: post.upvote + 1 },
    { new: true }
  );

  res.json(updatedBlogPost);
};

const commentsCheck1BlogPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await BlogPost.findById(id);
  console.log([...post.CommentsCheck1]);
  const updatedBlogPost = await BlogPost.findByIdAndUpdate(
    id,
    { CommentsCheck1: [...post.CommentsCheck1, "Something"] },
    { new: true }
  );

  res.json(updatedBlogPost);
};

const commentsCheck2BlogPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await BlogPost.findById(id);
  console.log([...post.CommentsCheck2]);
  const updatedBlogPost = await BlogPost.findByIdAndUpdate(
    id,
    { CommentsCheck2: [...post.CommentsCheck2, { name: "Durgesh" }] },
    { new: true }
  );

  res.json(updatedBlogPost);
};

const commentsCheck3BlogPost = async (req, res) => {
  const { id } = req.params;
  const { name, description, email } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await BlogPost.findById(id);
  console.log([...post.CommentsCheck3]);
  const updatedBlogPost = await BlogPost.findByIdAndUpdate(
    id,
    {
      CommentsCheck3: [
        ...post.CommentsCheck3,
        { name: name, description: description, email: email },
      ],
    },
    { new: true }
  );

  res.json(updatedBlogPost);
};

const commentsCheck4BlogPost = async (req, res) => {
  const { id } = req.params;
  const { name, description, email } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await BlogPost.findById(id);
  console.log([...post.CommentsCheck4]);
  const updatedBlogPost = await BlogPost.findByIdAndUpdate(
    id,
    {
      CommentsCheck4: [
        ...post.CommentsCheck4,
        { name: name, description: description, email: email },
      ],
    },
    { new: true }
  );

  res.json(updatedBlogPost);
};

module.exports = {
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
};
