import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/auth`,
  withCredentials: true,
});

export const registerUser = async (username, email, password) => {
  const response = await api.post("/register", { username, email, password });
  return response.data;
};

export const loginUser = async (username, password) => {
  const response = await api.post("/login", { username, password });
  return response.data;
};

export const getMe = async () => {
  const response = await api.get("/get-me");
  return response.data;
};
