import configs from "@/configs";
import { isString } from "@/utils/whatTypeIs";

const { TITLE, NICKNAME } = configs;

export default {
  globalTitle: isString(TITLE)
    ? (TITLE as string)
    : isString(NICKNAME)
    ? `${NICKNAME}'s Blog`
    : "Asa",

  isDarkMode: false,
  setDarkMode(isDarkMode: boolean) {
    this.isDarkMode = isDarkMode;
  },
};
