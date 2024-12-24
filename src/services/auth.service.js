import apiClient from "./apiClient";
import { jwtDecode } from "jwt-decode";

export class AuthService {
  static async login(email, password) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.post("/auth/login", { email, password });
      const { token } = response.data;
      const decodedToken = AuthService.decodeToken(token);
      localStorage.setItem("authToken", token);
      localStorage.setItem("fullname", decodedToken.fullname);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async signUp(firstname, lastname, email, password) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apiClient.post("/auth/sign-up", {
        firstname,
        lastname,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static logout() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
  }

  static decodeToken(token) {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error("Invalid token format", error);
      return null;
    }
  }

  static isTokenExpired() {
    const token = localStorage.getItem("authToken");
    if (!token) return true;
    const decodedToken = this.decodeToken(token);
    return !decodedToken || Date.now() > decodedToken.exp * 1000;
  }

  static isAuthenticated() {
    const token = localStorage.getItem("authToken");
    return token && !this.isTokenExpired();
  }
}
