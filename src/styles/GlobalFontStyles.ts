export type fontSizeType =
  | "small"
  | "normal"
  | "medium"
  | "large"
  | "big"
  | "strong"
  | "extraLarge"
  | "max";

/**
 * @summary "small" : 12px | "normal" : 14px | "medium" : 16px  | "large" : 20px  | "big" : 24px  | "strong" : 32px | "extraLarge" : 40px | "max" : 60px
 */
export const setFontSize = (fontSize?: fontSizeType) => {
  switch (fontSize) {
    case "small":
      return "var(--font-size-small)";
    case "normal":
      return "var(--font-size-normal)";
    case "medium":
      return "var(--font-size-medium)";
    case "large":
      return "var(--font-size-large)";
    case "big":
      return "var(--font-size-big)";
    case "strong":
      return "var(--font-size-strong)";
    case "extraLarge":
      return "var(--font-size-extra-large)";
    case "max":
      return "var(--font-size-max)";
    default:
      return "var(--font-size-normal)";
  }
};

export type fontWeightType =
  | "thin"
  | "extraLight"
  | "light"
  | "normal"
  | "medium"
  | "semiBold"
  | "bold"
  | "extraBold"
  | "black";

/**
 * @summary "thin" : 100 | "extraLight" : 200 | "light" : 300 | "normal" : 400 | "medium" : 500 | "semiBold" : 600 | "bold" : 700 | "extraBold" : 800 | "black" : 900
 */
export const setFontWeight = (fontWeight?: fontWeightType) => {
  switch (fontWeight) {
    case "thin":
      return "var(--font-weight-thin)";
    case "extraLight":
      return "var(--font-weight-extra-light)";
    case "light":
      return "var(--font-weight-light)";
    case "normal":
      return "var(--font-weight-normal)";
    case "medium":
      return "var(--font-weight-medium)";
    case "semiBold":
      return "var(--font-weight-semi-bold)";
    case "bold":
      return "var(--font-weight-bold)";
    case "extraBold":
      return "var(--font-weight-extra-bold)";
    case "black":
      return "var(--font-weight-black)";
    default:
      return "var(--font-weight-normal)";
  }
};

export type lineHeightType = "normal" | "medium" | "space";

/**
 * @summary "normal" : 100% | "medium" : 120% | "space" : 150%
 */
export const setLineHeight = (lineHeightType?: lineHeightType) => {
  switch (lineHeightType) {
    case "normal":
      return "var(--font-line-height-normal)";
    case "medium":
      return "var(--font-line-height-medium)";
    case "space":
      return "var(--font-line-height-space)";
    default:
      return "var(--font-line-height-normal)";
  }
};
