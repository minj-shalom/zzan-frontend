import Axios from "axios";
import { API_ENDPOINT } from "./env";

export const axios = Axios.create({
  baseURL: `${API_ENDPOINT}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
