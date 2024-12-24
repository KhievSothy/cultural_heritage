import axios from "axios";
import { AuthService } from "./auth.service";
import router from "../routes/index";

// Track active requests
let activeRequests = 0;

const showLoader = () => {
  const loader = document.getElementById("global-loader");
  if (loader) {
    loader.classList.add("fade-in");
    loader.classList.remove("fade-out");
    loader.style.display = "block";
  }
};

const hideLoader = () => {
  const loader = document.getElementById("global-loader");
  if (loader) {
    loader.classList.add("fade-out");
    loader.classList.remove("fade-in");
    setTimeout(() => {
      if (activeRequests <= 0) loader.style.display = "none";
    }, 300); // Match the duration of the fade-out animation
  }
};

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    activeRequests++;
    showLoader();
    return config;
  },
  (error) => {
    activeRequests--;
    if (activeRequests <= 0) hideLoader();
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    activeRequests--;
    if (activeRequests <= 0) hideLoader();
    return response;
  },
  (error) => {
    activeRequests--;
    if (activeRequests <= 0) hideLoader();
    if (error.response && error.response.status === 401) {
      AuthService.logout();
      //window.location.href = "/admin-login";
      router.push("/admin-login");
    }
    return Promise.reject(error);
  }
);

export default apiClient;
