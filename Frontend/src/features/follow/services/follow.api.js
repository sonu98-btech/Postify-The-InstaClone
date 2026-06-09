import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/follow",
  withCredentials: true,
});

export const followUser = async (userId) => {
  const response = await api.post(`/${userId}`);
  return response.data;
};

export const unfollowUser = async (userId) => {
  const response = await api.delete(`/${userId}`);
  return response.data;
};

export const getFollowers = async () => {
  const response = await api.get("/followers");
  return response.data;
};

export const getFollowing = async () => {
  const response = await api.get("/following");
  return response.data;
};

export const getSuggestedUsers = async () => {
  const response = await api.get("/suggestedUsers");
  return response.data;
  console.log("suggested user ", response.data);
};
