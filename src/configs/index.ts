import CustomConfigs from "../custom-configs.json";
import DefaultConfigs from "./default";

const configs = Object.assign({}, DefaultConfigs, CustomConfigs) as IConfigs;

export const BLOG_TITLE = configs.BLOG_TITLE;
export const USERNAME = configs.USERNAME;
export const REPO = configs.REPO;
export const AVATAR = configs.AVATAR;
export const NICKNAME = configs.NICKNAME;
export const ARCHIVES_TITLE = configs.ARCHIVES_TITLE;
export const LABELS_TITLE = configs.LABELS_TITLE;
export const SOCIALS_LIST = configs.SOCIALS_LIST;
export const DATE_FORMAT = configs.DATE_FORMAT;
export const EMPTY_MESSAGE = configs.EMPTY_MESSAGE;
export const ERROR_MESSAGE = configs.ERROR_MESSAGE;
export default configs;