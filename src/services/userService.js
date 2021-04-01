import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/users";

export function register(user) {
  http.post(apiEndPoint, {
    email: user.email,
    name: user.name,
    password: user.password,
  });
}
