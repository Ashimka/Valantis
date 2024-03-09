import axios from "axios";
import { authHeaders } from "../utils/authHeaders";

const BASE_URL = "https://api.valantis.store:41000";

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Auth": `${authHeaders}`,
  },
});
