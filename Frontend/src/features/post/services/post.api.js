import axios from "axios";

const api = axios.create({
  baseURL: "/api/post",
  withCredentials: true,
});

export const createPost = async (image, caption) => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("caption", caption);
  const response = await api.post("/create", formData);
  return response.data;
};

export const getAllFeedPost = async () => {
  const response = await api.get("/feed");
  return response.data;
};
export const getUserPost = async () => {
  const response = await api.get("/user");
  return response.data;
};
export const getPostDetail = async (postId) => {
  const response = await api.get(`/${postId}`);
  return response.data;
};
