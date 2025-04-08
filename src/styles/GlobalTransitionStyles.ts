"use client";

import { keyframes } from "styled-components";

export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
