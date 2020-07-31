import { ITheme } from 'styled-components';

/** constants. */
export const primaryColor = "#22BAD9";
export const textColor = Object.assign("#333333", {
  light: "#999999",
});
export const bodyBackgroundColor = "#FFFFFF";

const NamelessTheme: Readonly<Partial<ITheme>> = {
  primaryColor,
  textColor,
  bodyBackgroundColor,
};

export default Object.freeze(NamelessTheme);
