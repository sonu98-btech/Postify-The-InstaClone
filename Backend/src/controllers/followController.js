const mongoose = require("mongoose");
const userModel = require("../models/user.model");
const followModel = require("../models/follow.model");
const followUserController = async (req, res) => {
  const userId = req.user.id;
  const { userId: followUserId } = req.params;
  const isUserExist = await userModel.findOne({ _id: followUserId });
  if (!isUserExist) {
    return res.status(404).json({ message: "User not found" });
  }
  if (userId === followUserId) {
    return res.status(400).json({ message: "You cannot follow yourself" });
  }
  const alreadyFollowing = await followModel.findOne({
    follower: userId,
    following: followUserId,
  });
  if (alreadyFollowing) {
    return res
      .status(400)
      .json({ message: "You are already following this user" });
  }
  const newFollow = await followModel.create({
    follower: userId,
    following: followUserId,
  });
  res
    .status(201)
    .json({ message: "User followed successfully", follow: newFollow });
};
const unfollowUserController = async (req, res) => {
  const userId = req.user.id;
  const { userId: unfollowUserId } = req.params;
  const follow = await followModel.findOne({
    follower: userId,
    following: unfollowUserId,
  });
  if (!follow) {
    return res.status(400).json({ message: "You are not following this user" });
  }
  await followModel.deleteOne({ follower: userId, following: unfollowUserId });
  res.status(200).json({ message: "User unfollowed successfully" });
};
const getFollowersController = async (req, res) => {
  try {
    const userId = req.user.id;
    const followerDocs = await followModel
      .find({ following: userId })
      .select("follower");
    const followerIds = followerDocs.map((doc) => doc.follower);
    const followers = await userModel
      .find({ _id: { $in: followerIds } })
      .select("username profilePicture");
    res
      .status(200)
      .json({ message: "Followers fetched successfully", followers });
  } catch (error) {
    console.error("Error fetching followers:", error);
    res
      .status(500)
      .json({ message: "Error fetching followers", error: error.message });
  }
};
const getFollowingController = async (req, res) => {
  try {
    const userId = req.user.id;
    const followingDocs = await followModel
      .find({ follower: userId })
      .select("following");
    const followingIds = followingDocs.map((doc) => doc.following);
    const following = await userModel
      .find({ _id: { $in: followingIds } })
      .select("username profilePicture");
    res
      .status(200)
      .json({ message: "Following fetched successfully", following });
  } catch (error) {
    console.error("Error fetching following:", error);
    res
      .status(500)
      .json({ message: "Error fetching following", error: error.message });
  }
};

const getSuggestedUsersController = async (req, res) => {
  try {
    const currentUserId = req.user.id;

    // get users I follow
    const followingUsers = await followModel.find({
      follower: currentUserId,
    });

    // extract ids only
    const followingIds = followingUsers.map((follow) => follow.following);

    // remove myself
    followingIds.push(currentUserId);

    // get suggested users
    const suggestedUsers = await userModel
      .find({
        _id: {
          $nin: followingIds,
        },
      })
      .select("username profilePicture");

    return res.status(200).json({
      users: suggestedUsers,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  followUserController,
  unfollowUserController,
  getFollowersController,
  getFollowingController,
  getSuggestedUsersController,
};
