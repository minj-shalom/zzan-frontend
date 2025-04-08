import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "./themed-components";
import { GlobalStyle } from "./GlobalStyles";
import { darkTheme, lightTheme } from "./theme";

type ThemeWrapperProps = {
  children: React.ReactNode;
};

export function ThemeWrapper({ children }: ThemeWrapperProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <StyledThemeProvider
      theme={resolvedTheme === "dark" ? darkTheme : lightTheme}
    >
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
}
