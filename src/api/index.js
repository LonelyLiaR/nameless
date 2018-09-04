import Fetch from "./fetch";
import { USERNAME, REPO } from "config";

export const getOwnUserInfo = async () => {
  return await Fetch({
    url: `/users/${USERNAME}`,
    method: "GET"
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return false;
    });
};

export const getArchives = async () => {
  return await Fetch({
    url: `/repos/${USERNAME}/${
      !!REPO && typeof REPO === "string" && REPO !== "" ? REPO : USERNAME + ".github.io"
    }/issues`,
    method: "GET"
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return false;
    });
};

export const getPost = async number => {
  return await Fetch({
    url: `/repos/${USERNAME}/${
      !!REPO && typeof REPO === "string" && REPO !== "" ? REPO : USERNAME + ".github.io"
    }/issues/${number}`,
    method: "GET"
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return false;
    });
};

export const markdownParser = async text => {
  return await Fetch({
    url: `/markdown`,
    method: "POST",
    data: {
      text,
      mode: "gfm",
      context: "github/gollum"
    }
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
      return false;
    });
};
