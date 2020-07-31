import { ITheme } from "styled-components";

/** constants. */
export const primaryColor = "#22BAD9";
export const textColor = Object.assign("#F5F6F7", {
  light: "#FFFFFF",
});
export const bodyBackgroundColor = "#1D2330";

const NamelessDarkTheme: Readonly<Partial<ITheme>> = {
  primaryColor,
  textColor,
  bodyBackgroundColor,
};

export default Object.freeze(NamelessDarkTheme);
