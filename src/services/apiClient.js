import axios from "axios";
import { AuthService } from "./auth.service";
import router from "../routes/index";
import { useToast } from "vue-toast-notification";
import environment from "@/environments/environment";
const $toast = useToast();

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
    }, 1000); // Match the duration of the fade-out animation
  }
};

const baseURL = environment.API_BASE_URL;

const apiClient = axios.create({
  baseURL: baseURL,
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

    // Handle specific connection refused error
    if (error.code === "ERR_NETWORK") {
      //alert("Unable to connect to the server. Please try again later.");
      $toast.error(
        `Unable to connect to the server (${baseURL}). Please try again later.`,
        {
          position: "top-right",
          duration: 5000,
          pauseOnHover: true,
        }
      );
    }

    if (error.response && error.response.status === 401) {
      AuthService.logout();
      router.push("/admin-login");
    } else {
      // General error handling (e.g., 500, 404, etc.)
      //alert("An error occurred. Please try again later.");

      $toast.error(`An error occurred. Please try again later.`, {
        position: "top-right",
        duration: 5000,
        pauseOnHover: true,
      });
    }

    return Promise.reject(error);
  }
);

export default apiClient;
