const express = require('express');
const followRouter = express.Router();
const followController = require("../controllers/followController")
const authMiddleware = require("../middleware/authMIddleware")

// Specific routes FIRST (must come before :userId)
followRouter.get("/followers",authMiddleware,followController.getFollowersController)
followRouter.get("/following",authMiddleware,followController.getFollowingController)
followRouter.get("/suggestedUsers",authMiddleware,followController.getSuggestedUsersController)

// Dynamic routes AFTER
followRouter.post("/:userId",authMiddleware,followController.followUserController)
followRouter.delete("/:userId",authMiddleware,followController.unfollowUserController)  

module.exports = followRouter;