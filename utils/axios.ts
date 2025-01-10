// axios
import axios from "axios";

export const serverUrl =
  process.env.NEXT_PUBLIC_PROD_SERVER_URL || "http://localhost:5000";

export const axiosCustom = axios.create({
  baseURL: serverUrl,
  withCredentials: true,
});
