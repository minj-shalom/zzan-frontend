"use client";

import { ErrorBoundary } from "react-error-boundary";
import { queryConfig } from "@/configs";
import { MainErrorFallback } from "@/components";
import { I18nextProvider } from "react-i18next";
import { globalAntTheme, ThemeWrapper } from "@/styles";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import useInitializeI18n from "@/configs/i18n";
import i18n from "i18next";
import "@ant-design/v5-patch-for-react-19";
import "@/assets/index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      })
  );

  const i18nInitialized = useInitializeI18n();

  if (!i18nInitialized) {
    return null; // i18n 초기화가 완료될 때까지 아무것도 렌더링하지 않음
  }

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <ConfigProvider theme={globalAntTheme}>
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeWrapper>
            <QueryClientProvider client={queryClient}>
              <ReactQueryDevtools initialIsOpen={false} />
              <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
            </QueryClientProvider>
          </ThemeWrapper>
        </NextThemeProvider>
      </ConfigProvider>
    </ErrorBoundary>
  );
};
