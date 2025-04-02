import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Login API
export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials, { withCredentials: true });
  return response.data;
};

// Register API
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData, { withCredentials: true });
  return response.data;
};
