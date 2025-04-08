import { useTranslation } from "react-i18next";
import { Logo } from "../Logo";
import {
  MainHeaderBlock,
  MainHeaderContainer,
  MenuItem,
  MenuSection,
  StyledMenuOutlined,
  StyledMoonFilled,
  StyledSunFilled,
  ThemeButton,
} from "./styles";
import { useGetUserAgentByWidth } from "@/hooks";
import { useTheme } from "next-themes";

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
          <StyledMenuOutlined onClick={handleOpen} />
          <Logo />
          <ThemeButton onClick={handleTheme}>
            {resolvedTheme === "dark" ? (
              <StyledSunFilled />
            ) : (
              <StyledMoonFilled />
            )}
          </ThemeButton>
        </>
      ) : (
        <>
          <MainHeaderBlock>
            <Logo />
            <MenuSection>
              <MenuItem href="/">{`${t("짠")}!`}</MenuItem>
              <MenuItem href="/all">{t("모든 폰트")}</MenuItem>
            </MenuSection>
          </MainHeaderBlock>
          <ThemeButton onClick={handleTheme}>
            {resolvedTheme === "dark" ? (
              <StyledSunFilled />
            ) : (
              <StyledMoonFilled />
            )}
          </ThemeButton>
        </>
      )}
    </MainHeaderContainer>
  );
}
