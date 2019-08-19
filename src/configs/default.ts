export default (customConfigs: ICustomConfigs) => {
  const configs = Object.assign({}, customConfigs);
  configs.REPO = !!customConfigs.REPO
    ? customConfigs.REPO
    : configs.USERNAME + ".github.io";
  configs.AVATAR = !!customConfigs.AVATAR ? customConfigs.AVATAR : "";
  configs.NICKNAME = !!customConfigs.NICKNAME
    ? customConfigs.NICKNAME
    : configs.USERNAME;
  configs.BIO = !!customConfigs.BIO ? customConfigs.BIO : "";
  configs.ARCHIVES_TITLE = !!customConfigs.ARCHIVES_TITLE
    ? customConfigs.ARCHIVES_TITLE
    : "Archives";
  configs.LABELS_TITLE = !!customConfigs.LABELS_TITLE
    ? customConfigs.LABELS_TITLE
    : "Labels";
  configs.SOCIALS_LIST =
    !!configs.SOCIALS_LIST &&
    Object.keys(customConfigs.SOCIALS_LIST as ISocialsList).length > 0
      ? customConfigs.SOCIALS_LIST
      : {};
  configs.DATE_FORMAT = !!customConfigs.DATE_FORMAT
    ? customConfigs.DATE_FORMAT
    : "MMMM DD, YYYY";
  configs.EMPTY_MESSAGE = !!customConfigs.EMPTY_MESSAGE
    ? customConfigs.EMPTY_MESSAGE
    : "Today is $_DATETIME_. It's empty here. 😴";
  configs.ERROR_TITLE = !!customConfigs.ERROR_TITLE
    ? customConfigs.ERROR_TITLE
    : "Error";
  configs.ERROR_MESSAGE = !!customConfigs.ERROR_MESSAGE
    ? customConfigs.ERROR_MESSAGE
    : "Sorry, the page you are looking for could not be found.";
  configs.ERROR_NAV = !!customConfigs.ERROR_NAV
    ? customConfigs.ERROR_NAV
    : "Back";
  return configs;
};
