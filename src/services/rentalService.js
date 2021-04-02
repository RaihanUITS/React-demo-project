import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/rentals";

export function saveRental(rental) {
  return http.post(apiEndPoint, rental);
}

export function getRentals() {
  return http.get(apiEndPoint);
}
