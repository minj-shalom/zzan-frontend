"use client";

import { useTranslation } from "react-i18next";
import { Logo } from "../Logo";
import {
  MainHeaderBlock,
  MainHeaderContainer,
  MenuItem,
  MenuSection,
  MenuButton,
  StyledMoonFilled,
  StyledSunFilled,
  ThemeButton,
  SearchButton,
  MobileLogoBlock,
} from "./styles";
import { useGetUserAgentByWidth } from "@/hooks";
import { useTheme } from "next-themes";
import { SearchFont } from "@/features";

type MainHeaderProps = {
  handleOpen: () => void;
};

export function MainHeader({ handleOpen }: MainHeaderProps) {
  const { t } = useTranslation();
  const { resolvedTheme, setTheme } = useTheme();
  const { userAgent } = useGetUserAgentByWidth();

  const handleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <MainHeaderContainer>
      {userAgent === "mobile" || userAgent === "tablet" ? (
        <>
          <MenuButton onClick={handleOpen} />
          <MobileLogoBlock>
            <Logo />
          </MobileLogoBlock>
          <MainHeaderBlock>
            <SearchButton onClick={handleOpen} />
            <ThemeButton onClick={handleTheme}>
              {resolvedTheme === "dark" ? (
                <StyledSunFilled />
              ) : (
                <StyledMoonFilled />
              )}
            </ThemeButton>
          </MainHeaderBlock>
        </>
      ) : (
        <>
          <MainHeaderBlock $gap="50px">
            <Logo />
            <MenuSection>
              <MenuItem href="/">{`${t("짠")}!`}</MenuItem>
              <MenuItem href="/all">{t("모든 폰트")}</MenuItem>
            </MenuSection>
          </MainHeaderBlock>
          <MainHeaderBlock>
            <SearchFont />
            <ThemeButton onClick={handleTheme}>
              {resolvedTheme === "dark" ? (
                <StyledSunFilled />
              ) : (
                <StyledMoonFilled />
              )}
            </ThemeButton>
          </MainHeaderBlock>
        </>
      )}
    </MainHeaderContainer>
  );
}
