import "styled-components";

declare module "styled-components" {
  export interface ITheme {
    primaryColor: string;
    textColor: string & {
      light?: string;
    };
    bodyBackgroundColor: string;
  }
}