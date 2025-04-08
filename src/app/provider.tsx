"use client";

import { ErrorBoundary } from "react-error-boundary";
import { queryClient } from "@/configs";
import { MainErrorFallback } from "@/components";
import { I18nextProvider } from "react-i18next";
import { globalAntTheme, GlobalStyle, theme, ThemeProvider } from "@/styles";
import { ConfigProvider } from "antd";
import { QueryClientProvider } from "@tanstack/react-query";
import "@/assets/index.css";
import useInitializeI18n from "@/configs/i18n";
import i18n from "i18next";
import "@ant-design/v5-patch-for-react-19";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const i18nInitialized = useInitializeI18n();

  if (!i18nInitialized) {
    return null; // i18n 초기화가 완료될 때까지 아무것도 렌더링하지 않음
  }

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <GlobalStyle />
      <ConfigProvider theme={globalAntTheme}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </ConfigProvider>
    </ErrorBoundary>
  );
};
