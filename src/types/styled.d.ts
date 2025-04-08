import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: string;
    colors: {
      white: string;
      black: string;
    };
    fontSizes: string[];
    secondaryColors: object;
    media: any;
  }
}
