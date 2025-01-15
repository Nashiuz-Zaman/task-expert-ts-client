// axios
import axios from "axios";

export const serverUrl =
  process.env.NEXT_PUBLIC_PROD_SERVER_URL || "http://localhost:5000/api/v1";

export const formDataHeader = {
  headers: { "Content-Type": "multipart/form-data" },
};

export const axiosCustom = axios.create({
  baseURL: serverUrl,
  withCredentials: true,
});
