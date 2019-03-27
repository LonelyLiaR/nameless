import CustomConfigs from "../custom-configs.json";
import setDefaultConfigs from "./default";

const configs = setDefaultConfigs(CustomConfigs) as IConfigs;

export const BLOG_TITLE = configs.BLOG_TITLE;
export const USERNAME = configs.USERNAME;
export const REPO = configs.REPO;
export const AVATAR = configs.AVATAR;
export const NICKNAME = configs.NICKNAME;
export const BIO = configs.BIO;
export const ARCHIVES_TITLE = configs.ARCHIVES_TITLE;
export const LABELS_TITLE = configs.LABELS_TITLE;
export const SOCIALS_LIST = configs.SOCIALS_LIST;
export const DATE_FORMAT = configs.DATE_FORMAT;
export const EMPTY_MESSAGE = configs.EMPTY_MESSAGE;
export const ERROR_TITLE = configs.ERROR_TITLE;
export const ERROR_MESSAGE = configs.ERROR_MESSAGE;
export const ERROR_NAV = configs.ERROR_NAV;
export default configs;