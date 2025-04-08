"use client";

import { useEffect, useState } from "react";

export function useGetUserAgentByWidth(): {
  userAgent: "mobile" | "tablet" | "laptop" | "desktop";
} {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

  if (innerWidth < 360) {
    return { userAgent: "mobile" };
  } else if (innerWidth >= 360 && innerWidth <= 768) {
    return { userAgent: "tablet" };
  } else if (innerWidth >= 768 && innerWidth <= 1280) {
    return { userAgent: "laptop" };
  } else return { userAgent: "desktop" };
}
