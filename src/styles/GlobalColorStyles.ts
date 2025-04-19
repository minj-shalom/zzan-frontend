export type fontColorType =
  | "special"
  | "white"
  | "weak"
  | "semiWeak"
  | "normal"
  | "strong"
  | "black"
  | "green"
  | "yellow"
  | "red";

/**
 * @summary  "special" : #2c9ee3 | "white" : #ffffff | "weak" : #bfbfbf | "semiWeak" : #595959 | "normal" : #262626 | "strong" : #141414 | "black" : #000000 | "green" : #4ca154 | "yellow" : #ffd666 | "red" : #ca3a31
 */
export const setFontColor = (fontColor?: fontColorType) => {
  switch (fontColor) {
    case "special":
      return "var(--font-color-special)";
    case "white":
      return "var(--font-color-white)";
    case "weak":
      return "var(--font-color-weak)";
    case "semiWeak":
      return "var(--font-color-semi-weak)";
    case "normal":
      return "var(--font-color-normal)";
    case "strong":
      return "var(--font-color-strong)";
    case "black":
      return "var(--font-color-black)";
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
  | "specialHover"
  | "white"
  | "extraWeak"
  | "weak"
  | "semiWeak"
  | "normal"
  | "semiStrong"
  | "strong"
  | "extraStrong"
  | "black"
  | "green"
  | "yellow"
  | "red";

/**
 * @summary  "special" : #2c9ee3 | "specialHover" : #2c9ee3d9 | "white" : #ffffff | "extraWeak" : #fafafa | "weak" : #f0f0f0 | "semiWeak" : #d9d9d9 | "normal" : #8c8c8c | "semiStrong" : #434343 | "strong" : #262626 | "extraStrong" : #141414 | "black" : #000000 | "green" : #f2fdf5 | "yellow" : #fefcea | "red" : #fcf2f2
 */
export const setBackgroundColor = (backgroundColor?: backgroundColorType) => {
  switch (backgroundColor) {
    case "special":
      return "var(--background-color-special)";
    case "specialHover":
      return "var(--background-color-special-hover)";
    case "white":
      return "var(--background-color-white)";
    case "extraWeak":
      return "var(--background-color-extra-weak)";
    case "weak":
      return "var(--background-color-weak)";
    case "semiWeak":
      return "var(--background-color-semi-weak)";
    case "normal":
      return "var(--background-color-normal)";
    case "semiStrong":
      return "var(--background-color-semi-strong)";
    case "strong":
      return "var(--background-color-strong)";
    case "extraStrong":
      return "var(--background-color-extra-strong)";
    case "black":
      return "var(--background-color-black)";
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
