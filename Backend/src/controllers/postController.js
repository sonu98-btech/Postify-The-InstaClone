const jwt = require("jsonwebtoken");
const postModel = require("../models/post.model");
const Imagekit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imagekit = new Imagekit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});
//create post controller
const createPostController = async (req, res) => {
  const uploadedfile = await imagekit.files.upload({
    file: await toFile(req.file.buffer, req.file.originalname),
    fileName: req.file.originalname,
    folder: "postify",
  });
  const user = req.user.id;
  const { caption } = req.body;
  const imgUrl = uploadedfile.url;

  const newPost = await postModel.create({
    user,
    caption,
    imgUrl,
  });

  const createdPost = await postModel
    .findById(newPost._id)
    .populate("user", "username profilePicture");

  res.status(201).json({
    message: "Post created successfully",
    post: createdPost || newPost,
  });
};

//get all feed posts controller
const getFeedPostsController = async (req, res) => {
  const userId = req.user.id;
  if (!userId) {
    return res.status(401).json({ message: "unauthorized,token not provided" });
  }
  const posts = await postModel
    .find()
    .populate("user", "username profilePicture")
    .sort({ createdAt: -1 });
  res.status(200).json({
    message: "Posts fetched successfully",
    posts,
  });
};
//get posts by user controller
const getUserPostsController = async (req, res) => {
  const userId = req.user.id;
  const posts = await postModel
    .find({ user: userId })
    .populate("user", "username profilePicture")
    .sort({ createdAt: -1 });
  res.status(200).json({
    message: "Posts fetched successfully",
    posts,
  });
};

//get single post details controller
const getPostDetailsController = async (req, res) => {
  const { postId } = req.params;
  const userId = req.user.id;
  const post = await postModel.findOne({
    _id: postId,
    user: userId,
  });
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.status(200).json({
    message: "Post fetched successfully",
    post,
  });
};
//delete user post controller
const deletePostController = async (req, res) => {
  const { postId } = req.params;
  const userId = req.user.id;
  const post = await postModel.findOneAndDelete({
    _id: postId,
    user: userId,
  });
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.status(200).json({
    message: "Post deleted successfully",
    post,
  });
};

module.exports = {
  createPostController,
  getFeedPostsController,
  getUserPostsController,
  getPostDetailsController,
  deletePostController,
};
