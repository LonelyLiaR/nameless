interface ISocialsList {
  [socialName: string]: string;
}

declare interface ICustomConfigs {
  BLOG_TITLE: string;
  USERNAME: string;
  REPO?: string;
  AVATAR?: string;
  NICKNAME?: string;
  BIO?: string;
  ARCHIVES_TITLE?: string;
  LABELS_TITLE?: string;
  SOCIALS_LIST?: ISocialsList;
  DATE_FORMAT?: string;
  EMPTY_MESSAGE?: string;
  ERROR_TITLE?: string;
  ERROR_MESSAGE?: string;
  ERROR_NAV?: string;
}

declare interface IConfigs {
  readonly BLOG_TITLE: string;
  readonly USERNAME: string;
  readonly REPO: string;
  readonly AVATAR: string;
  readonly NICKNAME: string;
  readonly BIO: string;
  readonly ARCHIVES_TITLE: string;
  readonly LABELS_TITLE: string;
  readonly SOCIALS_LIST: ISocialsList;
  readonly DATE_FORMAT: string;
  readonly EMPTY_MESSAGE: string;
  readonly ERROR_TITLE: string;
  readonly ERROR_MESSAGE: string;
  readonly ERROR_NAV: string;
}