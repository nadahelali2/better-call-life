import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Replace with your Laravel API URL
  withCredentials: true, // Send cookies with requests

});


export default api;
