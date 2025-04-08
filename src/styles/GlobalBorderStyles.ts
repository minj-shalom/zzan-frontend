export type borderType =
  | "extraWeak"
  | "weak"
  | "semiWeak"
  | "normal"
  | "strong"
  | "white"
  | "purple"
  | "error"
  | "transparent";

/**
 * @summary  "extraWeak" : 1px solid #f0f0f0 | "weak" : 1px solid #bfbfbf | "semiWeak" : 1px solid #595959 | "normal" : 1px solid #262626 | "strong" : 1px solid #141414 | "white" : 1px solid #ffffff | "purple" : 1px solid #722ed1 | "error" : 1px solid #f5222d | "transparent" : 1px solid transparent
 */
export const setBorder = (borderColor?: borderType) => {
  switch (borderColor) {
    case "extraWeak":
      return "var(--border-extra-weak)";
    case "weak":
      return "var(--border-weak)";
    case "semiWeak":
      return "var(--border-semi-weak)";
    case "normal":
      return "var(--border-normal)";
    case "strong":
      return "var(--border-strong)";
    case "white":
      return "var(--border-white)";
    case "purple":
      return "var(--border-purple)";
    case "error":
      return "var(--border-error)";
    case "transparent":
      return "var(--border-transparent)";
    default:
      return "var(--border-normal)";
  }
};

export type borderRadiusType =
  | "small"
  | "normal"
  | "large"
  | "strong"
  | "circle";

/**
 * @summary "small" : 4px | "normal" : 8px | "large" : 16px | "strong" : 32px | "circle" : 50%;
 */
export const setBorderRadius = (borderRadius?: borderRadiusType) => {
  switch (borderRadius) {
    case "small":
      return "var(--border-radius-small)";
    case "normal":
      return "var(--border-radius-normal)";
    case "large":
      return "var(--border-radius-large)";
    case "strong":
      return "var(--border-radius-strong)";
    case "circle":
      return "var(--border-radius-circle)";
    default:
      return "var(--border-radius-normal)";
  }
};
