import Fetch from "./fetch";
import { USERNAME } from "../config";

export const getOwnUserInfo = async (data = {}) => {
  const res = await Fetch({
    url: `/users/${USERNAME}`,
    method: "GET",
    data
  });
  return res.data;
};
