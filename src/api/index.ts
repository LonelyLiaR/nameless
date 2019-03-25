import Fetch from "./fetch";
import { USERNAME, REPO } from "configs";

export const getOwnUserInfo = async () =>
  await Fetch({
    url: `/users/${USERNAME}`,
    method: "GET"
  })
    .then(res => res.data)
    .catch(err => err);

export const getArchives = async () =>
  await Fetch({
    url: `/repos/${USERNAME}/${
      !!REPO && typeof REPO === "string" && REPO !== ""
        ? REPO
        : USERNAME + ".github.io"
    }/issues`,
    method: "GET"
  })
    .then(res => res.data)
    .catch(err => err);

export const getPost = async (number: number | string) =>
  await Fetch({
    url: `/repos/${USERNAME}/${
      !!REPO && typeof REPO === "string" ? REPO : USERNAME + ".github.io"
    }/issues/${number}`,
    method: "GET"
  })
    .then(res => res.data)
    .catch(err => err);

export const markdownParser = async (text: string) =>
  await Fetch({
    url: `/markdown`,
    method: "POST",
    data: {
      text,
      mode: "gfm",
      context: "github/gollum"
    }
  })
    .then(res => res.data)
    .catch(err => err);
