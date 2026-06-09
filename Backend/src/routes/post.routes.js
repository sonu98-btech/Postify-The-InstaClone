const express = require("express")
const postRouter = express.Router();
const postController = require("../controllers/postController")
const authMiddleware = require("../middleware/authMIddleware")
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})
const Imagekit = require("@imagekit/nodejs")
const {tofile} = require("@imagekit/nodejs")

const imagekit = new Imagekit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
})
//create post route
// @api - localhost:3000/api/post/create
postRouter.post("/create",upload.single("image"),authMiddleware,postController.createPostController)
//get feed posts route
// @api - localhost:3000/api/post/feed
postRouter.get("/feed",authMiddleware,postController.getFeedPostsController)
//get user posts route
// @api - localhost:3000/api/post/user
postRouter.get("/user",authMiddleware,postController.getUserPostsController)
//get single post details route
// @api - localhost:3000/api/post/:postId
postRouter.get("/:postId",authMiddleware,postController.getPostDetailsController)
//delete post route
// @api - localhost:3000/api/post/:postId
postRouter.delete("/:postId",authMiddleware,postController.deletePostController)

module.exports = postRouter;