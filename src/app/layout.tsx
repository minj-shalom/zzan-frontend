import { ReactNode } from "react";
import { AppProvider } from "./provider";
import { MainLayout } from "./_components/main-layout";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { searchFontListInitialQuery } from "@/constants";
import { searchFontQueryOptions } from "@/features";

export const metadata = {
  title: "짠!",
  description: "짠! 세상의 모든 폰트가 여기에.",
  icons: { icon: "/favicon.png" },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(
    searchFontQueryOptions(searchFontListInitialQuery)
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProvider>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <MainLayout>{children}</MainLayout>
          </HydrationBoundary>
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;

// We are not prerendering anything because the app is highly dynamic
// and the data depends on the user so we need to send cookies with each request
export const dynamic = "force-dynamic";
