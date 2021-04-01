import http from "./httpService";
import jwt_decode from "jwt-decode";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/auth";
const tokenKey = "token";

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

http.setJwt(getJwt());

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwt_decode(jwt);
  } catch (error) {
    return null;
  }
}
