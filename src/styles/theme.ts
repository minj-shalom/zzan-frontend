"use client";

import baseStyled, {
  css,
  CSSProp,
  ThemedStyledInterface,
} from "styled-components";

const sizes: { [key: string]: number } = {
  mobile: 360,
  tablet: 768,
  laptop: 1280,
  desktop: 1920,
};

type BackQuoteArgs = string[];

interface Media {
  mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
  laptop: (...args: BackQuoteArgs) => CSSProp | undefined;
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
  mobile: () => undefined,
  tablet: () => undefined,
  laptop: () => undefined,
  desktop: () => undefined,
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
  switch (label) {
    case "desktop":
      acc.desktop = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (min-width: ${sizes.laptop}px) {
            ${args}
          }
        `;
      break;
    case "laptop":
      acc.laptop = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (min-width: ${sizes.tablet}px) and (max-width: ${sizes.laptop}px) {
            ${args}
          }
        `;
      break;
    case "tablet":
      acc.tablet = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (min-width: ${sizes.mobile}px) and (max-width: ${sizes.tablet}px) {
            ${args}
          }
        `;
      break;
    case "mobile":
      acc.mobile = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (max-width: ${sizes.mobile}px) {
            ${args}
          }
        `;
      break;
    default:
      break;
  }
  return acc;
}, media);

const colors = {
  white: "#ffffff",
  black: "#000000",
};

const secondaryColors = {};
const fontSizes: string[] = [];

export const theme = {
  colors,
  fontSizes,
  secondaryColors,
  media,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
