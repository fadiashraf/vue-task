import Axios from "axios";
import {config } from "../config";
const API_URL = config.API_URL;
let axios;

axios = Axios.create({
  baseURL: API_URL,
  headers: {
    responseType: "json",
  },
});
axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 404) {
      throw new Error("Url not found");
    }
    throw err;
  }
);
export const getData = () => {
  return axios.get();
};
