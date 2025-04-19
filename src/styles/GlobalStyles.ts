"use client";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`

${reset}
  * {
    box-sizing: border-box;
    font-family: "Pretendard";
    line-height: 150%;
  }
  :root {
    /* font color */
    --font-color-special: #2c9ee3;
    --font-color-white: #ffffff;
    --font-color-weak: #bfbfbf;
    --font-color-semi-weak: #595959;
    --font-color-normal: #262626;
    --font-color-strong: #141414;
    --font-color-black: #000000;
    --font-color-green: #4ca154;
    --font-color-yellow: #ffd666;
    --font-color-red: #ca3a31;

    /* font size */
    --font-size-small: 12px;
    --font-size-normal: 14px;
    --font-size-medium: 16px;
    --font-size-large: 20px;
    --font-size-big: 24px;
    --font-size-strong: 32px;
    --font-size-extra-large: 40px;
    --font-size-max: 60px;

    /* font weight */
    --font-weight-thin: 100;
    --font-weight-extra-light: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;
    --font-weight-extra-bold: 800;
    --font-weight-black: 900;

    /* line height */
    --font-line-height-normal: 100%;
    --font-line-height-medium: 120%;
    --font-line-height-space: 150%;

    /* background */
    --background-color-special: #2c9ee3;
    --background-color-special-hover: #2c9ee3d9;
    --background-color-white: #ffffff;
    --background-color-extra-weak: #fafafa;
    --background-color-weak: #f0f0f0;
    --background-color-semi-weak: #d9d9d9;
    --background-color-normal: #8c8c8c;
    --background-color-semi-strong: #434343;
    --background-color-strong: #262626;
    --background-color-extra-strong: #141414;
    --background-color-black: #000000;
    --background-color-green: #f2fdf5;
    --background-color-yellow: #fefcea;
    --background-color-red: #fcf2f2;

    /* border */
    --border-extra-weak: 1px solid #f0f0f0;
    --border-weak: 1px solid #bfbfbf;
    --border-semi-weak: 1px solid #595959;
    --border-normal: 1px solid #262626;
    --border-strong: 1px solid #141414;
    --border-white: 1px solid #ffffff;
    --border-special: 1px solid #2c9ee3;
    --border-error: 1px solid #f5222d;
    --border-transparent: 1px solid transparent;

    /* border radius*/
    --border-radius-small: 4px;
    --border-radius-normal: 8px;
    --border-radius-large: 16px;
    --border-radius-strong: 32px;
    --border-radius-circle: 50%;

    /* shadow */
    --box-shadow-hover: 4px 4px 8px 0px rgba(0, 0, 0, 0.20);
    --box-shadow-weak: 2px 2px 4px 0px rgba(0, 0, 0, 0.20);

    /* transition  */
    --transition-default: 0.2s all ease;
    --transition-fast: 0.1s all ease;

    /* size  */
    --header-height: 60px;
    --footer-height: 200px;
    --side-bar-max-width: 280px;
    --side-bar-min-width: 70px;
    --mobile-header-height: 60px;

    background-color: ${({ theme }) => theme.background};
    font-size: var(--font-size-normal);
    font-weight: var(--font-weight-normal);
    color: ${({ theme }) => theme.text};
  }
  
  html {
    font-size: 14px;
  }
  
  body{
    min-height: 100dvh;
    min-height: -webkit-fill-available; 
    overflow-y: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  ol, ul, li {
    list-style: none;
  }
  
  img {
    display: block;
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  .ant-dropdown {
    border: 1px solid #d9d9d9 !important;
    border-radius: var(--border-radius-normal) !important;
    overflow: hidden !important;
  }

  .ant-dropdown-menu {
    background-color: ${({ theme }) => theme.background} !important;
    
    span {
      color: ${({ theme }) => theme.text} !important;
    }
  }
`;
