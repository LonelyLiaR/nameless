interface ISocialsList {
  [socialName: string]: string;
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
  readonly ERROR_MESSAGE: string;
}
