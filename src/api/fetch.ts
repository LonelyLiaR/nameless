import Axios from "axios";
import { GITHUB_API_URL } from "./config";

export default (options: object) => Axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    Accept: "application/vnd.github.v3+json"
  }
})(options);