export type fontColorType =
  | "weak"
  | "semiWeak"
  | "normal"
  | "strong"
  | "white"
  | "special"
  | "green"
  | "yellow"
  | "red";

/**
 * @summary  "weak" : #bfbfbf | "semiWeak" : #595959 | "normal" : #262626 | "strong" : #141414 | "white" : #ffffff | "special" : #2c9ee3 | "green" : #4ca154 | "yellow" : #ffd666 | "red" : #ca3a31
 */
export const setFontColor = (fontColor?: fontColorType) => {
  switch (fontColor) {
    case "weak":
      return "var(--font-color-weak)";
    case "semiWeak":
      return "var(--font-color-semi-weak)";
    case "normal":
      return "var(--font-color-normal)";
    case "strong":
      return "var(--font-color-strong)";
    case "white":
      return "var(--font-color-white)";
    case "special":
      return "var(--font-color-special)";
    case "green":
      return "var(--font-color-green)";
    case "yellow":
      return "var(--font-color-yellow)";
    case "red":
      return "var(--font-color-red)";
    default:
      return "var(--font-color-normal)";
  }
};

export type backgroundColorType =
  | "special"
  | "white"
  | "black"
  | "weak"
  | "semiWeak"
  | "normal"
  | "green"
  | "yellow"
  | "red";

/**
 * @summary  "special" : #2c9ee3 | "white" : #ffffff | "black" : #000000 | "weak" : #f0f0f0 | "semiWeak" : #d9d9d9 | "normal" : #8c8c8c | "green" : #f2fdf5 | "yellow" : #fefcea | "red" : #fcf2f2
 */
export const setBackgroundColor = (backgroundColor?: backgroundColorType) => {
  switch (backgroundColor) {
    case "special":
      return "var(--background-color-special)";
    case "white":
      return "var(--background-color-white)";
    case "black":
      return "var(--background-color-black)";
    case "weak":
      return "var(--background-color-weak)";
    case "semiWeak":
      return "var(--background-color-semi-weak)";
    case "normal":
      return "var(--background-color-normal)";
    case "green":
      return "var(--background-color-green)";
    case "yellow":
      return "var(--background-color-yellow)";
    case "red":
      return "var(--background-color-red)";
    default:
      return "var(--background-color-normal)";
  }
};
