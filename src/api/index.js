import Fetch from "./fetch";
import { USERNAME, REPO } from "config";

export const getOwnUserInfo = async () => {
  const res = await Fetch({
    url: `/users/${USERNAME}`,
    method: "GET"
  });
  return res.data;
};

export const getArchives = async () => {
  const res = await Fetch({
    url: `/repos/${USERNAME}/${
      typeof REPO === "string" && REPO !== "" ? REPO : USERNAME + ".github.io"
    }/issues`,
    method: "GET"
  });
  return res.data;
};

export const getPost = async number => {
  const res = await Fetch({
    url: `/repos/${USERNAME}/${
      typeof REPO === "string" && REPO !== "" ? REPO : USERNAME + ".github.io"
    }/issues/${number}`,
    method: "GET"
  });
  return res.data;
};

export const markdownParser = async text => {
  const res = await Fetch({
    url: `/markdown`,
    method: "POST",
    data: {
      text,
      mode: "gfm",
      context: "github/gollum"
    }
  });
  return res.data;
};
