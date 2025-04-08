"use client";

import * as styledComponents from "styled-components";
import { Theme } from "./theme";

export const { css, keyframes, ThemeProvider } =
  styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;
