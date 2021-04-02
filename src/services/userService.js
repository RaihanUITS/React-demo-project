import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/users";

export function getUsers() {
  return http.get(apiEndPoint);
}

export function register(user) {
  return http.post(apiEndPoint, {
    email: user.email,
    name: user.name,
    password: user.password,
  });
}
