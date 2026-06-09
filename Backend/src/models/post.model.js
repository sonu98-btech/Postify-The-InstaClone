const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    caption: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, strict: true },
);
const postModel = mongoose.model("post", postSchema);
module.exports = postModel;
