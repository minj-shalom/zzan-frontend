export type BoxShadowType = "hover" | "weak";

/**
 * @summary  "hover" : 4px 4px 8px 0px rgba(0, 0, 0, 0.20) | "weak" : 2px 2px 4px 0px rgba(0, 0, 0, 0.20)
 */
export const setBoxShadow = (type?: BoxShadowType) => {
  switch (type) {
    case "hover":
      return "var(--box-shadow-hover)";
    case "weak":
      return "var(--box-shadow-weak)";

    default:
      return "var(--box-shadow-hover)";
  }
};
