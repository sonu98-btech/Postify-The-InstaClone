const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username must be filled"],
    unique: [true, "username must be unique"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email must be unique"],
  },
  name: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: "",
  },
  profilePicture: {
    type: String,
    default:
      "https://ik.imagekit.io/yuhb2zywe/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.webp?updatedAt=1779106271251",
  },
});

const userModel = mongoose.model("User", userSchema);
if (!mongoose.models.user) {
  mongoose.model("user", userSchema);
}
module.exports = userModel;
