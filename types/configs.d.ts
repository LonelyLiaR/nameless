declare interface IConfigs {
  /** The blog's title. */
  TITLE?: string;

  /** What should I call you ? */
  NICKNAME?: string;

  /** You kind of need to say something. */
  BIO?: string;

  /** Your avatar's link path. */
  AVATAR?: string;

  /** The blog will use the name of this theme. */
  THEME: string;

  /**
   * The blog will use the name of this theme when the blog is Dark Mode.
   * If you set this, `SHOW_DARK_THEME_MODE` will be `true` by default.
   */
  DARK_THEME?: string;

  /**
   * The blog will show Dark Mode toggle button when it is `true`.
   * Default is `false`. If you set `DARK_THEME` and it will be `true`.
   * */
  SHOW_DARK_MODE_TOGGLE?: boolean;
}