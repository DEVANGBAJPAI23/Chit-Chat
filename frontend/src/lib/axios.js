import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://chit-chat-4olf.onrender.com/api"
      : "/api",
  withCredentials: true,
});
