"use client";

import {
  MainDrawer,
  MainErrorFallback,
  MainFooter,
  MainHeader,
} from "@/components";
import { usePathname } from "next/navigation";
import { ErrorBoundary } from "react-error-boundary";
import { MainLayoutBlock, MainLayoutContainer, PageContainer } from "./styles";
import { useState } from "react";
import { useGetUserAgentByWidth } from "@/hooks";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { userAgent } = useGetUserAgentByWidth();
  const [mainDrawerOpen, setMainDrawerOpen] = useState(false);

  const handleMainDrawerOpen = () => {
    setMainDrawerOpen(true);
  };

  const handleMainDrawerClose = () => {
    setMainDrawerOpen(false);
  };

  return (
    <MainLayoutContainer>
      {(userAgent === "mobile" || userAgent === "tablet") && (
        <MainDrawer open={mainDrawerOpen} handleClose={handleMainDrawerClose} />
      )}
      <MainHeader handleOpen={handleMainDrawerOpen} />
      <MainLayoutBlock>
        <PageContainer>{children}</PageContainer>
        <MainFooter />
      </MainLayoutBlock>
    </MainLayoutContainer>
  );
};

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <Layout>
      <ErrorBoundary key={pathname} FallbackComponent={MainErrorFallback}>
        {children}
      </ErrorBoundary>
    </Layout>
  );
};
